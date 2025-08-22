export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*"], // any /dashboard/* page requires auth
};
