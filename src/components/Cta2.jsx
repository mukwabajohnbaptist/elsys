import React from 'react'

const Cta2 = () => {
  return (
    <div className="my-20 bg-blue-50">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/033.jpg" className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]" alt="image" />
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-primary p-6 text-center text-white lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-6 text-3xl font-bold text-blue-950">
                  What are you waiting for?
                </h2>
                <p className="mb-6 pb-2 lg:pb-0 text-gray-950">
                  Contact us now to experience our top-notch automation solutions.
                </p>
                <a href='/contact' type="button" className="rounded-full border-2 bg-blue-900 shadow-md px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-blue-500 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 " data-te-ripple-init data-te-ripple-color="light">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cta2