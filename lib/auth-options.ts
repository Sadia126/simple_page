import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // You can add CredentialsProvider here later if you want email/password.
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" }, // our custom login page
  secret: process.env.NEXTAUTH_SECRET,
};
