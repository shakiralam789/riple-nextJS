"use client";
import React, { useEffect, useRef, useState } from "react";
import Shuffle from "shufflejs";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import dynamic from "next/dynamic";
import VideoPlayCom from "./VideoPlayCom";

export default function ShuffleGrid() {
  const shuffleContainer = useRef(null);
  const [shuffleInstance, setShuffleInstance] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isVideo, setVideo] = useState(false);
  const [url,setUrl] = useState("");

  function handleVideoPlay(url) {
    setVideo(true);
    setUrl(url)
  }

  // Sample items
  const items = [
    {
      id: 1,
      category: "web-development",
      poster: "/images/course-img-1.jpg",
      video: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    },
    {
      id: 11,
      category: "web-development",
      poster: "/images/course-img-2.jpg",
      video: "https://www.youtube.com/watch?v=QoaDkejcHSc",
    },
    {
      id: 2,
      category: "ui",
      poster: "/images/course-img-2.jpg",
    //   video: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    },
    {
      id: 3,
      category: "app-development",
      poster: "/images/course-img-3.jpg",
      video: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    },
    {
      id: 4,
      category: "wordPress-themes",
      poster: "/images/course-img-4.jpg",
      video: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    },
    {
      id: 5,
      category: "graphics-design",
      poster: "/images/course-img-5.jpg",
      video: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    },
    {
      id: 6,
      category: "web-development",
      poster: "/images/course-img-1.jpg",
      video: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    },
    {
      id: 7,
      category: "ui",
      poster: "/images/course-img-2.jpg",
      video: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    },
    {
      id: 8,
      category: "app-development",
      poster: "/images/course-img-3.jpg",
      video: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    },
    {
      id: 9,
      category: "wordPress-themes",
      poster: "/images/course-img-4.jpg",
      video: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    },
    {
      id: 10,
      category: "app-development",
      poster: "/images/course-img-4.jpg",
      video: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    },
  ];

  useEffect(() => {
    // Initialize Shuffle.js
    if (shuffleContainer.current) {
      const shuffle = new Shuffle(shuffleContainer.current, {
        itemSelector: ".shuffle-item", // Class for each shuffle item
        sizer: ".shuffle-sizer", // Class for the sizer
      });
      setShuffleInstance(shuffle);
    }
  }, []);

  useEffect(() => {
    // Filter items based on category
    if (shuffleInstance) {
      if (filter === "all") {
        shuffleInstance.filter(Shuffle.ALL_ITEMS);
      } else {
        shuffleInstance.filter(
          (element) => element.getAttribute("data-category") === filter
        );
      }
    }
  }, [filter, shuffleInstance]);

  return (
    <section className="pb-24 2xl:pb-28">
      <div className="container">
        <div className="mx-auto text-center">
          <SectionTitle title="OUR ONLINE COURSES">
            Find The Right Online <br /> Courses For You
          </SectionTitle>
        </div>
        <div className="flex justify-center mt-10 2xl:mt-12">
          <ul className="border border-slate-300 font-18 text-dark-green px-2 py-4 2xl:py-5 flex flex-wrap items-center justify-center gap-y-3">
            <li
              onClick={() => setFilter("all")}
              className={`${
                filter == "all" && "active"
              } filter-button [&.active]:text-primary hover:text-primary px-4 cursor-pointer`}
            >
              all
            </li>
            <li
              onClick={() => setFilter("web-development")}
              className={`${
                filter == "web-development" && "active"
              } filter-button [&.active]:text-primary hover:text-primary px-4 cursor-pointer`}
            >
              Web Development
            </li>
            <li
              onClick={() => setFilter("ui")}
              className={`${
                filter == "ui" && "active"
              } filter-button [&.active]:text-primary hover:text-primary px-4 cursor-pointer`}
            >
              UI UX Design
            </li>
            <li
              onClick={() => setFilter("app-development")}
              className={`${
                filter == "app-development" && "active"
              } filter-button [&.active]:text-primary hover:text-primary px-4 cursor-pointer`}
            >
              App Development
            </li>
            <li
              onClick={() => setFilter("wordPress-themes")}
              className={`${
                filter == "wordPress-themes" && "active"
              } filter-button [&.active]:text-primary hover:text-primary px-4 cursor-pointer`}
            >
              WordPress Themes
            </li>
            <li
              onClick={() => setFilter("graphics-design")}
              className={`graphics-design filter-button [&.active]:text-primary hover:text-primary px-4 cursor-pointer`}
            >
              Graphics Design
            </li>
          </ul>
        </div>

        {/* Shuffle Grid */}
        <div className="mt-10 -mx-2" ref={shuffleContainer}>
          {/* Shuffle Sizer Element */}
          <div className="shuffle-sizer w-full sm:w-1/2 lg:w-1/3 h-[280px] 2xl:h-[310px]"></div>

          {items.map((item) => (
            <div
              key={item.id}
              data-category={item.category}
              className="shuffle-item w-full sm:w-1/2 lg:w-1/3 px-2 mb-4"
            >
              <div
                onClick={() => handleVideoPlay(item.video)}
                className="bg-slate-100 group cursor-pointer relative h-[280px] 2xl:h-[310px]"
              >
                <div className="group-hover:-translate-y-[100%] duration-300 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 z-10  size-[50px] 2xl:size-[60px] rounded-full bg-white flex items-center justify-center border-2 border-primary text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                    ></path>
                  </svg>
                </div>
                <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] duration-300 absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-10  block">
                  <button className="whitespace-nowrap btn-secondary hover:bg-white flex items-center gap-2 mt-6">
                    <span>MORE VIDEOS</span>
                    <svg
                      className="size-5 2xl:size-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 duration-300"></div>
                <Image
                  className="object-cover object-center h-full w-full"
                  src={item.poster}
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {isVideo && <VideoPlayCom url={url} setVideo={setVideo}/>}
    </section>
  );
}
