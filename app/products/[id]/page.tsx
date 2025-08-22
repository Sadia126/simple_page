import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

async function getProduct(id: string) {
  const res = await fetch(`${process.env.NEXTAUTH_URL ?? ""}/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  if (!product) {
    return (
      <main>
        <Navbar />
        <div className="mx-auto max-w-3xl px-4 py-10">Product not found.</div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="mt-2 text-gray-600">${product.price.toFixed(2)}</div>
        <p className="mt-4">{product.description}</p>
      </section>
      <Footer />
    </main>
  );
}
