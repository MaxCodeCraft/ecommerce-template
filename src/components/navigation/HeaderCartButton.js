"use client";
import React from "react";
import Link from "next/link";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useSelector } from "react-redux";
import CartModal from "../modals/CartModal";

export default function HeaderCartButton() {
  const cartItems = useSelector((state) => state.cart);
  const itemsNumber = cartItems.reduce((acc, current) => acc + current.qty, 0);
  return (
    // <Link href={"/cart"} className="btn btn-ghost">
    <>
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => document.getElementById("cart_modal").showModal()}
      >
        <PiShoppingCartSimple className="text-xl" />
        {itemsNumber}
      </button>
      <CartModal cartItems={cartItems} />
    </>
    // </Link>
  );
}
