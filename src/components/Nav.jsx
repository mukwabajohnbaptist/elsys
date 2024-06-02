import logo from '../logo.png'

export default function Navbar() {
    function handleClick(event) {
        // Remove the active className from all links
        document.querySelectorAll('a').forEach((el) => {
            el.classNameList.remove('bg-blue-700');
        });

        // Add the active className to the clicked link
        const currentLink = event.target.closest('a');
        currentLink.classNameList.add('text-blue-700');
    }

    return (
        <div>
            {/* <div className="menu shadow bckdrop-blur">
                <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">

                    <div>
                        <a href="/" className="flex cursor-pointer items-center whitespace-nowrap font-black">
                            <span className="mr-2 text-4xl ">
                                <img className='w-40 left-7' src={logo} alt="el-sys logo" />
                            </span>
                        </a>
                    </div>
                    <div>
                        <input type="checkbox" className="peer hidden" id="navbar-open" />
                        <label className="align-bottom absolute top-9 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
                            <span className="sr-only">Toggle Navigation</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                    </div>
                    <nav aria-label="Header Navigation" className="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start">
                        <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                            <li className=" md:mr-12"><a onClick={handleClick} href="/">Home</a></li>
                            <li className=" md:mr-12"><a onClick={handleClick} href="/services">Services</a></li>
                            <li className=" md:mr-12"><a onClick={handleClick} href="/about">About</a></li>
                            <li className=" md:mr-12"><a onClick={handleClick} href="/contact">Contact</a></li>


                            <li className="md:mr-12">
                                <button className="rounded border px-6 py-1 transition-colors button-bg">Login</button>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div > */}
            <nav className="menu lg:px-16 px-6 shadow-md flex flex-wrap items-center lg:py-0 py-2">
                <div className="flex-1 flex justify-between items-center">
                    <a href="/" className="mr-2 text-4xl">
                        <img className='w-40 left-7' src={logo} alt="el-sys logo" />
                    </a>
                </div>
                <label for="menu-toggle" className="cursor-pointer lg:hidden block">
                    <svg
                        className="fill-current "
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                    >
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />
                <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                    <nav>
                        <ul className="text-xl text-center items-center gap-x-4 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
                            <li className="py-2 lg:py-0 ">
                                <a
                                    className=" hover:pb-4 hover:border-b-2 hover:border-gray-100 active:border-gray-100"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="py-2 lg:py-0 ">
                                <a
                                    className=" hover:pb-4 hover:border-b-2 hover:border-gray-100"
                                    href="/services"
                                >
                                    Services
                                </a>
                            </li>
                            <li className="py-2 lg:py-0 ">
                                <a
                                    className=" hover:pb-4 hover:border-b-2 hover:border-gray-100"
                                    href="/about"
                                >
                                    About
                                </a>
                            </li>
                            <li className="py-2 lg:py-0 ">
                                <a
                                    className=" hover:pb-4 hover:border-b-2 hover:border-gray-100"
                                    href="/contact"
                                >
                                    Contact
                                </a>
                            </li>
                            <li className="md:mr-12">
                                <button className="rounded border px-6 py-1 transition-colors button-bg">Login</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>

    )
}