"use server";

// Faire les fetch à l'API Next.js ici

export const getProducts = async () => {
  // '/api/products'
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
};

export const getProductById = async (id) => {
  // `/api/products/id/${id}`
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch product with ID: ${id}`);
  return response.json();
};

export const getProductBySlug = async (slug) => {
  // `/api/products/slug/${slug}`
  const response = await fetch(`https://dummyjson.com/products/${slug}`);
  if (!response.ok)
    throw new Error(`Failed to fetch product with slug: ${slug}`);
  return response.json();
};

export const getProductsByCategory = async (category) => {
  // `/api/products/category/${category}`
  const response = await fetch(`https://dummyjson.com/products/${slug}`);
  if (!response.ok)
    throw new Error(`Failed to fetch product with slug: ${slug}`);
  return response.json();
};

export const getCategories = async () => {
  // '/api/categories'
  const response = await fetch("https://dummyjson.com/products/categories");
  if (!response.ok) throw new Error("Failed to fetch categories");
  return response.json();
};
