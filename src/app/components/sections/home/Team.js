"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react"; // For accessing Swiper instance
import "swiper/css";
import "swiper/css/navigation";
import React from "react";
import SectionTitle from "../SectionTitle";
import SecondaryButton from "../../Button/SecondaryButton";
import ArrowRight from "../../icons/ArrowRight";
import Image from "next/image";
import SocialIcons from "./Team/SocialIcons";

const TeamData = [
  {
    name: "Jaouad Hasan",
    designation: "Digital Marketing Specialist",
    image: "/images/member1.jpg",
  },
  {
    name: "Abdur Raquib",
    designation: "Senior UI/UX Designer",
    image: "/images/member2.jpg",
  },
  {
    name: "Munia",
    designation: "HR Management",
    image: "/images/member3.jpg",
  },
  {
    name: "Jhon Doe",
    designation: "Lecturer",
    image: "/images/member2.jpg",
  },
];

export default function Team() {
  const swiperRef = useRef(null);

  return (
    <section className="pt-24 2xl:pt-28">
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-5 2xl:col-span-4">
            <SectionTitle title="TEAM MEMBERS">
              Our Expert Lecturer
            </SectionTitle>
            <p className="font-18 text-gray-light mt-6 leading-loose">
              Lorem ipsum dolor sit amet, conse consequat. Duis aute irure dolor
              in cupidatat non proident, sunt in cul est laborum.
            </p>
            <div className="">
              <SecondaryButton className="flex items-center gap-2 mt-10">
                <span>Join our team</span>
                <ArrowRight />
              </SecondaryButton>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 pb-20 relative col-span-12 lg:col-span-7 2xl:col-span-8">
            {/* Swiper Component */}
            <Swiper
              loop={true}
              spaceBetween={16}
              breakpoints={{
                // Define breakpoints for responsive behavior
                480: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper; // Set Swiper instance to ref
              }}
            >
              {TeamData.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group overflow-hidden">
                    <Image
                      className="w-full"
                      src={data.image}
                      width={300}
                      height={300}
                      alt=""
                    />
                    <SocialIcons />
                  </div>
                  <p className="font-18 text-gray-light mt-6">
                    {data.designation}
                  </p>
                  <div className="font-30 text-dark-green mt-2">
                    {data.name}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Swiper Navigation */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-1 mt-8 flex gap-4 z-10">
              <button
                onClick={() => swiperRef.current.slidePrev()}
                className="member-button-prev border border-dark-green/50 hover:text-white hover:bg-dark-green size-[40px] 2xl:size-[50px] flex justify-center items-center"
                tabIndex="0"
                aria-label="Previous slide"
              >
                <ArrowRight className="rotate-180" />{" "}
              </button>
              <button
                onClick={() => swiperRef.current.slideNext()}
                className="member-button-next border hover:text-white border-dark-green/50 hover:bg-dark-green size-[40px] 2xl:size-[50px] flex justify-center items-center"
                tabIndex="0"
                aria-label="Next slide"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
