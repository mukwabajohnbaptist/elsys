import crane from '../assets/crane.jpeg'
const Hero = () => {
    return (
        <div>
            <div className="hero-bg relative mx-auto  p-16 md:max-w-full md:px-8 lg:py-32 xl:px-20">
                {/* <img className="object-cover" src={crane} alt="" /> */}
                <div className="mx-auto max-w-xl lg:max-w-screen-xl">
                    <div className="mx-auto flex flex-col items-center text-center lg:max-w-lg">
                        <div className="mb-6 max-w-xl">
                            <div>
                                <p className="mb-4 inline-block rounded-full px-3 py-px text-lg font-sans  tracking-wider text-cyan-100">
                                    Empowering Innovations With
                                </p>
                            </div>
                            <h2 className="mb-6 max-w-lg font-sans text-3xl font-black tracking-tight text-gray-200 sm:text-4xl">
                                Cutting-Edge Automation Solutions
                                <span className="inline-block text-blue-600"> 
                                </span>
                            </h2>
                            <p className="text-base font-semibold text-gray-200 md:text-lg">Partner with EL-SYS C&E for your smart, customized system and process automation solutions.
                            </p>
                        </div>
                        <div className="flex items-center">
                            <a href="/contact" className="mr-6 inline-flex h-12 items-center justify-center rounded background-clr px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 focus:ring"> Explore now </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero