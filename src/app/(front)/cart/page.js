"use client";
import RemoveFromCartButton from "@/components/buttons/RemoveFromCartButton";
import { incrementQty, decrementQty, emptyCart } from "@/redux/cartSlice";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PiTrash } from "react-icons/pi";

export default function Cart() {
  // Récupération des articles du panier depuis le state global Redux
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Classe de style pour les boutons + et -
  const plusMinuceButton =
    "flex h-12 w-8 cursor-pointer items-center rounded-lg justify-center duration-100 hover:bg-secondary focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";

  // Fonction pour diminuer la quantité d'un article spécifique dans le panier
  const handleDecrement = (cartId) => {
    dispatch(decrementQty(cartId));
  };

  // Fonction pour augmenter la quantité d'un article spécifique dans le panier
  const handleIncrement = (cartId) => {
    dispatch(incrementQty(cartId));
  };

  // Fonction pour vider le panier de tous ses articles
  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-3 items-start gap-7 py-32">
      {/* Tableau affichant les articles du panier */}
      <table className="col-span-2 w-full table-fixed">
        <thead className="h-14 bg-accent/15 font-bold">
          <tr className="w-full text-center">
            <th className="w-[15%]"></th>
            <th className="w-[35%]">Product</th>
            <th className="w-[15%]">Price</th>
            <th className="w-[15%]">Quantity</th>
            <th className="w-[15%]">Subtotal</th>
            <th className="w-[5%]"></th>
          </tr>
        </thead>
        <tbody>
          {/* Boucle pour afficher chaque article du panier */}
          {cartItems.map((item, i) => (
            <tr key={i} className="text-center">
              <td>
                {/* Affichage de l'image du produit */}
                <Link href={`/products/${item.id}`}>
                  <Image
                    src={item.image}
                    width={70}
                    height={70}
                    className="my-1 w-full rounded-lg bg-accent/10 object-cover"
                  />
                </Link>
              </td>
              {/* Nom du produit */}
              <td className="px-2 font-semibold text-base-content/80">
                {item.title}
              </td>
              {/* Prix unitaire du produit */}
              <td className="px-2 text-base-content/80">
                {item.price.toFixed(2)} €
              </td>
              {/* Gestion de la quantité avec boutons + et - */}
              <td className="px-2">
                <div className="flex">
                  <button
                    className={`${plusMinuceButton}`}
                    onClick={() => handleDecrement(item.id)}
                  >
                    −
                  </button>
                  <div className="flex h-12 w-12 cursor-text items-center justify-center active:ring-gray-500">
                    {item.qty}
                  </div>
                  <button
                    className={`${plusMinuceButton}`}
                    onClick={() => handleIncrement(item.id)}
                  >
                    {" "}
                    +
                  </button>
                </div>
              </td>
              {/* Sous-total pour chaque article (prix * quantité) */}
              <td className="px-2">
                {Number(item.price * item.qty).toFixed(2)} €
              </td>
              {/* Bouton pour retirer un article du panier */}
              <td>
                <RemoveFromCartButton cartId={item.id} />
              </td>
            </tr>
          ))}
          {cartItems.length > 0 && (
            <tr>
              <td colSpan={6} className="text-right">
                <button
                  className="btn btn-error"
                  onClick={() => handleEmptyCart()}
                >
                  <PiTrash /> Empty Cart
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Section des totaux du panier */}
      <div className="col-span-1 flex h-[390px] w-full flex-col items-center justify-evenly bg-accent/15 px-16 pt-4">
        <h2 className="text-3xl font-semibold">Cart Totals</h2>
        <div className="flex w-full flex-col gap-8">
          {/* Sous-total général du panier */}
          <div className="flex w-full items-center justify-between">
            <p>Subtotal</p>
            <p className="text-gray-400">
              {cartItems
                .reduce((acc, current) => acc + current.price * current.qty, 0)
                .toFixed(2)}
              €
            </p>
          </div>
          {/* Total général du panier */}
          <div className="flex w-full items-center justify-between">
            <p>Total</p>
            <p className="text-xl font-semibold text-primary">
              {cartItems
                .reduce((acc, current) => acc + current.price * current.qty, 0)
                .toFixed(2)}
              €
            </p>
          </div>
        </div>
        {/* Bouton pour passer à la page de paiement */}
        <button className="btn btn-primary">Check Out</button>
      </div>
    </section>
  );
}
