
import Image from 'next/image'
import React from 'react'
import StudentImage from "@/public/StudentImage.png";
import GreenLeftHover from '../Buttons/GreenLeftHover';

const LandingSection:React.FC = () => {
  return (
    <section className="w-full lg:min-h-screen bg-gradient-to-r from-green-50 to-pink-50 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 gap-6 sm:gap-10">
        {/* Text Content */}
        <div className="flex-1 w-full text-center lg:text-left px-4 sm:px-6 lg:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-bold leading-tight sm:leading-10 lg:leading-[1.2]">
            Better {" "}
            <span className="text-[var(--btn-color)]">Future</span> Starts{" "}
            <br className="hidden sm:block" />
            With <span className="text-blue-900">YHS</span>
          </h1>
          <p className="w-full max-w-md mx-auto lg:mx-0 text-gray-400 text-sm sm:text-base md:text-[18px] font-normal mt-3 sm:mt-4">
            It is a long established fact that reader will be distracted
            readable content of a page when.
          </p>

          <div className='mt-6'>
            <GreenLeftHover text='Explore Products' />
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 w-full relative flex justify-center items-center mt-6 sm:mt-0">
          {/* Background circles - show only on larger screens */}
          <div className="hidden lg:block absolute top-0 left-0 w-32 h-32 lg:w-40 lg:h-40 bg-green-400 rounded-full opacity-30 blur-2xl"></div>
          <div className="hidden lg:block absolute bottom-32 lg:bottom-48 right-16 lg:right-32 w-60 h-60 lg:w-80 lg:h-80 bg-red-200 rounded-full z-10"></div>

          {/* Main Image */}
          <Image
            src={StudentImage}
            alt="Student"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg z-10"
          />

          {/* Badge 1 - show on medium screens and up */}
          <div className="z-20 hidden sm:flex absolute top-4 sm:top-6 right-4 sm:right-6 lg:right-10 bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-xl shadow-md gap-2 text-xs sm:text-sm">
            <span className="text-green-500 text-2xl sm:text-3xl md:text-4xl">
              📄
            </span>
            <div>
              <p className="font-bold text-blue-900 text-2xl sm:text-3xl md:text-4xl">
                10 Lakhs+
              </p>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                Happy Customers
              </p>
            </div>
          </div>

          {/* Badge 2 - show on medium screens and up */}
          <div className="z-20 hidden sm:flex absolute bottom-24 sm:bottom-32 lg:bottom-44 -left-4 sm:-left-6 lg:-left-10 bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-xl shadow-md gap-2 text-xs sm:text-sm">
            <span className="text-green-500 text-2xl sm:text-3xl">👥</span>
            <div>
              <p className="font-bold text-blue-900 text-2xl sm:text-3xl md:text-4xl">
                50+
              </p>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                Products
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default LandingSection