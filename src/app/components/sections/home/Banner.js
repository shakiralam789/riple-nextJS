"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import SecondaryButton from "../../Button/SecondaryButton";
import ArrowRight from "../../icons/ArrowRight";
import DiscoveryCall from "./BookNow/DiscoveryCall";

export default function Banner() {
  const [isBookNowOpen, setIsBookNowOpen] = useState(false);

  const bannerRef = useRef(null);
  const bookNowRef = useRef(null);
  const fixedBookNowBtnRef = useRef(null);

  function openBookNow() {
    setIsBookNowOpen(true);
  }

  useEffect(() => {
    const banner = bannerRef.current;
    const tl = gsap.timeline();

    tl.fromTo(
      banner.querySelector("h1"),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
    )
      .fromTo(
        banner.querySelector("p"),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" },
        "-=0.5"
      )
      .fromTo(
        banner.querySelector("button"),
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      );
  }, []);

  function closeAnim() {
    document.body.style.overflow = "auto";
    if (bookNowRef.current) {
      gsap.to(bookNowRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
        onComplete: () => {
          setIsBookNowOpen(false);
        },
      });
    }
  }

  function openAnim() {
    document.body.style.overflow = "hidden";
    if (bookNowRef.current) {
      gsap.fromTo(
        bookNowRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power4.out" }
      );
    }
  }

  useEffect(() => {
    if (isBookNowOpen) {
      openAnim();
    } else {
      closeAnim();
    }
  }, [isBookNowOpen]);

  useEffect(() => {
    function showBookNowBtn() {
      let banner = bannerRef.current;
      let scrollButton = fixedBookNowBtnRef.current;

      let bannerBottom = banner.getBoundingClientRect().bottom;

      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      if (bannerBottom < 0) {
        scrollButton.classList.add("active");

        if (scrollPosition >= pageHeight - 40) {
          scrollButton.classList.remove("active");
        } else {
          scrollButton.classList.add("active");
        }
      } else {
        scrollButton.classList.remove("active");
      }
    }

    window.addEventListener("scroll", showBookNowBtn);

    return () => {
      window.removeEventListener("scroll", showBookNowBtn);
    };
  }, []);

  return (
    <section id="banner" className="bg-dark2 overflow-hidden" ref={bannerRef}>
      <div className="container relative text-white flex items-center">
        <Image
          className="hidden 2xl:block pointer-events-none w-[150px] 2xl:w-[200px] absolute top-[2%] 2xl:top-[10%] left-0 2xl:left-auto 2xl:right-full z-0"
          src="/images/circles/item.png"
          width={200}
          height={150}
          alt=""
        />
        <Image
          className="hidden sm:block pointer-events-none w-[60px] 2xl:w-auto move-x absolute bottom-[5%] 2xl:bottom-[20%] left-0 2xl:left-[-10%]"
          src="/images/circles/item2.png"
          width={60}
          height={60}
          alt=""
        />
        <Image
          className="hidden sm:block pointer-events-none w-[40px] 2xl:w-auto move-y absolute bottom-[20%] right-[5%] 2xl:right-[-10%]"
          src="/images/circles/item-up.png"
          width={40}
          height={40}
          alt=""
        />

        <div className="grid grid-cols-12 gap-4 relative z-10">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 pt-20 lg:pt-32 2xl:pt-36 pb-24 lg:pb-36 2xl:pb-40">
            <h4 className="font-30">Work with Triple web LAB</h4>
            <h1 className="font-66 font-bold mt-3">
              Create the <span className="text-primary">impactful Digital</span>{" "}
              Services
            </h1>
            <p className="font-18 text-gray-light leading-loose mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <SecondaryButton
              onClick={openBookNow}
              className="btn-secondary flex items-center gap-2 mt-8"
            >
              <span>book a call</span>
              <ArrowRight />
            </SecondaryButton>
          </div>
          <div className="hidden md:flex col-span-5 lg:col-span-6 items-end justify-end">
            <div className="relative">
              <div className="w-[65%] aspect-square absolute top-[-25%] left-[60%] lg:left-1/2 -translate-x-1/2 ml-[-2%] 2xl:ml-[4%]">
                <Image
                  className="w-[13px] hidden sm:block pointer-events-none absolute top-1/2 -translate-y-1.2 left-[-40px]"
                  src="/images/circles/Ellipse3.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <Image
                  className="w-[13px] hidden sm:block pointer-events-none absolute top-1/4 -translate-y-1.2 right-[-60px]"
                  src="/images/circles/Ellipse3.png"
                  width={60}
                  height={60}
                  alt=""
                />
                <Image
                  className="w-[28px] hidden sm:block pointer-events-none absolute top-0 right-0"
                  src="/images/circles/Vector.png"
                  width={60}
                  height={60}
                  alt=""
                />
                <Image
                  className="w-[28px] hidden sm:block pointer-events-none absolute top-0 left-2"
                  src="/images/circles/item6.png"
                  width={60}
                  height={60}
                  alt=""
                />
                <Image
                  className="w-[50px] hidden sm:block pointer-events-none absolute top-1/2 -translate-y-1/2 left-full ml-4"
                  src="/images/circles/item4.png"
                  width={60}
                  height={60}
                  alt=""
                />
                <Image
                  className="hidden sm:block pointer-events-none rotate-right w-full h-full"
                  src="/images/circles/miving-cricle.png"
                  width={400}
                  height={400}
                  alt=""
                />
                <Image
                  className="hidden sm:block pointer-events-none inner-right-with-translate w-[50%] aspect-square absolute top-1/2 left-1/2 z-10"
                  src="/images/circles/moving-elipse-md.png"
                  width={200}
                  height={200}
                  alt=""
                />

                <div className="rotate-left w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <svg
                    className="w-full aspect-square text-white"
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path
                        id="circle"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      ></path>
                    </defs>
                    <text fontSize="17">
                      <textPath href="#circle" className="text-[15px]">
                        Your digital marketing services here
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
              <Image
                className="w-[95%] lg:w-[80%] 2xl:w-[90%] relative z-20"
                src={"/images/banner-img.png"}
                width={400}
                height={400}
                alt="hero image"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={fixedBookNowBtnRef}
        className="duration-300 pointer-events-none [&.active]:pointer-events-auto opacity-0 [&.active]:opacity-100 fixed bottom-8 right-8 z-20 w-fit"
      >
        <SecondaryButton
          id="scrollButton"
          onClick={openBookNow}
          className="book-call flex hover:bg-dark2 items-center gap-2 mt-8"
        >
          <span>book a call</span>
          <ArrowRight />
        </SecondaryButton>
      </div>

      {isBookNowOpen && (
        <DiscoveryCall
          ref={bookNowRef}
          isBookNowOpen={isBookNowOpen}
          closeAnim={closeAnim}
        />
      )}
    </section>
  );
}
