import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, data } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required." },
        { status: 400 }
      );
    }

    // 1. Create confirmed user directly via Admin API to prevent email rate limit errors
    const { data: created, error } = await supabaseAdmin.auth.admin.createUser({
      email: email.trim(),
      password,
      email_confirm: true,
      user_metadata: data || {},
    });

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    // 2. Ensure company details and role are updated in profiles
    if (created?.user?.id && data) {
      try {
        await supabaseAdmin.from("profiles").upsert({
          id: created.user.id,
          full_name: data.full_name || data.name || "Customer",
          email: email.trim(),
          phone: data.phone || "",
          company_name: data.company_name || null,
          gst_number: data.gst_number || null,
          role: data.role || "customer",
          is_wholesale_verified: data.role === "wholesale_partner",
          loyalty_points: data.role === "wholesale_partner" ? 150 : 100,
        });
      } catch (profileErr) {
        // Trigger might have already handled it
      }
    }

    return NextResponse.json({
      success: true,
      user: created.user,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Registration failed." },
      { status: 500 }
    );
  }
}
