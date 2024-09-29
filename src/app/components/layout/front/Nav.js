"use client";
import React, { useEffect, useState } from "react";
import Logo from "./navCom/Logo";
import Link from "next/link";
import Menu from "./navCom/Menu";
import Sidebar from "./navCom/Sidebar";
import gsap from "gsap";
import MenuIcon from "../../icons/MenuIcon";
import AuthAction from "./navCom/AuthAction";

let menuItems = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "student view",
    link: "/student-view",
  },
];

export default function Nav() {
  let [openSideBar, setOpenSideBar] = useState(false);
  function closeSideBar() {
    document.body.style.overflow = "auto";
    gsap.to(".sidebar-overlay", {
      opacity: 0,
      duration: 0.3,
      ease: "linear",
    });
    gsap.to(".sidebar", {
      x: 280,
      duration: 0.4,
      ease: "power1",
      onComplete: () => {
        setOpenSideBar(false);
      },
    });
  }

  function openSideBarHandler() {
    document.body.style.overflow = "hidden";
    setOpenSideBar(true);
  }

  useEffect(() => {
    if (openSideBar) {
      gsap.to(".sidebar", {
        x: 0,
        duration: 0.4,
        ease: "power1",
      });
      gsap.to(".sidebar-overlay", {
        opacity: 0.5,
        duration: 0.3,
        ease: "linear",
      });
    }
  }, [openSideBar]);
  return (
    <header className="bg-dark2">
      <div className="container relative">
        <div className="flex justify-between items-center h-[90px] 2xl:h-[120px]">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex space-x-6 items-center">
            <Menu menuItems={menuItems} />
            <AuthAction />
            <button
              onClick={openSideBarHandler}
              id="menu-open-btn"
              className="md:hidden text-white rounded-md flex items-center justify-center"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {openSideBar && (
        <Sidebar menuItems={menuItems} closeSideBar={closeSideBar} />
      )}
    </header>
  );
}
