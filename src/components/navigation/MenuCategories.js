"use client";
import React from "react";
import { useCategories } from "@/hooks/useCategories";
import Link from "next/link";

export default function MenuCategories() {
  const { data: categories, error, isFetched } = useCategories();
  const handleLinkClick = (e) => {
    // Récupère l'élément <details> parent pour pouvoir le fermer (daisyUI)
    const detailsParent = e.target.closest("details");
    if (detailsParent) {
      detailsParent.removeAttribute("open");
    }
  };

  return (
    <ul className="z-50 w-52 rounded-lg p-2">
      {/* Retirer le .slice() une fois les données réelles récupérées de la BDD, 
        uniquement là pour tester avec une liste de taille correcte */}
      {categories.slice(0, 5).map((cat, i) => (
        <li key={cat.name}>
          <Link href={`/category/${cat.slug}`} onClick={handleLinkClick}>
            {cat.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
