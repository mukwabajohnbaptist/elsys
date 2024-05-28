import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="relative mt-5 bg-gray-900 px-4 pt-10">
                <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-sm border-1 border-sky-500 p-1 bg-white object-cover">
                    <img className="object-cover h-full " src="/logo.png.png" alt="logo" />
                    </div>
                {/* <nav aria-label="Footer Navigation" className="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left">
                    <a href="/" className="font-medium text-white">Demo</a>
                    <a href="/" className="font-medium text-white">Support</a>
                    <a href="/" className="font-medium text-white">Privacy Policy</a>
                    <a href="/" className="font-medium text-white">Terms & Conditions</a>
                </nav> */}
                <p className="py-5 text-center text-gray-300">© 2022 ELSYS CONTROLS & ENGINEERING | All Rights Reserved</p>
            </footer>

        </div>
    )
}

export default Footer