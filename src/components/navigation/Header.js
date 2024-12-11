import React from "react";
import Link from "next/link";
import { PiUser, PiHeart, PiSun, PiMoon } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { HydrationBoundary } from "@tanstack/react-query";
import { prefetchCategories } from "@/hooks/useCategories";
import MenuCategories from "./MenuCategories";
import HeaderCartButton from "./HeaderCartButton";

export default async function Header() {
  const dehydratedState = await prefetchCategories();

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
              <HydrationBoundary state={dehydratedState}>
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
              <HydrationBoundary state={dehydratedState}>
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
        <label className="mr-4 flex cursor-pointer items-center gap-2">
          <PiSun className="text-xl" />
          <input
            type="checkbox"
            value="night"
            className="theme-controller toggle"
          />
          <PiMoon className="text-xl" />
        </label>
        {/* Remplacer les <a> par des <Link> */}
        <a className="btn btn-ghost">
          <PiUser className="text-xl" />
          <p>Login / Register</p>
        </a>
        <HeaderCartButton />
        <a href="" className="btn btn-ghost">
          <PiHeart className="text-xl" />
        </a>
      </div>
    </header>
  );
}
