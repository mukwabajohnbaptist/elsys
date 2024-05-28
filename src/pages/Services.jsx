import React from 'react'
import Layout from './Layout'
import Crane from '../assets/crane.jpeg'
// import Conditioner from '../assets/conditioner.jpeg'
import Payments from '../assets/payments.jpeg'
// import Power from '../assets/power.jpeg'
import Robot from '../assets/robot.jpeg'
import Grocery2 from '../assets/grocery2.webp'
import Grocery3 from '../assets/Grocery3.jpg'
import Parking from '../assets/parking.jpg'
import MachineLoad from '../assets/MachineLoad.png'

const Services = () => {
  return (
    <Layout>
      <div className="pt-9 mx-auto md:max-w-full md:px-8 h-40">
       <img className='rounded object-cover h-40 w-full' src={MachineLoad} alt="hero" />
        {/* <div className="mx-auto max-w-xl lg:max-w-screen-xl">
          <div className="mx-auto flex flex-col items-center text-center lg:max-w-lg">
            <div className="mb-6 max-w-xl">
              <h2 className="mb-6 max-w-lg font-sans text-3xl font-black tracking-tight text-gray-200 sm:text-4xl">
                Services
              </h2>
            </div>
          </div>
        </div> */}
      </div>
      <div className="max-w-screen-xl mx-auto mt-8 py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight font-bold text-primary-800">Our Services</h2>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* <!-- can help image --> */}
          <div className="lg:w-2/2 xl:w-1/2 shadow-sm mr-0 md:mr-8 mb-6 md:mb-0 w-50">
            <img className="rounded  md:w-full mx-auto w-full h-80 object-cover" src={Robot} alt="can_help_banner" />
          </div>
          {/* <!-- end can help image --> */}

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-2 px-6 border border-blue-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-2">Automation:</h3>
                <p className="text-sm">Our automation solutions are tailored to enhance efficiency and productivity through cutting-edge technology.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-2 px-6 border border-blue-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-2">Engineering</h3>
                <p className="text-sm"> Our experienced engineers design innovative solutions that ensure reliability and precision in every project.</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-2 px-6 border border-blue-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-2">Integration</h3>
                <p className="text-sm">We specialize in integrating automation systems seamlessly into existing processes, providing a holistic solution for enhanced operations.</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-2 px-6 border border-green-blue border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-2">Consulting</h3>
                <p className="text-sm">Our consulting services offer expert guidance on implementing automation systems, optimizing operations, and achieving business goals.</p>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* <!-- source https://github.com/spacemadev/elevate-free-tailwind-business-template/ --> */}
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Project Showcase</h2>
            <p className="text-lg text-blue-500 font-semibold">Discover our latest projects and success stories in photos</p>
          </div>
          {/* <div className="flex flex-col md:flex-row items-center mb-8">
            <button className="filter-button bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">All</button>
            <button className="filter-button  bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">Web Design</button>
            <button className="filter-button  bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">App Development</button>
            <button className="filter-button  bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">Branding</button>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-1">
                <img className="w-full h-60 object-cover" src={Crane} alt="Project 1" />
                <div
                  className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-20">
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Fork lift</h3>
                  <span className="text-sm font-bold text-blue-500 group-hover:text-indigo-500">Industrial</span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-2">
                <img className="w-full h-60 object-cover" src={Grocery3} alt="Project 1" />
                <div
                  className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-20">
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Payment sytem</h3>
                  <span className="text-sm font-bold text-blue-500 group-hover:text-indigo-500">Grocery store</span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-3">
                <img className="w-full h-60 object-cover" src={Payments} alt="Project 1" />
                <div
                  className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-20">
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Parking Payments</h3>
                  <span className="text-sm font-bold text-blue-500 group-hover:text-indigo-500">Industrial
                    Branding</span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-4">
                <img className="w-full h-60 object-cover" src={Grocery2} alt="Project 1" />
                <div
                  className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-20">
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Scan and pay</h3>
                  <span className="text-sm font-bold text-blue-500 group-hover:text-indigo-500">Outdoor Payments
                    Branding</span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-5">
                <img className="w-full h-60 object-cover" src={Parking} alt="Project 1" />
                <div
                  className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-20">
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Parking Management</h3>
                  <span className="text-sm font-bold text-blue-500 group-hover:text-indigo-500">Industrial
                    Branding</span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-6">
                <img className="w-full h-60 object-cover" src={MachineLoad} alt="Project 1" />
                <div
                  className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-20">
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Industrial loader</h3>
                  <span className="text-sm font-bold text-blue-500 group-hover:text-indigo-500">Industrial
                    Branding</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Services