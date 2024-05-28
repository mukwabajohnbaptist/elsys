import crane from '../assets/crane.jpeg'
const Hero = () => {
    return (
        <div>
            <div className="relative mx-auto  p-16 md:max-w-full md:px-8 lg:py-32 xl:px-20 bg-gradient-to-tr from-cyan-900 to-blue-600">
                {/* <img className="object-cover" src={crane} alt="" /> */}
                <div className="mx-auto max-w-xl lg:max-w-screen-xl">
                    <div className="mx-auto flex flex-col items-center text-center lg:max-w-lg">
                        <div className="mb-6 max-w-xl">
                            <div>
                                <p className="mb-4 inline-block rounded-full px-3 py-px text-lg font-sans  tracking-wider text-cyan-100">
                                    Empowering Innovtions With
                                </p>
                            </div>
                            <h2 className="mb-6 max-w-lg font-sans text-3xl font-black tracking-tight text-gray-200 sm:text-4xl">
                                Cutting-Edge Automation Solutions
                                <span className="inline-block text-blue-600"> 
                                </span>
                            </h2>
                            <p className="text-base font-semibold text-gray-200 md:text-lg">Partner with El-sysce for precise automation systems tailored to optimize your operations and drive excellence in your business.
                            </p>
                        </div>
                        <div className="flex items-center">
                            <a href="/Contact" className="mr-6 inline-flex h-12 items-center justify-center rounded bg-blue-600 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-blue-700 focus:ring"> Explore now </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero