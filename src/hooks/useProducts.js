import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";
import {
  getProducts,
  getProductById,
  getProductsByCategory,
} from "@/services/productService";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
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

export const useProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });
};

export const prefetchProductByCategory = async (category) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products", category],
    queryFn: () => getProductsByCategory(category),
  });
  return dehydrate(queryClient);
};

export const useProductsByCategory = (category) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: () => getProductsByCategory(category),
  });
};
