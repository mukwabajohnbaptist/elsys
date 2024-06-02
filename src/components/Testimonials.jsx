import React from 'react'
import { TbSettingsCheck } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";

const Testimonials = () => {
    return (
        <div>
            <div>
                <section className="py-12 sm:py-16 lg:py-20">
                    <div className="relative mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 opacity-6">
                        <span className="hidden sm:block -z-10 absolute -left-5 opacity-6 -top-6 rounded-full  bg-blue-900 p-6 text-6xl text-white">
                            <TbSettingsCheck />
                        </span>
                        <span className="hidden sm:block -z-10 absolute -right-5 opacity-6 -bottom-6 rounded-full  bg-blue-900 p-6 text-6xl text-white">
                            <VscSettings />
                        </span>

                        <div className="flex flex-col items-center">
                            <div className="text-center">
                                <p className="text-lg font-medium ">OUR PROCESS </p>
                                <h2 className="mt-4 text-3xl font-bold sm:text-4xl xl:text-5xl">Our Streamlined Work Process</h2>
                            </div>

                            <div className="order-3 mt-8 text-center md:mt-16">
                                <a href='/services' className="mb-20 rounded-lg shadow border hover:border-0 button-bg px-6 py-2 font-medium  ">Explore more</a>
                            </div>

                            <div className="relative mx-auto mt-20 grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
                                <div className="flex flex-col rounded-xl  text-center shadow-sm border-t-4 border-blue-200 shadow-blue-200">
                                    <div className="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
                                        <div className="flex-1">
                                            <p className="border-blue-200 px-10 text-xl font-black">Analyze</p>

                                            <div className="mt-8 flex-1">
                                                <p className="leading-relaxed ">We analyze your requirements and develop a customized automation strategy for your business.</p>
                                            </div>
                                        </div>

                                        <div className="-mx-5 mt-8 px-8 py-1">
                                            <div className="">
                                                <p className="text-base font-bold ">Step one</p>
                                                {/* <p className="mt-0.5 text-sm">CEO, Mavoline</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col rounded-xl  text-center shadow-sm border-t-4 border-blue-200 shadow-blue-200">
                                    <div className="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
                                        <div className="flex-1">
                                            <p className="border-blue-200 px-10 text-xl font-black">Implement</p>

                                            <blockquote className="mt-8 flex-1">
                                                <p className="leading-relaxed ">Our experienced engineers implement the automation solution with precision and efficiency to optimize your operations.</p>
                                            </blockquote>
                                        </div>

                                        <div className="-mx-5 mt-8 px-8 py-1">
                                            <div className="">
                                                <p className="text-base font-bold ">Step two</p>
                                                {/* <p className="text-blue-90 mt-0.5 text-sm">Youtube Personality</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col rounded-xl  text-center shadow-sm border-t-4 border-blue-200 shadow-blue-200">
                                    <div className="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
                                        <div className="flex-1">
                                            <p className="border-blue-200 px-10 text-xl font-black">Optimize</p>

                                            <blockquote className="mt-8 flex-1">
                                                <p className="leading-relaxed ">We continuously monitor and optimize the system to ensure it performs at its best for your business success.</p>
                                            </blockquote>
                                        </div>

                                        <div className="-mx-5 mt-8 px-8 py-1">
                                            <div className="">
                                                <p className="text-base font-bold ">Step three</p>
                                                {/* <p className="text-blue-90 mt-0.5 text-sm">Esports Commentator</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Testimonials