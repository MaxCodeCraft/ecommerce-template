import React from "react";
import Link from "next/link";
import { BsBagX } from "react-icons/bs";
import RemoveFromCartButton from "../buttons/RemoveFromCartButton";
import Image from "next/image";

export default function CartModal({ cartItems }) {
  return (
    <dialog id="cart_modal" className="modal">
      <div className="modal-box absolute right-0 top-0 rounded-none px-10">
        <div className="flex w-full items-center justify-between">
          <h3 className="text-2xl font-bold">Shopping Cart</h3>
          <BsBagX className="text-2xl text-base-content/50" />
        </div>
        <div className="divider"></div>
        <div className="flex flex-col gap-2 pb-8 pt-4">
          {cartItems.map((item, i) => (
            <div key={i} className="grid grid-cols-8">
              <div className="col-span-2 h-24 w-24 rounded-lg bg-accent/10">
                <Link
                  href={`/product/${item.id}`}
                  onClick={() => document.getElementById("cart_modal").close()}
                >
                  <Image
                    src={item.image}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </Link>
              </div>

              <div className="col-span-5 flex max-w-full flex-col items-start justify-evenly px-4">
                <p>{item.title}</p>
                <p>
                  {item.qty} x{"  "}
                  <span className="font-semibold text-primary">
                    {item.price} €
                  </span>
                </p>
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <RemoveFromCartButton cartId={item.id} />
              </div>
            </div>
          ))}
        </div>
        <div className="grid w-full grid-cols-2 gap-2">
          <Link
            href={"/cart"}
            className="btn btn-primary"
            onClick={() => document.getElementById("cart_modal").close()}
          >
            Cart
          </Link>
          <button className="btn btn-secondary">Check Out</button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
