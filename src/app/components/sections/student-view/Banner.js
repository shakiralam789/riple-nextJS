import Image from "next/image";
import React from "react";
import PrimaryButton from "../../Button/PrimaryButton";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import SecondaryButton from "../../Button/SecondaryButton";

export default function Banner() {
  return (
    <section id="banner" className="bg-dark2 overflow-hidden">
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
            <h4 className="font-30">Improve your Skill With Different Way</h4>
            <h1 className="font-66 font-bold mt-3">
              Learn <span className="text-primary">Technology From All</span>{" "}
              Experts
            </h1>
            <p className="font-18 text-gray-light leading-loose mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">

              <SecondaryButton className="flex items-center gap-2">
                <span>Get started</span>
                <ArrowRight />
              </SecondaryButton>
              <PrimaryButton className="flex items-center gap-2">
                <span>Learn more</span>
                <ArrowRight />
              </PrimaryButton>

            </div>
            <div className="flex flex-wrap gap-10 mt-8 text-white capitalize">
              <div>
                <div className="font-30 font-semibold">20+</div>
                <div className="font-18 mt-2">Professionals Mentor</div>
              </div>
              <div>
                <div className="font-30 font-semibold">15+</div>
                <div className="font-18 mt-2">Years Experience</div>
              </div>
              <div>
                <div className="font-30 font-semibold">4500+</div>
                <div className="font-18 mt-2">Student</div>
              </div>
            </div>
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
    </section>
  );
}
