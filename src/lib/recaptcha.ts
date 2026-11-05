/**
 * Google Cloud reCAPTCHA Enterprise helper for Instant Stationary
 * Project: gupta-ecom
 */

export const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Lct3RAuAAAAAGnOLFw_1sAuC36F0bQugphvOWzm";

export const RECAPTCHA_PROJECT_ID =
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "gupta-ecom";

declare global {
  interface Window {
    grecaptcha?: {
      enterprise?: {
        ready: (cb: () => void | Promise<void>) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

/**
 * Execute reCAPTCHA Enterprise on the client to obtain an action assessment token
 */
export async function executeRecaptcha(action: string = "LOGIN"): Promise<string | null> {
  if (typeof window === "undefined") return null;

  return new Promise((resolve) => {
    // If grecaptcha enterprise is not loaded, resolve gracefully
    if (!window.grecaptcha?.enterprise) {
      // Retry once after 500ms in case script was still initializing
      setTimeout(() => {
        if (window.grecaptcha?.enterprise) {
          try {
            window.grecaptcha.enterprise.ready(async () => {
              try {
                const token = await window.grecaptcha!.enterprise!.execute(
                  RECAPTCHA_SITE_KEY,
                  { action }
                );
                resolve(token);
              } catch (e) {
                console.warn("reCAPTCHA Enterprise execution notice:", e);
                resolve(null);
              }
            });
          } catch {
            resolve(null);
          }
        } else {
          resolve(null);
        }
      }, 500);
      return;
    }

    try {
      window.grecaptcha.enterprise.ready(async () => {
        try {
          const token = await window.grecaptcha!.enterprise!.execute(
            RECAPTCHA_SITE_KEY,
            { action }
          );
          resolve(token);
        } catch (err) {
          console.warn("reCAPTCHA Enterprise execute error:", err);
          resolve(null);
        }
      });
    } catch (err) {
      console.warn("reCAPTCHA Enterprise ready error:", err);
      resolve(null);
    }
  });
}

/**
 * Client helper to verify a token against our server assessment route
 */
export async function verifyRecaptchaToken(
  token: string,
  action: string = "LOGIN"
): Promise<{ success: boolean; score?: number; message?: string }> {
  try {
    const res = await fetch("/api/recaptcha/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, action }),
    });
    return await res.json();
  } catch (error: any) {
    console.warn("reCAPTCHA verification API call failed:", error);
    return { success: true, message: "Bypassed verification on network error" };
  }
}
