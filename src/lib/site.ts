// Canonical site URL. On Vercel, VERCEL_PROJECT_PRODUCTION_URL is injected
// automatically and points to the production domain (without protocol).
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
