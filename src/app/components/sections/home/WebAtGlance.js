import React from "react";

export default function WebAtGlance() {
  return (
    <section>
      <div className="container">
        <div className="custom-shadow-2 py-10 px-4">
          <h2 className="font-48 text-center text-dark2 mt-6 font-semibold">
            Triple Web at a glance
          </h2>
          <div className="project-swiper-container overflow-hidden mt-8 swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div
              className="swiper-wrapper cursor-grab text-center"
              id="swiper-wrapper-f22e6bd6ad9717101"
              aria-live="polite"
              style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px); transition-delay: 0ms;"
            >
              <div
                className="swiper-slide p-6 swiper-slide-active"
                style="width: 170px; margin-right: 8px;"
                role="group"
                ariaLabel="5 / 5"
                data-swiper-slide-index="4"
              >
                {/* <img className="w-[60px] 2xl:w-[78px] mx-auto" src="./image/job-5.svg" alt=""> */}
                <div className="font-48 text-center text-dark-green mt-6 font-semibold">
                  35+
                </div>
                <p className="font-18 text-dark-green">Countries world wide</p>
              </div>
              <div
                className="swiper-slide p-6 swiper-slide-next"
                style="width: 170px; margin-right: 8px;"
                role="group"
                ariaLabel="1 / 5"
                data-swiper-slide-index="0"
              >
                {/* <img className="w-[60px] 2xl:w-[78px] mx-auto" src="./image/job.svg" alt=""> */}
                <div className="font-48 text-center text-dark-green mt-6 font-semibold">
                  80+
                </div>
                <p className="font-18 text-dark-green">Projects Completed</p>
              </div>
              <div
                className="swiper-slide p-6"
                style="width: 170px; margin-right: 8px;"
                role="group"
                ariaLabel="2 / 5"
                data-swiper-slide-index="1"
              >
                {/* <img className="w-[60px] 2xl:w-[78px] mx-auto" src="./image/job-2.svg" alt=""> */}
                <div className="font-48 text-center text-dark-green mt-6 font-semibold">
                  30+
                </div>
                <p className="font-18 text-dark-green">Members</p>
              </div>
              <div
                className="swiper-slide p-6"
                style="width: 170px; margin-right: 8px;"
                role="group"
                ariaLabel="3 / 5"
                data-swiper-slide-index="2"
              >
                {/* <img className="w-[60px] 2xl:w-[78px] mx-auto" src="./image/job-3.svg" alt=""> */}
                <div className="font-48 text-center text-dark-green mt-6 font-semibold">
                  40+
                </div>
                <p className="font-18 text-dark-green">Happy clients</p>
              </div>
              <div
                className="swiper-slide p-6"
                style="width: 170px; margin-right: 8px;"
                role="group"
                ariaLabel="4 / 5"
                data-swiper-slide-index="3"
              >
                {/* <img className="w-[60px] 2xl:w-[78px] mx-auto" src="./image/job-4.svg" alt=""> */}
                <div className="font-48 text-center text-dark-green mt-6 font-semibold">
                  10k+
                </div>
                <p className="font-18 text-dark-green">Online course</p>
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
}
