import { achievementCardsData } from "@/constants/cardsData";
import React from "react";
import company1 from "@/public/1.png";
import company2 from "@/public/2.png";
import company3 from "@/public/3.png";
import company4 from "@/public/4.png";
import company5 from "@/public/5.png";
import company6 from "@/public/1.png";
import company7 from "@/public/2.png";
import company8 from "@/public/3.png";
import Image from "next/image";
import AchievementCards from "./AchievementCards";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const AchievementSection = () => {
  const companyLogos = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7,
    company8,
  ];

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-12 bg-[#FFF]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <h2 className="text-sm sm:text-base font-bold text-[var(--btn-color)]">
            SOME FUN FACT
          </h2>
          <span className="w-16 sm:w-28 bg-[var(--btn-color)] py-[1.2px] rounded-full"></span>
        </div>
        <div className="mt-2">
          <h1 className="text-3xl text-[#1a2d62] sm:text-4xl md:text-5xl font-extrabold">
            Our Great{" "}
            <span className="text-[var(--btn-color)]">
              <u>Achievement</u>
            </span>
          </h1>
        </div>
      </div>

      {/* Middle Cards Section */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievementCardsData.map((val, index) => (
            <AchievementCards key={index} title={val.title} value={val.value} />
          ))}
        </div>
      </div>

      {/* Bottom Companies Section */}
      <div className="max-w-7xl mx-auto mt-10 lg:mt-20">
        <div className="text-center">
          <span className="inline-block font-bold text-sm sm:text-base md:text-lg lg:text-2xl text-[var(--btn-color)] bg-[#EAFAF2] px-6 py-2 sm:px-36 sm:py-3 rounded-full">
            Trusted Partners Around The World!
          </span>
        </div>

        <div
          className="embla w-full max-w-7xl mx-auto mt-8 sm:mt-16"
          ref={emblaRef}
        >
          <div className="embla__container">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="embla__slide pl-4  flex-[0_0_90%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_20%]">
                <div className="flex items-center justify-center h-24">
                  <Image
                    src={company}
                    alt={`Company logo ${index + 1}`}
                    className="object-contain w-44 lg:w-56 h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AchievementSection;
