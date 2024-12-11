import React from "react";
import { PiBag } from "react-icons/pi";
import { addToCart } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";

export default function AddToCartButton({ product, qty, isInCart }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
        qty: qty,
      }),
    );
  };
  return (
    <button
      className={`btn btn-primary flex items-center ${product.stock <= 0 && "btn-disabled"}`}
      onClick={handleAddToCart}
      disabled={product.stock <= 0}
    >
      <PiBag />
      {isInCart ? "Update Cart" : "Add to cart"}
    </button>
  );
}
