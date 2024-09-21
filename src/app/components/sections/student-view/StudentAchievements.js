import React from 'react'

export default function StudentAchievements() {
  return (
    <section className="bg-dark2 py-24 2xl:py-28 overflow-hidden">
        <div className="container relative">
            {/* <img className="hidden 2xl:block pointer-events-none w-[150px] 2xl:w-[200px] absolute top-[2%] 2xl:top-[10%] left-0 2xl:left-auto 2xl:right-full z-0" src="./image/circles/item.png" alt="">
            <img className="hidden sm:block pointer-events-none w-[60px] 2xl:w-auto move-x absolute bottom-[-56px] 2xl:bottom-0 mt-4 left-4 2xl:left-[-10%]" src="./image/circles/item2.png" alt=""> */}
            <div className="flex flex-wrap items-center -mx-4">
                <div className="order-2 md:order-1 w-full md:w-7/12 lg:pr-20 px-4">
                    <h2 className="font-30 text-primary uppercase">OUR STUDENT ACHIEVEMENTS</h2>
                    <p className="font-48 text-white mt-6 font-semibold">We Provide Any Solution Using
                        Tech Services</p>
                    <p className="font-18 text-gray-light mt-6 leading-loose">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed
                        do eiusmod commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="mt-16 2xl:mt-20 space-y-12">

                        <div>
                            <label className="text-white block mb-2 font-18" htmlFor="">Business Strategy:</label>
                            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
                                <div className="relative bg-green-light h-2.5" style={{width: "60%"}}>
                                    <div className="duration-300 pointer-events-none opacity-100 group-hover:pointer-events-auto absolute bottom-full z-[99] w-fit whitespace-nowrap font-18 font-semibold 2xl:px-4 px-2 py-1 2xl:py-1.5 right-0 translate-x-1/2 -translate-y-3 bg-green-light text-white rounded-md">
                                        60%
                                        <span className="absolute left-1/2 rotate-45 translate-y-1/2 z-0 -translate-x-1/2 size-2 bottom-0 bg-green-light"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="text-white block mb-2 font-18" htmlFor="">Technology Consulting:</label>
                            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
                                <div className="relative bg-primary h-2.5" style={{width: "78%"}}>
                                    <div className="duration-300 pointer-events-none opacity-100 group-hover:pointer-events-auto absolute bottom-full z-[99] w-fit whitespace-nowrap font-18 font-semibold 2xl:px-4 px-2 py-1 2xl:py-1.5 right-0 translate-x-1/2 -translate-y-3 bg-primary text-white rounded-md">
                                        78%
                                        <span className="absolute left-1/2 rotate-45 translate-y-1/2 z-0 -translate-x-1/2 size-2 bottom-0 bg-primary"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="text-white block mb-2 font-18" htmlFor="">Product Development:</label>
                            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
                                <div className="relative bg-primary h-2.5" style={{width: "96%"}}>
                                    <div className="duration-300 pointer-events-none opacity-100 group-hover:pointer-events-auto absolute bottom-full z-[99] w-fit whitespace-nowrap font-18 font-semibold 2xl:px-4 px-2 py-1 2xl:py-1.5 right-0 translate-x-1/2 -translate-y-3 bg-dark-green text-white rounded-md">
                                        96%
                                        <span className="absolute left-1/2 rotate-45 translate-y-1/2 z-0 -translate-x-1/2 size-2 bottom-0 bg-dark-green"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative order-1 md:order-2 md:pl-16 w-10/12 sm:w-8/12 md:w-5/12 px-4 mb-8 md:mb-0">
                    {/* <img className="w-full" src="./image/skill-ability.png" alt=""> */}

                    {/* <img className="hidden sm:block pointer-events-none absolute top-1/4 -translate-y-1.2 right-[-60px]" src="./image/circles/Ellipse3.png" alt="">
                    <img className="hidden sm:block pointer-events-none absolute top-0 right-0" src="./image/circles/Vector.png" alt="">
                    <img className="hidden sm:block pointer-events-none absolute top-0 left-2" src="./image/circles/item6.png" alt="">
                    <img className="hidden sm:block pointer-events-none absolute top-1/2 -translate-y-1/2 left-full ml-4" src="./image/circles/item4.png" alt=""> */}
                </div>
            </div>
        </div>
    </section>
  )
}
