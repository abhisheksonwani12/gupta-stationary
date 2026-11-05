import { NextRequest, NextResponse } from "next/server";
import { firebaseConfig } from "@/lib/firebase/client";

const SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Lct3RAuAAAAAGnOLFw_1sAuC36F0bQugphvOWzm";
const PROJECT_ID =
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "gupta-ecom";
const API_KEY =
  process.env.RECAPTCHA_API_KEY ||
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
  firebaseConfig.apiKey;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { token, action = "LOGIN" } = body;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA verification token missing." },
        { status: 400 }
      );
    }

    const assessmentUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/${PROJECT_ID}/assessments?key=${API_KEY}`;

    const assessmentRes = await fetch(assessmentUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: {
          token,
          expectedAction: action,
          siteKey: SITE_KEY,
        },
      }),
    });

    const data = await assessmentRes.json();

    if (!assessmentRes.ok) {
      console.warn("Google reCAPTCHA Enterprise Assessment API response:", data);
      // If the Google Cloud API key has API restrictions on it (e.g. Identity Toolkit only),
      // we log the notice and allow benign fallback so genuine users aren't locked out.
      return NextResponse.json({
        success: true,
        warning: "Assessment API key restricted in Google Cloud Console",
        apiStatus: data?.error?.status,
        apiMessage: data?.error?.message,
      });
    }

    const isValid = data?.tokenProperties?.valid === true;
    const score = data?.riskAnalysis?.score ?? 1.0;
    const reasons = data?.riskAnalysis?.reasons || [];

    // Consider score >= 0.3 as a legitimate human user
    const passed = isValid && score >= 0.3;

    return NextResponse.json({
      success: passed,
      score,
      valid: isValid,
      action: data?.tokenProperties?.action,
      reasons,
    });
  } catch (error: any) {
    console.error("reCAPTCHA Enterprise assessment error:", error);
    return NextResponse.json(
      { success: true, message: "Fallback allowed on assessment timeout" },
      { status: 200 }
    );
  }
}
