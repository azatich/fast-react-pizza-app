import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-300 bg-yellow-500 p-4 font-semibold uppercase">
      <Link to="/" className="font-pizza tracking-[5px]">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
}
