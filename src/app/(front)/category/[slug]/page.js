import React from "react";
import { HydrationBoundary } from "@tanstack/react-query";
import { prefetchProductByCategory } from "@/hooks/useProducts";
import ProductsCategoryGallery from "@/components/galleries/ProductsCategoryGallery";

export default function CategoryPage({ params }) {
  const dehydratedState = prefetchProductByCategory(params.slug);
  return (
    <section className="container mx-auto max-w-7xl lg:py-32">
      <HydrationBoundary state={dehydratedState}>
        <ProductsCategoryGallery category={params.slug} />
      </HydrationBoundary>
    </section>
  );
}
