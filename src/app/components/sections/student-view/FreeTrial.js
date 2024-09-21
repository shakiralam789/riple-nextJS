import React from 'react'

export default function FreeTrial() {
  return (
    <section className="py-24 2xl:py-28">
        <div className="container">
            <div className="bg-dark2 p-4 sm:p-12 flex flex-wrap justify-between items-center gap-4">
                <div>
                    <h2 className="font-48 font-bold text-white">
                        <span className="text-primary">Free Trial Courses <br />
                            For</span> (7 Days)
                    </h2>
                    <p className="font-30 text-gray-light">Get the free access to our recurse center</p>
                </div>
                <div className="col-span-4">
                    <button className="btn-secondary flex items-center gap-2">
                        <span>GET FREE ACCESS</span>
                        <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}
