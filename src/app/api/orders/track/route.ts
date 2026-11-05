import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || searchParams.get("id") || "";

    if (!query.trim()) {
      return NextResponse.json(
        { success: false, message: "Search query is required." },
        { status: 400 }
      );
    }

    const clean = query.trim().toLowerCase();
    const phoneDigits = clean.replace(/[^0-9]/g, "");
    const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(clean);

    let queryBuilder = supabaseAdmin
      .from("orders")
      .select("*, order_items(*)");

    if (isUUID) {
      queryBuilder = queryBuilder.eq("id", clean);
    } else {
      const orConditions: string[] = [
        `order_number.ilike.%${clean}%`,
        `tracking_number.ilike.%${clean}%`,
        `customer_email.ilike.%${clean}%`,
      ];
      if (phoneDigits.length >= 4) {
        orConditions.push(`customer_phone.ilike.%${phoneDigits}%`);
      }
      queryBuilder = queryBuilder.or(orConditions.join(","));
    }

    const { data, error } = await queryBuilder
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { success: false, message: "No order found matching your inquiry." },
        { status: 404 }
      );
    }

    const order = {
      id: data.id,
      orderNumber: data.order_number,
      createdAt: data.created_at,
      customerName: data.customer_name,
      customerEmail: data.customer_email,
      customerPhone: data.customer_phone,
      shippingAddress: data.shipping_address || {},
      deliverySlot: data.delivery_time_slot,
      deliveryFee: Number(data.delivery_fee) || 0,
      subtotal: Number(data.subtotal) || 0,
      bulkDiscount: Number(data.bulk_discount) || 0,
      couponCode: data.coupon_code,
      couponDiscount: Number(data.coupon_discount) || 0,
      taxAmount: Math.round((Number(data.total) || 0) * 0.12),
      total: Number(data.total) || 0,
      paymentMethod: data.payment_method || "cod",
      paymentStatus: data.payment_status || "pending",
      orderStatus: data.order_status || "processing",
      trackingNumber: data.tracking_number,
      courierPartner: data.courier_partner || "Instant Express Surface",
      customerNotes: data.customer_notes,
      items: Array.isArray(data.order_items)
        ? data.order_items.map((it: any) => ({
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
    };

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to lookup order." },
      { status: 500 }
    );
  }
}
