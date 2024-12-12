import React from "react";
import ProductDetailsGallery from "@/components/galleries/ProductDetailsGallery";
import ProductDetailsDescription from "@/components/sections/ProductDetailsDescription";
import { HydrationBoundary } from "@tanstack/react-query";
import { prefetchProductById } from "@/hooks/useProducts";

export default async function ProductDetail({ params }) {
  const dehydratedState = await prefetchProductById(params.slug);
  return (
    <section className="container mx-auto max-w-7xl gap-20 lg:grid lg:grid-cols-2 lg:py-32">
      <HydrationBoundary state={dehydratedState}>
        <ProductDetailsGallery id={params.slug} />
        <ProductDetailsDescription id={params.slug} />
      </HydrationBoundary>
    </section>
  );
}
