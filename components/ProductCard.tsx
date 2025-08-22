import Link from "next/link";

type Props = {
  _id: string;
  name: string;
  description: string;
  price: number;
};

export default function ProductCard({ _id, name, description, price }: Props) {
  return (
    <div className="rounded-2xl border p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      <div className="mt-3 font-medium">${price.toFixed(2)}</div>
      <Link href={`/products/${_id}`} className="mt-3 inline-block rounded bg-black px-3 py-1 text-white">
        Details
      </Link>
    </div>
  );
}
