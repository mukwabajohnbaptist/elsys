import React from 'react'
import crane from '../assets/crane.jpeg'

const Services = () => {
    return (
        <div className='mt-20 mb-10 lg:mx-24'>
            <div className="text-center mt-20 mb-10">
                <p className="text-lg font-medium text-blue-600">OUR WORK</p>
                <h2 className="mt-4 mb-4 text-3xl font-bold text-blue-900 sm:text-4xl xl:text-5xl">Our Expert Services</h2>
                <p className="text-lg font-medium text-gray-800">Explore our range of specialized services designed to meet the unique needs of every client we serve.</p>
            </div>
            <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
                <div
                    className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow hover:shadow-lg dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                    <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src={"https://tecdn.b-cdn.net/img/new/standard/city/044.webp"}
                            alt="Skyscrapers" />
                    </a>
                    <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight uppercase text-gray-950">Automation</h5>
                        <p className="mb-4 text-gray-950">
                        Revolutionize operations with advanced automation systems.
                        </p>
                    </div>
                    <div
                        className="hover:bg-cyan-50 mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center  bg-cyan-700 ">
                        <a className='text-cyan-50 hover:text-blue-700 uppercase' href='/services'>Explore more...</a>
                    </div>
                </div>

                <div
                    className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow hover:shadow-lg dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                    <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                            alt="Los Angeles Skyscrapers" />
                    </a>
                    <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight uppercase text-gray-950">Engineering</h5>
                        <p className="mb-4 text-gray-950">
                        Engineering excellence for optimized performance.
                        </p>
                    </div>
                    <div
                        className="hover:bg-cyan-50 mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center  bg-cyan-700 ">
                        <a className='text-cyan-50 hover:text-blue-700 uppercase' href='/services'>Explore more...</a>
                    </div>
                </div>

                <div
                    className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow hover:shadow-lg dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                    <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
                            alt="Palm Springs Road" />
                    </a>
                    <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight uppercase text-gray-950">Integration</h5>
                        <p className="mb-4 text-gray-950">
                        Seamless integration of automation systems for cohesive workflows.
                        </p>
                    </div>
                    <div
                        className="hover:bg-cyan-50 mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center  bg-cyan-700 ">
                        <a className='text-cyan-50 hover:text-blue-700 uppercase' href='/services'>Explore more...</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services