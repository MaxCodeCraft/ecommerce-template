import { useQuery } from "@tanstack/react-query";
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
    enabled: !!id, // N'exécute le fetch que si l'ID existe
  });
};
