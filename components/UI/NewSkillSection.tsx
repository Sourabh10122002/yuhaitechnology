import React from "react";
import BlueHover from "../Buttons/BlueHoverBtn";
import Students2 from "@/public/students2.png";
import Image from "next/image";

const NewSkillSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-24 gap-8 sm:gap-12 lg:gap-16">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <Image
          src={Students2}
          alt="Students learning"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#1a2d62]">
        There are many companies but{" "}
          <u className="text-[var(--btn-color)]"> why choose us</u>
        </h2>

        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do
          eiusmod tempor incididunt ut labore et simply.
        </p>

        <div className="space-y-4 sm:space-y-6">
          {/* Mission Card with enhanced hover effect */}
          <div className="group border border-gray-200 relative bg-[var(--btn-color)] rounded-xl overflow-hidden cursor-pointer">
            <div className="relative bg-white rounded-lg p-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor ut labore.
                </p>
              </div>
            </div>
          </div>

          <div className="group border border-gray-200 relative bg-[var(--btn-color)] rounded-xl overflow-hidden cursor-pointer">
            <div className="relative bg-white rounded-lg p-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>

        <BlueHover text="Discover More" />
      </div>
    </section>
  );
};

export default NewSkillSection;
