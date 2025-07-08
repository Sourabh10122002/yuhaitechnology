
import React from "react";
import GreenLeftHover from "../Buttons/GreenLeftHover";
import Image from "next/image";
import promo from "@/public/promo.png";

function ExploreCoursesSection() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#cbe9e1] to-[#fae9ea] px-4 sm:px-6 md:px-12 lg:px-28 py-8 sm:py-12 gap-8 sm:gap-10">
      {/* Text Content */}
      <div className="w-full lg:flex-1 max-w-2xl order-2 lg:order-1">
        <p className="text-[var(--btn-color)] text-sm sm:text-base font-semibold mb-2">
          Best Online Conveyor Platform
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-color)] leading-tight">
          One Platform & Many{" "}
          <span className="text-[var(--btn-color)] underline">Products</span> For You
        </h1>
        
        <p className="text-gray-500 py-2 font-medium mt-4 text-sm sm:text-base">
          From blogs to emails to ad copies, auto-generate catchy, original, and high-converting
          copies in popular tones languages.
        </p>

        <ul className="mt-6 space-y-3 font-medium sm:font-bold mb-6 sm:mb-8">
          <li className="flex items-start sm:items-center gap-2 text-[#1b2b50] text-sm sm:text-base">
            <span>✅</span> 9/10 Average Satisfaction Rate
          </li>
          <li className="flex items-start sm:items-center gap-2 text-[#1b2b50] text-sm sm:text-base">
            <span>✅</span> 96% Completion Rate
          </li>
          <li className="flex items-start sm:items-center gap-2 text-[#1b2b50] text-sm sm:text-base">
            <span>✅</span> Friendly Environment
          </li>
        </ul>

        <div className="w-full sm:w-auto">
          <GreenLeftHover text="EXPLORE OUR PRODUCTS" />
        </div>

      </div>

      {/* Image Content */}
      <div className="w-full lg:flex-1 flex justify-center relative order-1 lg:order-2 mb-6 lg:mb-0">
        <Image
          src={promo}
          alt="Students"
          className="rounded-xl w-full sm:max-w-md md:max-w-lg object-contain"
          priority
        />
      </div>
      
    </div>
  );
}

export default ExploreCoursesSection;