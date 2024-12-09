import React from "react";
import Link from "next/link";
import { PiUser, PiShoppingCartSimple, PiHeart } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getCategories } from "@/services/productService";
import MenuCategories from "./MenuCategories";

export default async function Header() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <header className="navbar mx-auto bg-base-100 lg:px-10">
      {/* Partie gauche de la navbar desktop et responsive */}
      <div className="navbar-start">
        {/* Menu dropdown responsive */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RxHamburgerMenu className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <a>Shop</a>
              <HydrationBoundary state={dehydrate(queryClient)}>
                <MenuCategories />
              </HydrationBoundary>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <Link href={"/"} role="button" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      {/* Partie centrale de la navbar desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <details>
              <summary>Shop</summary>
              <HydrationBoundary state={dehydrate(queryClient)}>
                <MenuCategories />
              </HydrationBoundary>
            </details>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      {/* Partie droite de la navbar desktop et responsive */}
      <div className="navbar-end">
        {/* Remplacer les <a> par des <Link> */}
        <a className="btn btn-ghost">
          <PiUser className="text-xl" />
          <p>Login / Register</p>
        </a>
        <a href="" className="btn btn-ghost">
          <PiShoppingCartSimple className="text-xl" />
        </a>
        <a href="" className="btn btn-ghost">
          <PiHeart className="text-xl" />
        </a>
      </div>
    </header>
  );
}
