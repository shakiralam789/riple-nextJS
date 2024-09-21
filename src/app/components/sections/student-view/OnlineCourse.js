import React from 'react'

export default function OnlineCourse() {
  return (
    <section className="pb-24 2xl:pb-28">
        <div className="container">
            <div className="mx-auto text-center">
                <h2 className="font-30 text-primary uppercase">OUR ONLINE COURSES</h2>
                <p className="font-48 text-dark2 mt-6 font-semibold">Find The Right Online <br /> Courses For You</p>
            </div>

            <div className="flex justify-center mt-10 2xl:mt-12">
                <ul className="filter-controls filter-btn-parent border border-dark-green font-18 text-dark-green px-2 py-4 2xl:py-5 flex flex-wrap items-center justify-center gap-y-3">
                    <li data-filter="all" className="filter-button active [&amp;.active]:text-primary hover:text-primary px-4 cursor-pointer">
                        all
                    </li>
                    <li data-filter="1" className="filter-button [&amp;.active]:text-primary hover:text-primary px-4 cursor-pointer">
                        Web Development
                    </li>
                    <li data-filter="2" className="filter-button [&amp;.active]:text-primary hover:text-primary px-4 cursor-pointer">
                        UI UX Design
                    </li>
                    <li data-filter="3" className="filter-button [&amp;.active]:text-primary hover:text-primary px-4 cursor-pointer">
                        App Development
                    </li>
                    <li data-filter="4" className="filter-button [&amp;.active]:text-primary hover:text-primary px-4 cursor-pointer">
                        WordPress Themes
                    </li>
                    <li data-filter="5" className="filter-button [&amp;.active]:text-primary hover:text-primary px-4 cursor-pointer">
                        Graphics Design
                    </li>
                </ul>
            </div>

            <div className="-mx-4">
                <div className="filter-container duration-300 flex flex-wrap mt-8">
                    <div data-src="./video/course.mp4" data-category="1" data-sort="value" className="course-video filtr-item w-full sm:w-1/2 lg:w-1/3 group cursor-pointer relative h-[280px] 2xl:h-[310px]" style="opacity: 1; transform: scale(1) translate3d(0px, 0px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; width: 360px; transition: 0.5s ease-out, width 1ms;">
                        <div className="group-hover:-translate-y-[100%] duration-300 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 z-10  size-[50px] 2xl:size-[60px] rounded-full bg-white flex items-center justify-center border-2 border-primary text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
                            </svg>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] duration-300 absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-10  block">
                            <button className="whitespace-nowrap btn-secondary hover:bg-white flex items-center gap-2 mt-6">
                                <span>MORE VIDEOS</span>
                                <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 duration-300"></div>
                        {/* <img className="object-cover object-center h-full w-full" src="./image/course-img-1.jpg" alt=""> */}
                    </div>
                    <div data-src="./video/course.mp4" data-category="2" data-sort="value" className="course-video filtr-item w-full sm:w-1/2 lg:w-1/3 group cursor-pointer relative h-[280px] 2xl:h-[310px]" style="opacity: 1; transform: scale(1) translate3d(376px, 0px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; width: 360px; transition: 0.5s ease-out, width 1ms;">
                        <div className="group-hover:-translate-y-[100%] duration-300 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 z-10  size-[50px] 2xl:size-[60px] rounded-full bg-white flex items-center justify-center border-2 border-primary text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
                            </svg>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] duration-300 absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-10  block">
                            <button className="whitespace-nowrap btn-secondary hover:bg-white flex items-center gap-2 mt-6">
                                <span>MORE VIDEOS</span>
                                <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 duration-300"></div>
                        {/* <img className="object-cover object-center h-full w-full" src="./image/course-img-2.jpg" alt=""> */}
                    </div>
                    <div data-src="./video/course.mp4" data-category="1" data-sort="value" className="course-video filtr-item w-full sm:w-1/2 lg:w-1/3 group cursor-pointer relative h-[280px] 2xl:h-[310px]" style="opacity: 1; transform: scale(1) translate3d(0px, 296px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; width: 360px; transition: 0.5s ease-out, width 1ms;">
                        <div className="group-hover:-translate-y-[100%] duration-300 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 z-10  size-[50px] 2xl:size-[60px] rounded-full bg-white flex items-center justify-center border-2 border-primary text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
                            </svg>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] duration-300 absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-10  block">
                            <button className="whitespace-nowrap btn-secondary hover:bg-white flex items-center gap-2 mt-6">
                                <span>MORE VIDEOS</span>
                                <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 duration-300"></div>
                        {/* <img className="object-cover object-center h-full w-full" src="./image/course-img-3.jpg" alt=""> */}
                    </div>
                    <div data-src="./video/course.mp4" data-category="3" data-sort="value" className="course-video filtr-item w-full sm:w-1/2 lg:w-1/3 group cursor-pointer relative h-[280px] 2xl:h-[310px]" style="opacity: 1; transform: scale(1) translate3d(376px, 296px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; width: 360px; transition: 0.5s ease-out, width 1ms;">
                        <div className="group-hover:-translate-y-[100%] duration-300 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 z-10  size-[50px] 2xl:size-[60px] rounded-full bg-white flex items-center justify-center border-2 border-primary text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
                            </svg>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] duration-300 absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-10  block">
                            <button className="whitespace-nowrap btn-secondary hover:bg-white flex items-center gap-2 mt-6">
                                <span>MORE VIDEOS</span>
                                <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 duration-300"></div>
                        {/* <img className="object-cover object-center h-full w-full" src="./image/course-img-4.jpg" alt=""> */}
                    </div>
                    <div data-src="./video/course.mp4" data-category="1" data-sort="value" className="course-video filtr-item w-full sm:w-1/2 lg:w-1/3 group cursor-pointer relative h-[280px] 2xl:h-[310px]" style="opacity: 1; transform: scale(1) translate3d(0px, 592px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; width: 360px; transition: 0.5s ease-out, width 1ms;">
                        <div className="group-hover:-translate-y-[100%] duration-300 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 z-10  size-[50px] 2xl:size-[60px] rounded-full bg-white flex items-center justify-center border-2 border-primary text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
                            </svg>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] duration-300 absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-10  block">
                            <button className="whitespace-nowrap btn-secondary hover:bg-white flex items-center gap-2 mt-6">
                                <span>MORE VIDEOS</span>
                                <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 duration-300"></div>
                        {/* <img className="object-cover object-center h-full w-full" src="./image/course-img-5.jpg" alt=""> */}
                    </div>
                    <div data-src="./video/course.mp4" data-category="3" data-sort="value" className="course-video filtr-item w-full sm:w-1/2 lg:w-1/3 group cursor-pointer relative h-[280px] 2xl:h-[310px]" style="opacity: 1; transform: scale(1) translate3d(376px, 592px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; width: 360px; transition: 0.5s ease-out, width 1ms;">
                        <div className="group-hover:-translate-y-[100%] duration-300 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 z-10  size-[50px] 2xl:size-[60px] rounded-full bg-white flex items-center justify-center border-2 border-primary text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
                            </svg>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] duration-300 absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-10  block">
                            <button className="whitespace-nowrap btn-secondary hover:bg-white flex items-center gap-2 mt-6">
                                <span>MORE VIDEOS</span>
                                <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 duration-300"></div>
                        {/* <img className="object-cover object-center h-full w-full" src="./image/course-img-6.jpg" alt=""> */}
                    </div>
                    <div data-src="./video/course.mp4" data-category="4" data-sort="value" className="course-video filtr-item w-full sm:w-1/2 lg:w-1/3 group cursor-pointer relative h-[280px] 2xl:h-[310px]" style="opacity: 1; transform: scale(1) translate3d(0px, 888px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; width: 360px; transition: 0.5s ease-out, width 1ms;">
                        <div className="group-hover:-translate-y-[100%] duration-300 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 z-10  size-[50px] 2xl:size-[60px] rounded-full bg-white flex items-center justify-center border-2 border-primary text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
                            </svg>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] duration-300 absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-10  block">
                            <button className="whitespace-nowrap btn-secondary hover:bg-white flex items-center gap-2 mt-6">
                                <span>MORE VIDEOS</span>
                                <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 duration-300"></div>
                        {/* <img className="object-cover object-center h-full w-full" src="./image/course-img-1.jpg" alt=""> */}
                    </div>
                    <div data-src="./video/course.mp4" data-category="2" data-sort="value" className="course-video filtr-item w-full sm:w-1/2 lg:w-1/3 group cursor-pointer relative h-[280px] 2xl:h-[310px]" style="opacity: 1; transform: scale(1) translate3d(376px, 888px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; width: 360px; transition: 0.5s ease-out, width 1ms;">
                        <div className="group-hover:-translate-y-[100%] duration-300 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 z-10  size-[50px] 2xl:size-[60px] rounded-full bg-white flex items-center justify-center border-2 border-primary text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
                            </svg>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] duration-300 absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-10  block">
                            <button className="whitespace-nowrap btn-secondary hover:bg-white flex items-center gap-2 mt-6">
                                <span>MORE VIDEOS</span>
                                <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 duration-300"></div>
                        {/* <img className="object-cover object-center h-full w-full" src="./image/course-img-2.jpg" alt=""> */}
                    </div>
                    <div data-src="./video/course.mp4" data-category="4" data-sort="value" className="course-video filtr-item w-full sm:w-1/2 lg:w-1/3 group cursor-pointer relative h-[280px] 2xl:h-[310px]" style="opacity: 1; transform: scale(1) translate3d(0px, 1184px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; width: 360px; transition: 0.5s ease-out, width 1ms;">
                        <div className="group-hover:-translate-y-[100%] duration-300 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 z-10  size-[50px] 2xl:size-[60px] rounded-full bg-white flex items-center justify-center border-2 border-primary text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
                            </svg>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] duration-300 absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-10  block">
                            <button className="whitespace-nowrap btn-secondary hover:bg-white flex items-center gap-2 mt-6">
                                <span>MORE VIDEOS</span>
                                <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 duration-300"></div>
                        {/* <img className="object-cover object-center h-full w-full" src="./image/course-img-3.jpg" alt=""> */}
                    </div>
                    <div data-src="./video/course.mp4" data-category="5" data-sort="value" className="course-video filtr-item w-full sm:w-1/2 lg:w-1/3 group cursor-pointer relative h-[280px] 2xl:h-[310px]" style="opacity: 1; transform: scale(1) translate3d(376px, 1184px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; width: 360px; transition: 0.5s ease-out, width 1ms;">
                        <div className="group-hover:-translate-y-[100%] duration-300 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 z-10  size-[50px] 2xl:size-[60px] rounded-full bg-white flex items-center justify-center border-2 border-primary text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
                            </svg>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] duration-300 absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-10  block">
                            <button className="whitespace-nowrap btn-secondary hover:bg-white flex items-center gap-2 mt-6">
                                <span>MORE VIDEOS</span>
                                <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 duration-300"></div>
                        {/* <img className="object-cover object-center h-full w-full" src="./image/course-img-4.jpg" alt=""> */}
                    </div>
                    <div data-src="./video/course.mp4" data-category="5" data-sort="value" className="course-video filtr-item w-full sm:w-1/2 lg:w-1/3 group cursor-pointer relative h-[280px] 2xl:h-[310px]" style="opacity: 1; transform: scale(1) translate3d(0px, 1480px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; width: 360px; transition: 0.5s ease-out, width 1ms;">
                        <div className="group-hover:-translate-y-[100%] duration-300 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 z-10  size-[50px] 2xl:size-[60px] rounded-full bg-white flex items-center justify-center border-2 border-primary text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
                            </svg>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] duration-300 absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-10  block">
                            <button className="whitespace-nowrap btn-secondary hover:bg-white flex items-center gap-2 mt-6">
                                <span>MORE VIDEOS</span>
                                <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 duration-300"></div>
                        {/* <img className="object-cover object-center h-full w-full" src="./image/course-img-5.jpg" alt=""> */}
                    </div>
                    <div data-src="./video/course.mp4" data-category="2" data-sort="value" className="course-video filtr-item w-full sm:w-1/2 lg:w-1/3 group cursor-pointer relative h-[280px] 2xl:h-[310px]" style="opacity: 1; transform: scale(1) translate3d(376px, 1480px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; width: 360px; transition: 0.5s ease-out, width 1ms;">
                        <div className="group-hover:-translate-y-[100%] duration-300 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 z-10  size-[50px] 2xl:size-[60px] rounded-full bg-white flex items-center justify-center border-2 border-primary text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
                            </svg>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] duration-300 absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-10  block">
                            <button className="whitespace-nowrap btn-secondary hover:bg-white flex items-center gap-2 mt-6">
                                <span>MORE VIDEOS</span>
                                <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 duration-300"></div>
                        {/* <img className="object-cover object-center h-full w-full" src="./image/course-img-6.jpg" alt=""> */}
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <button className="btn-secondary flex items-center gap-2 mt-8">
                    <span>View all courses</span>
                    <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
                        </path>
                    </svg>
                </button>
            </div>


        </div>
    </section>
  )
}
