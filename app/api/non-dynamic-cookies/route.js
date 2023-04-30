/**
 * This app route is NOT dynamic despite using `cookies` on the request.
 */

export async function GET(request) {
  // Get all cookies does NOT make app route dynamic
  const allCookies = request.cookies.getAll();
  const cookiesDesc = allCookies.map((c) => c.name + "=" + c.value).join(", ");

  // Get a specific cookie does NOT make app route dynamic
  const cookieA = request.cookies.get("a");

  const message = "GET @ " + Date.now() + " cookies: " + cookiesDesc;
  console.log(message);

  return new Response(message, { status: 200 });
}
