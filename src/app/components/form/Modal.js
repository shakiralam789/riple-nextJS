"use client";

import CancelIcon from "../icons/CancelIcon";
import cn from "../lib/cn";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Header2 from "../Header2";

// ForwardRef Component for Form or Div
const IsForm = React.forwardRef(function IsForm(
  { children, className, isForm, ...rest },
  ref
) {
  const Component = isForm ? "form" : "div";
  return (
    <Component ref={ref} {...rest} className={className}>
      {children}
    </Component>
  );
});

// Modal Component
export default function Modal({
  className = "",
  children,
  header,
  footer,
  footerClassName = "",
  headerClassName = "",
  title = "Modal",
  resetClassName = "",
  form = false,
  showPanel = false,
  setShowPanel,
  type = "modal",
  ...rest
}) {
  const panelTag = useRef(null);
  const panelOverlay = useRef(null);

  // Close Modal Animation
  function closeModal() {
    document.querySelector("body").style.overflow = null;

    gsap.to(panelOverlay.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power1",
      onComplete: () => setShowPanel(false),
    });

    if (type === "drawer") {
      gsap.to(panelTag.current, {
        x: panelTag.current.clientWidth,
        duration: 0.3,
        ease: "power1",
        onComplete: () => setShowPanel(false),
      });
    } else {
      gsap.to(panelTag.current, {
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: "power1",
        onComplete: () => setShowPanel(false),
      });
    }
  }

  // Open/Close Modal and Handle Form Reset Button
  useEffect(() => {
    if (showPanel) {
      gsap.to(panelOverlay.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power1",
      });

      if (type === "drawer") {
        gsap.to(panelTag.current, {
          x: 0,
          duration: 0.3,
          ease: "power1",
        });
      } else {
        gsap.to(panelTag.current, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power1",
        });
      }
      document.querySelector("body").style.overflow = "hidden";
    }

    if (form) {
      const resetBtn = document.querySelector(".modal-reset-btn");
      const handleResetClick = () => panelTag.current?.reset();

      resetBtn?.addEventListener("click", handleResetClick);

      return () => resetBtn?.removeEventListener("click", handleResetClick);
    }
  }, [form, showPanel, type]);

  return (
    <div
      className={`w-full ${
        type === "drawer" ? "" : "px-6"
      } fixed top-0 left-0 z-50 h-screen`}
    >
      <div
        style={{ opacity: 0 }}
        onClick={closeModal}
        ref={panelOverlay}
        className="modal-overlay cursor-zoom-out absolute inset-0 bg-black bg-opacity-50"
      />
      <div
        className={`h-full ${
          type === "drawer" ? "" : "py-10"
        } flex items-center ${
          type === "drawer" ? "justify-end" : "justify-center"
        }`}
      >
        <IsForm
          style={
            type === "drawer"
              ? { transform: "translateX(100%)" }
              : { transform: "translateY(50px)", opacity: 0 }
          }
          ref={panelTag}
          {...rest}
          isForm={form}
          className={cn(
            `bg-white ${
              type === "drawer"
                ? "w-[320px] 2xl:w-[350px] h-full flex flex-col"
                : "w-full md:w-[70%] xl:w-5/12 mx-auto"
            } relative`,
            className
          )}
        >
          <div
            className={cn(
              "relative p-6 2xl:p-8 pr-10 bg-slate-100 rounded-t-md",
              headerClassName
            )}
          >
            {header || <Header2>{title}</Header2>}

            <button
              onClick={closeModal}
              type="button"
              className={cn(
                "absolute top-1/2 -translate-y-1/2 right-4 text-slate-700 duration-300 flex items-center justify-center",
                resetClassName
              )}
            >
              <CancelIcon className="w-5 h-5" />
            </button>
          </div>

          <div
            className={`${
              type === "drawer"
                ? "flex-1 flex flex-col justify-between"
                : "max-h-[calc(100vh-200px)]"
            } overflow-y-scroll customScroll`}
          >
            <div className="p-6 2xl:p-8 pt-0">{children}</div>
            {footer && (
              <div
                className={cn(
                  `${
                    type === "drawer" ? "sticky bottom-0" : ""
                  } bg-white p-4 border-t border-slate-200`,
                  footerClassName
                )}
              >
                {footer}
              </div>
            )}
          </div>
        </IsForm>
      </div>
    </div>
  );
}
