import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";
import { getProducts, getProductById } from "@/services/productService";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });
};

export const prefetchProductById = async (id) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  return dehydrate(queryClient);
};
