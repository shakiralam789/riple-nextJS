import Input from "@/app/components/form/input";
import Label from "@/app/components/form/Label";
import TextArea from "@/app/components/form/TextArea";
import CalenderIcon from "@/app/components/icons/Calender";
import ClockIcon from "@/app/components/icons/Clock";
import GlobeIcon from "@/app/components/icons/Globe";
import VideoIcon from "@/app/components/icons/Video";
import React, { forwardRef } from "react";

const DiscoveryCall = forwardRef(({ closeAnim }, ref) => {
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
      <div className="active w-7/12 2xl:w-6/12 opacity-0 pointer-events-none [&.active]:opacity-100 [&.active]:pointer-events-auto overflow-y-auto h-full bg-white z-30">
        <div className="p-3 min-h-screen grid grid-cols-12 gap-2 2xl:gap-4">
          <div className="col-span-5 flex flex-col">
            <div className="bg-dark-green p-3">
              <h2 className="font-30 text-white">Triple Web Discovery Call</h2>
              <div className="flex items-center gap-3 mt-4">
                {/* <img className="size-16 2xl:size-20 rounded-full object-cover object-center" src="../src/image/user.png" alt=""> */}
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
                <li className="flex gap-3 font-16">
                  <CalenderIcon className="mt-0.5" />
                  <span>12:00pm - 12:30pm, Tuesday, January-15, 2024</span>
                </li>
                <li className="flex gap-3 font-16">
                  <GlobeIcon className="mt-0.5" />
                  <span>Asia/Dhaka (1:30pm)</span>
                </li>
              </ul>
              <div className="mt-6 space-y-2 font-16 text-para">
                <p>Hello,</p>
                <p>Welcome to Triple web lab.</p>
                <p className="text-justify">
                  Transform your digital journey and turn your ideas into
                  reality with Triple web lab . As software development experts,
                  we can bring your vision to life, whether its a simple web
                  page or a complex custom software solution. Let us know about
                  your project, and lets build something great together.
                </p>

                <p className="text-justify">
                  If you have any&nbsp;queries,&nbsp;please email us at
                  raquib@riple.com.
                </p>
                <p className="text-primary">raquib@riple.com.</p>
              </div>
            </div>
          </div>
          <div className="col-span-7 p-3">
            <h2 className="font-30 text-dark2 capitalize mb-4">
              Enter Details
            </h2>
            <div className="grid grid-cols-1 gap-y-4 2xl:gap-y-6">
              <div>
                <Label className="required">Name</Label>
                <Input />
              </div>
              <div>
                <Label className="required">Email</Label>
                <Input type="email" />
              </div>
              <div>
                <Label>Guest Email (s)</Label>
                <Input type="email" />
                <p className="font-18 text-para mt-2">
                  Notify up to 10 Additional Guests of the Scheduled event.
                </p>
              </div>
              <div>
                <Label>
                  Please share anything that will help prepare for our meeting.
                </Label>

                <TextArea />
                <p className="font-16 text-para mt-2">
                  By proceeding, you confirm that you have read and agree to
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
DiscoveryCall.displayName = "DiscoveryCall";
export default DiscoveryCall;
