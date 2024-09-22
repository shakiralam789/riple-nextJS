import React from "react";
import CardIcon1 from "../home/OurProgressC/CardIcon1";
import Image from "next/image";
import Rating from "./Rating";

export default function Card({ image, title, rating, course }) {
  return (
    <div className="group relative p-4 2xl:p-6 bg-gray-light2 hover:bg-dark-green">
      <div className="hidden group-hover:block absolute inset-2 border-white/50 border-2">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2.5 -translate-y-1/2 w-20 flex justify-center items-center bg-dark-green">
          <CardIcon1 />
        </div>
      </div>
      <Image className="w-full" src={image} alt="" width={500} height={500} />
      <h2 className="font-30 text-dark-green group-hover:text-white mt-4">
        {title}
      </h2>
      <div className="mt-4 flex items-center gap-2">
        <Rating rating={rating} />
        <div className="font-18 text-para group-hover:text-white">
          ({rating})
        </div>
      </div>
      <div className="mt-6 flex items-center">
        <span className="text-primary font-30">${course}/</span>
        <span className="text-para group-hover:text-white font-18">
          Courses
        </span>
      </div>
    </div>
  );
}
