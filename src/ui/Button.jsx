import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-bold uppercase tracking-wide text-stone-800 transition-colors duration-150 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-3",
    small: base + " px-4 py-2 md:px-4 md:py-2 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-bold uppercase tracking-wide text-stone-400 transition-colors duration-150 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-200 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 px-4 py-2.5 md:px-6 md:py-3",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
