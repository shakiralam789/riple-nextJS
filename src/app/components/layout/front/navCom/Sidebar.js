import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import SidebarSocial from "./SidebarSocial";
import ArrowLeft from "@/app/components/icons/ArrowLeft";
import UserIcon from "@/app/components/icons/UserIcon";
export default function Sidebar({ menuItems, closeSideBar, className = "" }) {
  return (
    <>
      <div
        className="sidebar-overlay cursor-zoom-out opacity-0 lg:hidden fixed top-0 left-0 w-full h-screen bg-black z-40"
        onClick={closeSideBar}
      ></div>
      <div
        className={`${className} sidebar capitalize bg-dark-green shadow-md lg:hidden fixed top-0 right-0 translate-x-[280px] h-screen w-[280px] z-50`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-b-para">
            <button
              onClick={closeSideBar}
              className="hover:bg-dark2/40 text-white block size-6 rounded-md p-0.5 ml-auto"
            >
              <ArrowLeft />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <ul className="py-8 px-4 border-b border-b-para text-right space-y-5 font-18">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="capitalize text-white block hover:text-primary duration-300"
                      href={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

             <SidebarSocial />
            </div>
            <div className="px-4 flex justify-center py-4">
              <button className="w-full mt-auto btn-primary border-white text-white border flex justify-center items-center gap-2">
                <span>login</span>
               <UserIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Submenu({ item, isSub }) {
  const [open, setOpen] = useState(false);
  const submenuRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.to(submenuRef.current, {
        height: "auto",
        duration: 0.3,
        ease: "linear",
      });
    } else {
      gsap.to(submenuRef.current, {
        height: 0,
        duration: 0.3,
        ease: "linear",
      });
    }
  }, [open]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        onClick={toggleOpen}
        className={`${open && "active"} cursor-pointer ${
          isSub
            ? "font-13 text-slate-700 px-3 py-3 hover:pl-4"
            : "font-14 px-4 py-3.5 hover:pl-6"
        } [&.active]:text-def-red [&.active]:bg-slate-100 hover:bg-slate-100 capitalize hover:text-def-red duration-300 flex justify-between items-center gap-2`}
      >
        <span className="duration-300">{item.name}</span>
        <span className={`duration-300 transform ${open ? "rotate-180" : ""}`}>
          {/* <ChevronDownSvg /> */}
        </span>
      </div>
      <div
        ref={submenuRef}
        className="overflow-hidden pl-3"
        style={{ height: 0 }}
      >
        <ul className="py-2">
          {item.children.map((child, i) => (
            <li key={i}>
              {child.children && child.children.length > 0 ? (
                <Submenu item={child} isSub={true} />
              ) : (
                <Link
                  className={`duration-300 font-13 font-normal text-slate-700 bg-white hover:bg-slate-100 px-3 py-3 hover:pl-5 hover:text-def-red block`}
                  href={child.link}
                >
                  {child.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
