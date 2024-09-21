"use client";
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

export default function JoinUs() {
    const joinUs = useRef(null);

    useEffect(() => {
        if (joinUs.current) {
            joinUs.current.style.marginBottom = `-${joinUs.current.clientHeight / 2}px`;
        }
    })
  return (
    <section ref={joinUs} className="float-section overflow-hidden relative z-20" data-float="float-1">
        <div className="container text-white text-center">
            <div className="relative bg-dark-green py-16 2xl:py-20">
                <Image className="pointer-events-none absolute top-0 right-0 w-[200px]" src="/images/circles/Subtract-right.png" width={200} height={200} alt="" />
                <Image className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 w-[150px]" src="/images/circles/Subtract2.png" width={200} height={200} alt="" />
                <div className="space-y-8 2xl:space-y-10 w-full sm:w-10/12 lg:w-8/12 xl:w-7/12 px-5 md:px-10 mx-auto">
                    <h2 className="font-48 font-semibold">Ready to improve your skills
                        Join Our tean Today</h2>
                    <p className="font-18 text-gray-light leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod
                        commodo consequat.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.</p>
                    <button className="w-fit mx-auto border-white text-white hover:bg-white hover:text-dark-green flex btn-primary items-center gap-2">
                        <span>Join Us Now</span>
                        <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}
