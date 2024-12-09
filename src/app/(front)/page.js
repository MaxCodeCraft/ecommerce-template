import HomeCategories from "@/components/galleries/HomeCategories";
import Image from "next/image";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getCategories } from "@/services/productService";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return (
    <>
      {/* Hero section provisoire, à remplacer ! */}
      <div className="hero bg-base-200 py-64">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HomeCategories />
      </HydrationBoundary>
    </>
  );
}
