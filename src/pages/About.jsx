import React from 'react'
import Layout from './Layout'
import Home from '../assets/home.jpg'

const About = () => {
  return (
    <Layout>
<div className="py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-4">
        <div className="relative overflow-hidden rounded-3xl background-color px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 mx-h-96">
          <img className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-5" src={Home} alt=""/>
          <div className="absolute inset-0 background-color mix-blend-multiply"></div>
         
          
        </div>
      </div>
      <div>
        <div className="text-base leading-7 lg:max-w-lg">
          <h1 className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">Our Purpose</h1>
          <div className="max-w-xl">
            <p className="mt-6">To empower businesses by providing cutting-edge industrial automation solutions that enhance productivity, efficiency, and profitability. We strive to be a trusted partner in our clients’ journey towards success, delivering unparalleled quality and service in every aspect of our operations.</p>
          </div>
        </div>
        <div className="text-base leading-7  lg:max-w-lg">
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Vision</h1>
          <div className="max-w-xl">
            <p className="mt-6">To be the premier provider of industrial automation solutions in Uganda and beyond, setting new standards of excellence through continuous innovation, technological advancement, and unwavering dedication to customer satisfaction. We aspire to be recognized as industry leaders, driving transformative change and fostering sustainable growth for our clients and stakeholders.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </Layout>

  )
}

export default About