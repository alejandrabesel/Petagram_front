import { Children } from "react";
import { Link } from "react-router-dom";

export default function Tab({ children, title }) {
  return (
    <Link>
      <button className="flex w-full items-center justify-start gap-2 p-2 pl-6 text-xl text-primary_800 hover:bg-primary_300 hover:text-primary_50">
        {children}
        <span className="font-subtitle">{title}</span>
      </button>
    </Link>
  );
}
