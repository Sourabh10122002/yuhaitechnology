
import { featureCardsData } from "@/constants/cardsData";
import React from "react";
import FeatureCards from "./FeatureCards";

const FeaturesSection = () => {

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-white">

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
      <div className="top">
        <div className="flex items-center gap-4">
          <h2 className="text-sm sm:text-base font-bold text-[var(--btn-color)] uppercase">
            Why Choose YHS
          </h2>
          <span className="w-16 sm:w-28 bg-[var(--btn-color)] py-[1.2px] rounded-full"></span>
        </div>
        <div className="mt-2 sm:mt-4">
          <h1 className="text-4xl text-[#1a2d62] sm:text-4xl md:text-5xl font-extrabold">
            Find The {" "}
            <span className="text-[var(--btn-color)]">
              <u>Best Features</u>
            </span> {" "}
             Of YHS.
          </h1>
        </div>
      </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 lg:mt-16">
          {featureCardsData.map((feature, index) => (
            <FeatureCards key={index} title={feature.title} value={feature.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
