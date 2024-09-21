"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react"; // For accessing Swiper instance
import "swiper/css";
import "swiper/css/navigation";
import ArrowRight from "../../icons/ArrowRight";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

const ClientReviewData = [
  {
    name: "Jaouad Hasan",
    designation: "Digital Marketing Specialist",
    image: "/images/member1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur modi molestiae neque eos qui quas sunt atque dolor tempore dolorem eligendi et molestias, minus ad cupiditate non possimus voluptatibus.",
  },
  {
    name: "Abdur Raquib",
    designation: "Senior UI/UX Designer",
    image: "/images/member2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur modi molestiae neque eos qui quas sunt atque dolor tempore dolorem eligendi et molestias, minus ad cupiditate non possimus voluptatibus.",
  },
  {
    name: "Munia",
    designation: "HR Management",
    image: "/images/member3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur modi molestiae neque eos qui quas sunt atque dolor tempore dolorem eligendi et molestias, minus ad cupiditate non possimus voluptatibus.",
  },
  {
    name: "Jhon Doe",
    designation: "Lecturer",
    image: "/images/member2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur modi molestiae neque eos qui quas sunt atque dolor tempore dolorem eligendi et molestias, minus ad cupiditate non possimus voluptatibus.",
  },
];

export default function ClientReview() {
  const swiperRef = useRef(null);

  return (
    <section className="py-24 2xl:py-28">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-10/12 sm:w-8/12 md:w-4/12 px-4 mb-8 md:mb-0">
            <Image
              className="w-full"
              src="/images/about-us-image.png"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="w-full md:w-8/12 lg:pl-20 px-4">
            <SectionTitle title="Our Clients Review">
              Voices of Success: Hear from Our Satisfied Clients
            </SectionTitle>
            <div className="relative">
              <Swiper
                loop={true}
                spaceBetween={16}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {ClientReviewData.map((data, index) => (
                  <SwiperSlide key={index}>
                    <>
                      <p class="font-18 text-para mt-6 leading-loose">
                        {data.desc}
                      </p>
                      <div class="flex gap-3 mt-8 w-7/12">
                        <div class="size-[50px] 2xl:size-[65px] overflow-hidden bg-gray-light rounded-full">
                          <Image
                            src={data.image}
                            width={100}
                            height={100}
                            alt={data.name}
                          />
                        </div>
                        <div>
                          <div class="text-dark2 font-22 font-semibold">
                            {data.name}
                          </div>
                          <p class="font-18 text-para mt-1">
                            {data.designation}
                          </p>
                        </div>
                      </div>
                    </>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Swiper Navigation */}

              <div className="mt-8 sm:mt-0 justify-center sm:absolute right-0 bottom-0 flex gap-4 z-10 bg-white">
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
      </div>
    </section>
  );
}
