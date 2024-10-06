"use client";
import ClockIcon from "@/app/components/icons/Clock";
import VideoIcon from "@/app/components/icons/Video";
import Image from "next/image";
import React, { forwardRef, useState } from "react";
import SelectDataTime from "./SelectDataTime";
import EnterDetails from "./EnterDetails";
import dayjs from "dayjs";

const DiscoveryCall = forwardRef(({ closeAnim }, ref) => {
  const [isDetails, setIsDetails] = useState(false);
  const [data, setData] = useState({
    time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    time: dayjs(),
    name: "",
    email: "",
    guest_email: "",
    desc: "",
  });
  return (
    <div
      ref={ref}
      style={{ opacity: 0 }}
      className="book-now-modal w-full fixed top-0 left-0 flex justify-end h-screen z-30"
    >
      <div
        onClick={closeAnim}
        className="absolute inset-0 bg-black/50 cursor-zoom-out"
      ></div>
      <div className="active max-w-[800px] 2xl:max-w-[1000px] opacity-0 pointer-events-none [&.active]:opacity-100 [&.active]:pointer-events-auto h-full bg-white z-30">
        <div className="min-h-screen grid grid-cols-12 gap-2 2xl:gap-4">
          <div className="col-span-5 overflow-y-auto h-screen">
            <div className="p-3 pr-0 flex flex-col min-h-screen">
              <div className="bg-dark-green p-3">
                <h2 className="font-30 text-white">
                  Triple Web Discovery Call
                </h2>
                <div className="flex items-center gap-3 mt-4">
                  <Image
                    className="size-12 2xl:size-16 rounded-full object-cover object-center"
                    src="/images/user.png"
                    width={40}
                    height={40}
                    alt=""
                  />
                  <div className="text-white font-16">
                    <div className="mb-2">ABDUR RAQUIB</div>
                    <p className="text-gray-light font-16">Project Manager</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-3 bg-gray-light2">
                <h2 className="font-22 text-dark2">One to One training</h2>
                <ul className="mt-5 space-y-4 text-dark-green">
                  <li className="flex gap-3 font-16">
                    <ClockIcon className="mt-0.5" />
                    <span>30 Minutes</span>
                  </li>
                  <li className="flex gap-3 font-16">
                    <VideoIcon className="mt-0.5" />
                    <span>
                      We will call you on the selected Date &amp; Time .
                    </span>
                  </li>
                </ul>
                <div className="mt-6 space-y-2 font-16 text-para">
                  <p className="text-justify">
                    A 30 minutes walk through of the software followed by Triple
                    web lab. Or if you prefer, training on specific features
                    e.g. filtering or portfolio management
                  </p>

                  <p className="text-justify">
                    If you have any&nbsp;queries,&nbsp;please email us at
                    raquib@riple.com.
                  </p>
                  <p className="text-primary">raquib@riple.com.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-7 h-screen overflow-y-auto">
            <div className="min-h-screen p-3 pr-5">
              {isDetails ? (
                <EnterDetails
                  data={data}
                  setData={setData}
                  isDetails={isDetails}
                  setIsDetails={setIsDetails}
                />
              ) : (
                <SelectDataTime
                  data={data}
                  setData={setData}
                  isDetails={isDetails}
                  setIsDetails={setIsDetails}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
DiscoveryCall.displayName = "DiscoveryCall";
export default DiscoveryCall;
