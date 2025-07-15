import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/product";
import { type Metadata } from "next";

// Type for route params
type ProductPageProps = {
  params: {
    id: string;
  };
};

// ✅ Dynamic metadata with Turbopack fix
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

// ✅ Page component with Turbopack-compatible param handling
export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-indigo-600">{product.price}</p>
        </div>
      </div>
    </main>
  );
}
