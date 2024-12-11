import React from "react";
import Link from "next/link";

export default function CartModal({ cartItems }) {
  return (
    <dialog id="cart_modal" className="modal">
      <div className="modal-box absolute right-0 top-0 rounded-none">
        <h3 className="text-lg font-bold">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
        <div className="grid w-full grid-cols-2 gap-2">
          <Link
            href={"/cart"}
            className="btn btn-primary"
            onClick={() => document.getElementById("cart_modal").close()}
          >
            Cart
          </Link>
          <button className="btn btn-primary">Check Out</button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
