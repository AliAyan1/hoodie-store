"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/product";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";



export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroGeometric
        badge="🔥 Hoodie Store"
        title1="Your Own"
        title2="Clothing Brand"
      />


      {/* Product Grid */}
      <main className="min-h-screen bg-gradient-to-tr from-[#e0e7ff] via-[#fdf2f8] to-[#fef9c3] px-6 py-16">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h1 className="text-6xl font-black text-gray-900 tracking-tight mb-4 drop-shadow-sm">
            🔥 Premium Hoodie Drop 2025
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Elevate your streetwear game with our freshest hoodie lineup — built for comfort, designed to flex.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 max-w-6xl mx-auto">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="relative group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative w-full h-80 sm:h-96">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </h2>
                  <span className="text-indigo-600 text-lg font-semibold">
                    {product.price}
                  </span>
                </div>
                <p className="text-gray-500 mt-2 text-sm">{product.description}</p>
                <div className="mt-4 inline-block px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full">
                  Limited Edition
                </div>
              </div>
              <div className="absolute top-5 right-5 bg-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                NEW
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center text-gray-500 text-sm">
          &copy; 2025 Hoodie Empire. Designed with 💖 and Tailwind.
        </footer>
      </main>
    </>
  );
}

