"use client";
import { useProductById } from "@/hooks/useProducts";
import React, { useState, useEffect } from "react";
import { PiHeart } from "react-icons/pi";
import AddToCartButton from "../buttons/AddToCartButton";
import { useSelector } from "react-redux";

export default function ProductDetailsDescription({ id }) {
  const { data: product, error, isFetched } = useProductById(id);
  const cartItems = useSelector((state) => state.cart);

  const [qty, setQty] = useState(() => {
    const itemInCart = cartItems.find((x) => x.id === Number(id));
    return itemInCart ? itemInCart.qty : 1; // Si l'item est dans le panier, on récupère sa quantité, sinon on initialise à 1
  });
  const isInCart = cartItems.find((x) => x.id === Number(id));

  const plusMinuceButton =
    "flex h-12 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";

  const handleDecrementQty = () => {
    setQty((previous) => (previous > 1 ? previous - 1 : previous));
  };

  const handleIncrementQty = () => {
    setQty((previous) => (previous < product.stock ? previous + 1 : previous));
  };

  return (
    <div className="">
      <h2 className="pt-3 text-2xl font-bold lg:pt-0">{product.title}</h2>
      <div className="mt-1"></div>
      <p className="mt-5 font-bold">
        Availability:{" "}
        {product.stock > 0 ? (
          <span className="text-success">In Stock </span>
        ) : (
          <span className="text-error">Expired</span>
        )}
      </p>
      {/* <p className="font-bold">
          Brand: <span className="font-normal">{product.brand}</span>
        </p> */}
      <p className="font-bold">
        Category:{" "}
        <span className="font-normal">
          {product.category.slice(0, 1).toUpperCase() +
            product.category.slice(1).toLowerCase()}
        </span>
      </p>
      {/* <p className="font-bold">
          SKU: <span className="font-normal">{product.sku}</span>
        </p> */}
      <p className="mt-4 text-4xl font-bold text-primary">
        {product.price}€{" "}
        {/* <span className="text-xs text-gray-400 line-through">
          {product.previousPrice}€
        </span> */}
      </p>
      <p className="pt-5 text-sm leading-5 text-gray-500">
        {product.description}
      </p>
      {/* <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Size</p>
          <div className="flex gap-1">
            {product.dimensions.map((x, index) => {
              return (
                <div
                  key={index}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                >
                  {x}
                </div>
              );
            })}
          </div>
        </div> */}
      {/* {product.color && (
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Color</p>
          <div className="flex gap-2">
            {product.color.map((color, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className={`h-8 w-8 cursor-pointer rounded-full`}
                />
              );
            })}
          </div>
        </div>
      )} */}

      <div className="mt-7 flex flex-row items-center gap-6">
        <div className="">
          <div className="flex">
            <button
              className={`${plusMinuceButton}`}
              onClick={handleDecrementQty}
            >
              −
            </button>
            <div className="flex h-12 w-12 cursor-text items-center justify-center border-b border-t active:ring-gray-500">
              {qty}
            </div>
            <button
              className={`${plusMinuceButton}`}
              onClick={handleIncrementQty}
            >
              {" "}
              +
            </button>
          </div>
        </div>
        <AddToCartButton product={product} qty={qty} isInCart={isInCart} />
        <button className="btn btn-secondary flex items-center">
          <PiHeart />
          Wishlist
        </button>
      </div>
    </div>
  );
}
