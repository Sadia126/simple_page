"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleGoogle = () => {
    signIn("google", { callbackUrl: "/products" });
  };

  return (
    <div className="min-h-screen grid place-items-center p-4">
      <div className="w-full max-w-sm rounded-2xl border p-6 text-center">
        <h1 className="text-xl font-semibold">Login</h1>
        <p className="mt-2 text-sm text-gray-600">Use Google to continue</p>
        <button
          onClick={handleGoogle}
          className="mt-6 w-full rounded bg-black px-4 py-2 text-white"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
