import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">Find Best Product From Product Hub</h1>
        <p className="mt-3 text-gray-600">
          A simple product management app built with Next.js, NextAuth, and MongoDB.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/products" className="rounded bg-black px-4 py-2 text-white">View Products</Link>
          <Link href="/login" className="rounded border px-4 py-2">Login</Link>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          <li className="rounded-2xl border p-4">Next.js App Router</li>
          <li className="rounded-2xl border p-4">NextAuth Google Login</li>
          <li className="rounded-2xl border p-4">MongoDB via Mongoose</li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
