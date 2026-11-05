import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { PRODUCTS as INITIAL_PRODUCTS } from "@/data/products";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ggumahzbwhgvgortfnvz.supabase.co";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

function getSupabaseAdmin() {
  if (!serviceRoleKey) {
    return null;
  }
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });
}

export async function GET() {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({
      success: false,
      message: "Database service key not configured.",
    });
  }

  try {
    // 1. Fetch live products
    const { data: dbProducts, error: prodErr } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    // 2. Fetch live orders with items
    const { data: dbOrders, error: orderErr } = await supabase
      .from("orders")
      .select("*, order_items(*)")
      .order("created_at", { ascending: false });

    // 3. Fetch live bulk quote inquiries
    const { data: dbQuotes, error: quoteErr } = await supabase
      .from("bulk_quotes")
      .select("*")
      .order("created_at", { ascending: false });

    // 4. Fetch live coupons
    const { data: dbCoupons, error: couponErr } = await supabase
      .from("coupons")
      .select("*")
      .order("created_at", { ascending: false });

    // Map orders
    const orders = (dbOrders || []).map((o: any) => ({
      id: o.id,
      orderNumber: o.order_number,
      createdAt: o.created_at,
      customerName: o.customer_name,
      customerEmail: o.customer_email,
      customerPhone: o.customer_phone,
      shippingAddress: o.shipping_address || {},
      deliverySlot: o.delivery_time_slot,
      deliveryFee: Number(o.delivery_fee) || 0,
      subtotal: Number(o.subtotal) || 0,
      bulkDiscount: Number(o.bulk_discount) || 0,
      couponCode: o.coupon_code,
      couponDiscount: Number(o.coupon_discount) || 0,
      taxAmount: Math.round((Number(o.total) || 0) * 0.12),
      total: Number(o.total) || 0,
      paymentMethod: o.payment_method || "cod",
      paymentStatus: o.payment_status || "pending",
      orderStatus: o.order_status || "processing",
      trackingNumber: o.tracking_number,
      courierPartner: o.courier_partner || "Instant Express Surface",
      customerNotes: o.customer_notes,
      items: Array.isArray(o.order_items)
        ? o.order_items.map((it: any) => ({
            id: it.id,
            productId: it.product_id,
            productName: it.product_name,
            sku: it.sku,
            quantity: it.quantity,
            unitPrice: Number(it.unit_price) || 0,
            totalPrice: Number(it.total_price) || 0,
            selectedColor: it.selected_color,
          }))
        : [],
    }));

    // Map products (overlaying live stock & prices onto initial catalog)
    const initialMap = new Map(INITIAL_PRODUCTS.map((p) => [p.slug, p]));
    const products = (dbProducts || []).map((p: any) => {
      const init = initialMap.get(p.slug) || ({} as any);
      return {
        id: p.id,
        name: p.name || init.name,
        slug: p.slug,
        sku: p.sku || init.sku,
        category: p.category || init.category || "office-stationery",
        subCategory: p.sub_category || init.subCategory || "",
        description: p.description || init.description || "",
        shortDescription: p.short_description || init.shortDescription || "",
        price: Number(p.price ?? init.price ?? 0),
        originalPrice: Number(p.original_price ?? init.originalPrice ?? p.price ?? 0),
        stock: Number(p.stock_quantity ?? p.stock ?? init.stock ?? 100),
        rating: Number(p.rating ?? init.rating ?? 4.8),
        reviewCount: Number(p.review_count ?? init.reviewCount ?? 0),
        isBestseller: Boolean(p.is_bestseller ?? init.isBestseller),
        isEcoFriendly: Boolean(p.is_eco_friendly ?? init.isEcoFriendly),
        isNew: Boolean(p.is_new ?? init.isNew),
        images: Array.isArray(p.images) && p.images.length > 0 ? p.images : init.images || [],
        highlights: p.highlights || init.highlights || [],
        specifications: p.specifications || init.specifications || {},
        bulkPricing: Array.isArray(p.bulk_pricing) && p.bulk_pricing.length > 0 ? p.bulk_pricing : init.bulkPricing || [],
      };
    });

    // Map quotes
    const quotes = (dbQuotes || []).map((q: any) => ({
      id: q.id,
      companyName: q.company_name,
      contactPerson: q.contact_person,
      phone: q.phone,
      email: q.email,
      gstNumber: q.gst_number,
      businessType: q.business_type,
      productList: q.product_list,
      deliveryDate: q.delivery_date,
      deliveryLocation: q.delivery_location,
      specialRequirements: q.special_requirements,
      paymentPreference: q.payment_preference,
      status: q.status || "received",
      estimatedValue: Number(q.estimated_value) || 0,
      internalNotes: q.internal_notes,
      createdAt: q.created_at,
    }));

    // Map coupons
    const coupons = (dbCoupons || []).map((c: any) => ({
      id: c.id,
      code: c.code,
      discountType: "percentage",
      discountValue: Number(c.discount_percent) || 10,
      minOrderValue: Number(c.min_order_amount) || 0,
      maxDiscount: c.max_discount_amount ? Number(c.max_discount_amount) : undefined,
      expiryDate: c.valid_until,
      usageLimit: 1000,
      usedCount: 0,
      isActive: Boolean(c.is_active),
      createdAt: c.created_at,
    }));

    return NextResponse.json({
      success: true,
      data: {
        products,
        orders,
        quotes,
        coupons,
        syncedAt: new Date().toISOString(),
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err?.message || "Sync failed" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({
      success: false,
      message: "Database service key not configured.",
    });
  }

  try {
    const body = await request.json();
    const { action } = body;

    if (action === "update_stock") {
      const { productId, stock } = body;
      const { error } = await supabase
        .from("products")
        .update({ stock_quantity: Number(stock), updated_at: new Date().toISOString() })
        .eq("id", productId);

      if (error) throw error;
      return NextResponse.json({ success: true, message: "Stock updated in database." });
    }

    if (action === "update_order_status") {
      const { orderId, status, trackingNumber, courierPartner } = body;
      const updates: any = {
        order_status: status,
        updated_at: new Date().toISOString(),
      };
      if (trackingNumber !== undefined) updates.tracking_number = trackingNumber;
      if (courierPartner !== undefined) updates.courier_partner = courierPartner;

      const { error } = await supabase
        .from("orders")
        .update(updates)
        .eq("id", orderId);

      if (error) throw error;
      return NextResponse.json({ success: true, message: "Order updated in database." });
    }

    if (action === "update_quote_status") {
      const { quoteId, status, internalNotes, estimatedValue } = body;
      const updates: any = {
        status,
        updated_at: new Date().toISOString(),
      };
      if (internalNotes !== undefined) updates.internal_notes = internalNotes;
      if (estimatedValue !== undefined) updates.estimated_value = Number(estimatedValue);

      const { error } = await supabase
        .from("bulk_quotes")
        .update(updates)
        .eq("id", quoteId);

      if (error) throw error;
      return NextResponse.json({ success: true, message: "Quote updated in database." });
    }

    if (action === "create_order") {
      const { order } = body;
      const { data: insertedOrder, error: orderErr } = await supabase
        .from("orders")
        .insert({
          id: order.id,
          order_number: order.orderNumber,
          customer_name: order.customerName,
          customer_email: order.customerEmail,
          customer_phone: order.customerPhone,
          shipping_address: order.shippingAddress,
          delivery_time_slot: order.deliverySlot || "evening",
          delivery_type: "standard",
          delivery_fee: order.deliveryFee || 0,
          subtotal: order.subtotal,
          bulk_discount: order.bulkDiscount || 0,
          coupon_code: order.couponCode || null,
          coupon_discount: order.couponDiscount || 0,
          total: order.total,
          payment_method: order.paymentMethod,
          payment_status: order.paymentStatus,
          order_status: order.orderStatus,
          tracking_number: order.trackingNumber || null,
          courier_partner: order.courierPartner || null,
          customer_notes: order.customerNotes || null,
        })
        .select()
        .single();

      if (orderErr) throw orderErr;

      if (order.items && order.items.length > 0) {
        const items = order.items.map((it: any) => ({
          order_id: order.id,
          product_name: it.productName,
          sku: it.sku,
          quantity: it.quantity,
          unit_price: it.unitPrice,
          total_price: it.totalPrice,
          selected_color: it.selectedColor || null,
        }));
        const { error: itemsErr } = await supabase.from("order_items").insert(items);
        if (itemsErr) console.warn("Failed to insert order items:", itemsErr.message);
      }

      return NextResponse.json({ success: true, order: insertedOrder });
    }

    return NextResponse.json({ success: false, message: "Unknown action." }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err?.message || "Action failed." },
      { status: 500 }
    );
  }
}
