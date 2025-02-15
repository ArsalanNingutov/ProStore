export const APP_NAME = process.env.PUBLIC_APP_NAME || "ProStore";
export const APP_DESCRIPTION =
  process.env.PUBLIC_APP_DESCRIPTION ||
  "A modern ecommerce store build with Next.js";
export const SERVER_URL = process.env.SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;
