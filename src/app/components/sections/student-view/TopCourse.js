import React from 'react'

export default function TopCourse() {
  return (
    <section className="py-24 2xl:py-28">
        <div className="container">
            <div className="w-full md:w-[90%] lg:w-[60%]">
                <h2 className="font-30 text-primary uppercase">OUR TOP COURSES</h2>
                <p className="font-48 text-dark2 mt-6 font-bold">Enjoy Learning At Comfort Of Your Home And Different Way
                    What Do You Want To Learn</p>
            </div>
            <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 2xl:gap-6">
                <div className="group relative p-4 2xl:p-6 bg-gray-light2 hover:bg-dark-green">
                    <div className="hidden group-hover:block absolute inset-2 border-white/50 border-2">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2.5 -translate-y-1/2 w-20 flex justify-center items-center bg-dark-green">
                            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.2354 0.642353L27.6177 4.81741L30 8.99194L25.287 9.02099L20.574 9.05004L22.9047 4.84646L25.2354 0.642353Z" fill="white"></path>
                                <path d="M5.23537 0.642353L7.61769 4.81741L10 8.99194L5.28701 9.02099L0.574031 9.05004L2.9047 4.84646L5.23537 0.642353Z" fill="white"></path>
                                <path d="M35.2354 9.02098L37.6177 4.84592L40 0.671387L35.287 0.642338L30.574 0.613289L32.9047 4.81687L35.2354 9.02098Z" fill="white"></path>
                                <path d="M15.2354 9.02098L17.6177 4.84592L20 0.671387L15.287 0.642338L10.574 0.613289L12.9047 4.81687L15.2354 9.02098Z" fill="white"></path>
                            </svg>
                        </div>
                    </div>
                    {/* <img className="w-full" src="./image/our-course.jpg" alt=""> */}
                    <h2 className="font-30 text-dark-green group-hover:text-white mt-4">Ui/UX Complete
                        Guide</h2>
                    <ul className="mt-4 text-riple-yellow flex gap-2 items-center flex-wrap">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li className="font-18 text-para group-hover:text-white">(10)</li>
                    </ul>
                    <div className="mt-6 flex items-center">
                        <span className="text-primary font-30">$50/</span>
                        <span className="text-para group-hover:text-white font-18">Courses</span>
                    </div>
                </div>
                <div className="group relative p-4 2xl:p-6 bg-gray-light2 hover:bg-dark-green">
                    <div className="hidden group-hover:block absolute inset-2 border-white/50 border-2">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2.5 -translate-y-1/2 w-20 flex justify-center items-center bg-dark-green">
                            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.2354 0.642353L27.6177 4.81741L30 8.99194L25.287 9.02099L20.574 9.05004L22.9047 4.84646L25.2354 0.642353Z" fill="white"></path>
                                <path d="M5.23537 0.642353L7.61769 4.81741L10 8.99194L5.28701 9.02099L0.574031 9.05004L2.9047 4.84646L5.23537 0.642353Z" fill="white"></path>
                                <path d="M35.2354 9.02098L37.6177 4.84592L40 0.671387L35.287 0.642338L30.574 0.613289L32.9047 4.81687L35.2354 9.02098Z" fill="white"></path>
                                <path d="M15.2354 9.02098L17.6177 4.84592L20 0.671387L15.287 0.642338L10.574 0.613289L12.9047 4.81687L15.2354 9.02098Z" fill="white"></path>
                            </svg>
                        </div>
                    </div>
                    {/* <img className="w-full" src="./image/our-course-2.jpg" alt=""> */}
                    <h2 className="font-30 text-dark-green group-hover:text-white mt-4">Website Design
                        &amp; Development</h2>
                    <ul className="mt-4 text-riple-yellow flex gap-2 items-center flex-wrap">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li className="font-18 text-para group-hover:text-white">(10)</li>
                    </ul>
                    <div className="mt-6 flex items-center">
                        <span className="text-primary font-30">$30/</span>
                        <span className="text-para group-hover:text-white font-18">Courses</span>
                    </div>
                </div>
                <div className="group relative p-4 2xl:p-6 bg-gray-light2 hover:bg-dark-green">
                    <div className="hidden group-hover:block absolute inset-2 border-white/50 border-2">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2.5 -translate-y-1/2 w-20 flex justify-center items-center bg-dark-green">
                            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.2354 0.642353L27.6177 4.81741L30 8.99194L25.287 9.02099L20.574 9.05004L22.9047 4.84646L25.2354 0.642353Z" fill="white"></path>
                                <path d="M5.23537 0.642353L7.61769 4.81741L10 8.99194L5.28701 9.02099L0.574031 9.05004L2.9047 4.84646L5.23537 0.642353Z" fill="white"></path>
                                <path d="M35.2354 9.02098L37.6177 4.84592L40 0.671387L35.287 0.642338L30.574 0.613289L32.9047 4.81687L35.2354 9.02098Z" fill="white"></path>
                                <path d="M15.2354 9.02098L17.6177 4.84592L20 0.671387L15.287 0.642338L10.574 0.613289L12.9047 4.81687L15.2354 9.02098Z" fill="white"></path>
                            </svg>
                        </div>
                    </div>
                    {/* <img className="w-full" src="./image/our-course-3.jpg" alt=""> */}
                    <h2 className="font-30 text-dark-green group-hover:text-white mt-4">Graphic Design
                        Complete</h2>
                    <ul className="mt-4 text-riple-yellow flex gap-2 items-center flex-wrap">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li className="font-18 text-para group-hover:text-white">(10)</li>
                    </ul>
                    <div className="mt-6 flex items-center">
                        <span className="text-primary font-30">$40/</span>
                        <span className="text-para group-hover:text-white font-18">Courses</span>
                    </div>
                </div>
                <div className="group relative p-4 2xl:p-6 bg-gray-light2 hover:bg-dark-green">
                    <div className="hidden group-hover:block absolute inset-2 border-white/50 border-2">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2.5 -translate-y-1/2 w-20 flex justify-center items-center bg-dark-green">
                            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.2354 0.642353L27.6177 4.81741L30 8.99194L25.287 9.02099L20.574 9.05004L22.9047 4.84646L25.2354 0.642353Z" fill="white"></path>
                                <path d="M5.23537 0.642353L7.61769 4.81741L10 8.99194L5.28701 9.02099L0.574031 9.05004L2.9047 4.84646L5.23537 0.642353Z" fill="white"></path>
                                <path d="M35.2354 9.02098L37.6177 4.84592L40 0.671387L35.287 0.642338L30.574 0.613289L32.9047 4.81687L35.2354 9.02098Z" fill="white"></path>
                                <path d="M15.2354 9.02098L17.6177 4.84592L20 0.671387L15.287 0.642338L10.574 0.613289L12.9047 4.81687L15.2354 9.02098Z" fill="white"></path>
                            </svg>
                        </div>
                    </div>
                    {/* <img className="w-full" src="./image/our-course-4.jpg" alt=""> */}
                    <h2 className="font-30 text-dark-green group-hover:text-white mt-4">Data Analysis
                        Learning</h2>
                    <ul className="mt-4 text-riple-yellow flex gap-2 items-center flex-wrap">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                            </svg>
                        </li>
                        <li className="font-18 text-para group-hover:text-white">(10)</li>
                    </ul>
                    <div className="mt-6 flex items-center">
                        <span className="text-primary font-30">$50/</span>
                        <span className="text-para group-hover:text-white font-18">Courses</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <button className="btn-secondary flex items-center gap-2 mt-10">
                    <span>VIEW ALL COURSES</span>
                    <svg className="size-5 2xl:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                    </svg>
                </button>
            </div>
        </div>
    </section>
  )
}
