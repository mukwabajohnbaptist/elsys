import React from 'react'
import Layout from './Layout'
import { FaRegClock } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import ContactForm from '../components/ContactForm';




const Contact = () => {
  return (
    <Layout>
      <div className='mb-20'>
        <div className="container flex flex-col mx-auto ">
          <div className="w-full draggable">
            <div className="container flex flex-col items-center gap-4 mx-auto my-32">
              <p className="text-2xl font-extrabold text-dark-grey-900">Get in touch with us today</p>
              <p className="text-base leading-7 text-dark-grey-600">Connect with our customer service team</p>
              <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center gap-3 px-8 py-10 rounded-3xl shadow-main">
                  <span className='text-gray-200 text-3xl'>
                  <MdLocationOn />
                  </span>
                  <p className="text-2xl font-bold text-dark-grey-900">Our Address</p>
                  <p className="text-base leading-7 text-dark-grey-600">Suna Road, Kampala (U)
                    <br />
                    P.O.Box 109692 Kampala GPO</p>
                </div>
                <div className="flex flex-col items-center gap-1 px-8 py-10  rounded-3xl shadow-main">
                  <span className='text-gray-200 text-3xl'>
                  <MdPhoneInTalk />
                  </span>
                  <p className="text-2xl font-bold text-dark-grey-900">Contact Us</p>
                  <p className="text-base leading-7 text-dark-grey-600">Reach out to us by phone</p>
                  <div className='flex'>
                    <a className="text-base leading-7 text-dark-grey-600" href="tel:+256 (775) 644-693">+256 (775) 644-693</a>
                    <span> &nbsp;|&nbsp; </span>
                    <a className="text-base leading-7 text-dark-grey-600" href="tel:+256 (788) 247-204">+256 (788) 247-204</a>
                  </div>
                  <p>
                    Email:
                    <a className="text-base leading-7 text-dark-grey-600" href="mailto:info@el-sysce.com">info@el-sysce.com</a>
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 px-1 py-10 rounded-3xl shadow-main">
                  <span className='text-gray-200 text-3xl'>
                  <FaRegClock />
                  </span>
                  <p className="text-2xl font-bold text-dark-grey-900">Working hours</p>
                  <p className="text-base leading-7 text-dark-grey-600">Monday - Friday: 08:00 - 17:00</p>
                  <p className="text-base leading-7 text-dark-grey-600">Saturday & Sunday: 08:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </Layout >

  )
}

export default Contact