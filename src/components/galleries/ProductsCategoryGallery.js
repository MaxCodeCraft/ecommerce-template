"use client";
import { useProductsByCategory } from "@/hooks/useProducts";
import Link from "next/link";
import React from "react";

export default function ProductsCategoryGallery({ category }) {
  const { data: products, error, isFetching } = useProductsByCategory(category);

  if (isFetching) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        Loading... <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      {products.products.map((product, i) => (
        <div>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
}
