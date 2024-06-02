import React from 'react'
// import nodemailer from 'nodemailer'

const ContactForm = () => {

    return (
        <div className="w-full ">
            <div className="form-bg-color h-96  ">
                {/* <img src={Home2} alt={Home2} className="mb-4 h-40 w-full object-cover shadow-xl" /> */}
            </div>
            <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12 ">
                <div className="w-full shadow rounded p-8 sm:p-12 -mt-72 menu ">
                    <p className="text-3xl font-bold leading-7 text-center ">Contact me</p>
                    <form action="" method="post" >
                        <div className="md:flex items-center mt-12">
                            <div className="w-full md:w-1/2 flex flex-col">
                                <label className="font-semibold leading-none ">First Name</label>
                                <input type="text" className="leading-none  p-3 focus:outline-none mt-4 border-0  rounded" />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="font-semibold leading-none ">Last Name</label>
                                <input type="email" className="leading-none  p-3 focus:outline-none  mt-4 border-0  rounded" />
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="w-full flex flex-col">
                                <label className="font-semibold leading-none ">Subject</label>
                                <input type="text" className="leading-none p-3 focus:outline-none  mt-4 border-0  rounded" />
                            </div>

                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="font-semibold leading-none ">Message</label>
                                <textarea type="text" className="h-40 text-base leading-none p-3 focus:outline-none  mt-4  border-0 rounded"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <a href='#' className="mt-9 font-semibold leading-none py-4 px-10  rounded  focus:ring-2 focus:ring-offset-2  focus:outline-none bg-blue-600">
                                Send message
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm

