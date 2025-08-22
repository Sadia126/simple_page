/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-2xl font-semibold mb-4">Products</h1>
        {products?.length ? (
          <div className="grid gap-4 md:grid-cols-3">
            {products.map((p: any) => (
              <ProductCard key={p._id} {...p} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No products yet.</p>
        )}
      </section>
      <Footer />
    </main>
  );
}
