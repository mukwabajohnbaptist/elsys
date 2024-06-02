import React from 'react'

const Cta = () => {
  return (
    <div className="my-20 ">
      <section className="mb-32">
        <div className="cta-bg relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px]"></div>
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-center">
            <div className="mt-[-200px] block rounded-lg px-6 py-12 shadow-xl backdrop-blur-xl md:py-16 md:px-12 ">
              <h1 className="mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-gray-50">
                Innovative Solutions<br /><span className="text-danger dark:text-danger-400">Since 2010 </span>
              </h1>
              <h3 className='m-5 text-gray-100 text-lg'>Elsys, based in Kampala, is a trusted control and engineering agency specializing in innovative automation systems for businesses seeking operational efficiency.</h3>
              <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out button-bg hover:text-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:text-danger-700 text-medium" data-te-ripple-init data-te-ripple-color="light" href="/contact" role="button">Get in touch</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cta