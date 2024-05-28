import logo from '../logo.png.png'

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
        <div className="menu shadow bckdrop-blur">
            <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
                <a href="/" className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
                    <span className="mr-2 text-4xl text-blue-500">
                        <img className='h-14 w-64"' src={logo} alt="logo" />
                    </span>

                </a>
                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav aria-label="Header Navigation" className="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start">
                    <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                        <li className="text-blue-800 hover:text-blue-600 md:mr-12"><a onClick={handleClick} href="/">Home</a></li>
                        <li className="text-blue-800 hover:text-blue-600 md:mr-12"><a onClick={handleClick} href="/services">Services</a></li>
                        <li className="text-blue-800 hover:text-blue-600 md:mr-12"><a onClick={handleClick} href="/about">About</a></li>
                        <li className="text-blue-800 hover:text-blue-600 md:mr-12"><a onClick={handleClick} href="/contact">Contact</a></li>

                        <li className="md:mr-12">
                            <button className="rounded border-2 border-gray-50 hover:border-blue-600 px-6 py-1 text-gray-50 transition-colors hover:bg-blue-600 hover:text-white">Login</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}