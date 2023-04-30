/**
 * This app route is dynamic because it uses the `cookies` import.
 */

import { cookies } from "next/headers";

export async function GET() {
  // Get all cookies does NOT make app route dynamic
  const allCookies = cookies().getAll();
  const cookiesDesc = allCookies.map((c) => c.name + "=" + c.value).join(", ");

  // Get a specific cookie does NOT make app route dynamic
  const cookieA = cookies().get("a");

  const message = "GET @ " + Date.now() + " cookies: " + cookiesDesc;
  console.log(message);

  return new Response(message, { status: 200 });
}
