"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="w-full border-b ">
      <div className="mx-auto max-w-5xl flex items-center justify-between p-4">
        <Link href="/" className="font-bold">Product Hub</Link>
        <div className="flex items-center gap-4">
          <Link href="/products" className="hover:underline">Products</Link>
          {session ? (
            <>
              <Link href="/dashboard/add-product" className="hover:underline">Add Product</Link>
              <button onClick={() => signOut()} className="rounded px-3 py-1 border">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="rounded px-3 py-1 border">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
