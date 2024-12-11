import { removeFromCart } from "@/redux/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { FaCircleXmark } from "react-icons/fa6";

export default function RemoveFromCartButton({ cartId }) {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartId));
  };
  return (
    <button onClick={handleRemoveFromCart}>
      <FaCircleXmark />
    </button>
  );
}
