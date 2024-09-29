import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Menu({ menuItems }) {
  const pathname = usePathname();
  return (
    menuItems &&
    menuItems.length > 0 && (
      <ul className="hidden md:flex items-center gap-x-6 gap-y-3 font-18">
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.children && item.children.length > 0 ? (
              <div
                className={`[&.active]:text-primary capitalize text-white hover:text-primary duration-300 ${
                  pathname == item.link ? "active" : ""
                }`}
              >
                <span className="menu-name duration-300">{item.name}</span>
                <span className="menu-icon duration-300">
                  {/* <ChevronDownSvg /> */}
                </span>
              </div>
            ) : (
              <Link
                className={`[&.active]:text-primary capitalize text-white hover:text-primary duration-300 ${
                  pathname == item.link ? "active" : ""
                }`} // Apply active class here too
                href={item.link}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    )
  );
}
