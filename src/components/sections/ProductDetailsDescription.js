"use client";
import { useProductById } from "@/hooks/useProducts";
import React from "react";
import { PiHeart, PiBag } from "react-icons/pi";

export default function ProductDetailsDescription({ id }) {
  const { data: product, error, isFetched } = useProductById(id);
  const plusMinuceButton =
    "flex h-12 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";

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
            <button className={`${plusMinuceButton}`}>−</button>
            <div className="flex h-12 w-12 cursor-text items-center justify-center border-b border-t active:ring-gray-500">
              1
            </div>
            <button className={`${plusMinuceButton}`}> +</button>
          </div>
        </div>
        <button
          className={`btn btn-primary flex items-center ${product.stock <= 0 && "btn-disabled"}`}
        >
          <PiBag />
          Add to cart
        </button>
        <button className="btn btn-secondary flex items-center">
          <PiHeart />
          Wishlist
        </button>
      </div>
    </div>
  );
}
