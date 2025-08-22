"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

type FormValues = { name: string; description: string; price: number };

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormValues>();

  useEffect(() => {
    if (status === "unauthenticated") signIn(undefined, { callbackUrl: "/products" });
  }, [status]);

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, price: Number(data.price) }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.error || "Failed to add product");
      }
      toast.success("Product added!");
      reset();
      router.push("/products");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      toast.error(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return <div className="min-h-screen grid place-items-center">Checking auth…</div>;
  }

  if (!session) return null;

  return (
    <div className="min-h-screen grid place-items-center p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4 rounded-2xl border p-6">
        <h1 className="text-xl font-semibold">Add Product</h1>
        <input
          className="w-full rounded border p-2"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <textarea
          className="w-full rounded border p-2"
          placeholder="Description"
          rows={4}
          {...register("description")}
        />
        <input
          type="number"
          step="0.01"
          className="w-full rounded border p-2"
          placeholder="Price"
          {...register("price", { required: true, valueAsNumber: true })}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-black px-4 py-2 text-white disabled:opacity-60"
        >
          {loading ? "Adding…" : "Add Product"}
        </button>
      </form>
    </div>
  );
}
