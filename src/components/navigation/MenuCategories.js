"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/productService";

export default function MenuCategories() {
  const {
    data: categories,
    error,
    isFetched,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <ul className="z-50 w-52 rounded-lg p-2">
      {/* Retirer le .slice() une fois les données réelles récupérées de la BDD, 
        uniquement là pour tester avec une liste de taille correcte */}
      {categories.slice(0, 5).map((cat, i) => (
        <li key={cat.name}>
          <a>{cat.name}</a>
        </li>
      ))}
    </ul>
  );
}
