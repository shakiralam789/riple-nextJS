import Link from "next/link";
import React from "react";



export default function Menu({menuItems}) {
  return (
    menuItems &&
    menuItems.length > 0 && (
      <ul className="hidden md:flex items-center gap-x-6 gap-y-3 font-18">
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.children && item.children.length > 0 ? (
              <div className="capitalize text-white hover:text-primary duration-300">
                <span className="menu-name duration-300">{item.name}</span>
                <span className="menu-icon duration-300">
                  {/* <ChevronDownSvg /> */}
                </span>

                {/* <Submenu item={item.children} /> */}
              </div>
            ) : (
              <Link
                className="capitalize text-white hover:text-primary duration-300"
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


function Submenu({ item, isSubmenu }) {
    if (!item) return;
    return (
      <div
        className={`opacity-0 pointer-events-none duration-300 z-40 absolute  
      ${
        isSubmenu
          ? "sub-sub-menu translate-x-3 left-full top-0"
          : "sub-menu pt-4 translate-y-3 -left-3 top-full"
      }`}
      >
        {!isSubmenu && (
          <span className="z-20 absolute top-4 rounded-t-full left-0 w-full h-0.5 bg-def-red">
            <span className="absolute left-6 bottom-full w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-transparent border-b-def-red"></span>
          </span>
        )}
  
        <ul className="rounded-b-md shadow bg-white rounded-md">
          {item.map((child, i) => (
            <li className={`submenu-item`} key={i}>
              {child.children && child.children.length > 0 ? (
                <div
                  className={`header duration-300 relative flex gap-2 justify-between font-13 font-normal text-slate-700 bg-white hover:bg-slate-50 px-4 py-3 hover:text-def-red min-w-[150px]`}
                >
                  <span className="hover:text-def-red duration-300">
                    {child.name}
                  </span>
                  <span className="-mr-2 -rotate-90 hover:text-def-red duration-300">
                    {/* <ChevronDownSvg className="size-2.5" /> */}
                  </span>
  
                  <Submenu item={child.children} isSubmenu={true} />
                </div>
              ) : (
                <Link
                  className={`header duration-300 font-13 font-normal text-slate-700 bg-white hover:bg-slate-50 px-4 py-3 hover:text-def-red block min-w-[150px]`}
                  href={child.link}
                >
                  {child.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }