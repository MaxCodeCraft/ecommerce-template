import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";
import { getCategories } from "@/services/productService";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};

export const prefetchCategories = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return dehydrate(queryClient);
};
