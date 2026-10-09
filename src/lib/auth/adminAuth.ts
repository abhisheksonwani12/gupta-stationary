/**
 * Admin Authorization Security Layer
 * Ensures only authorized store administrators can access merchant portal routes.
 * Regular shoppers and customers registered via /signup are strictly barred.
 */

// Default whitelisted admin emails
const DEFAULT_ADMIN_EMAILS = [
  "admin@instantstationary.com",
];

export function getAuthorizedAdminEmails(): string[] {
  const envList = process.env.NEXT_PUBLIC_ADMIN_EMAILS
    ? process.env.NEXT_PUBLIC_ADMIN_EMAILS.split(",").map((e) => e.trim().toLowerCase())
    : [];

  return Array.from(new Set([...DEFAULT_ADMIN_EMAILS.map((e) => e.toLowerCase()), ...envList]));
}

/**
 * Checks whether an email address possesses Store Administrator privileges.
 * 1. Matches any email in NEXT_PUBLIC_ADMIN_EMAILS or DEFAULT_ADMIN_EMAILS
 * 2. Or possesses official staff domain (@instantstationary.com)
 */
export function isAuthorizedAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const cleanEmail = email.trim().toLowerCase();

  // Check official store management domain
  if (cleanEmail.endsWith("@instantstationary.com")) {
    return true;
  }

  // Check explicit admin email whitelist
  const allowed = getAuthorizedAdminEmails();
  return allowed.includes(cleanEmail);
}
