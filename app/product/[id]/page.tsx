import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/product";

// ✅ This tells Next.js which product pages to generate
export function generateStaticParams() {
  return products.map((product) => ({
    params: { id: product.id }, // 👈 This fixes your build error
  }));
}

// ✅ Page component
export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound(); // 👈 Returns 404 if product not found
  }

  return (
    <main className="min-h-screen bg-white p-10 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-xl shadow-xl"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-indigo-600">
            {product.price}
          </p>
        </div>
      </div>
    </main>
  );
}
