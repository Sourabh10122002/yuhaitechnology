import React from "react";
import c1 from "@/public/c1.png";
import c2 from "@/public/c2.png";
import c3 from "@/public/c3.png";
import c4 from "@/public/c4.png";
import c5 from "@/public/c5.png";
import c6 from "@/public/c6.png";
import c7 from "@/public/c1.png";
import c8 from "@/public/c2.png";
import c9 from "@/public/c3.png";
import Image from "next/image";
import { FiClock, FiBook, FiUser } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import GreenBtn from "../Buttons/GreenBtn";

interface Props {
  index: number;
  button: string;
  title: string;
  lesson: number;
  time: string;
  rating: number;
  seats: number;
  price: number;
}

const CourseCards: React.FC<Props> = ({ index,button,title,lesson,time,rating,seats,price }) => {

  const courseImages = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

  return (
    <div className="bg-white pb-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 cursor-pointer">
      <div className="relative h-64 w-full">
        <Image
          src={courseImages[index]}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute top-4 left-4 bg-[var(--btn-color)] rounded-full w-14 h-14 flex items-center justify-center shadow-md">
          <span className="font-bold text-lg text-white">
            {price}
          </span>
        </div>
      </div>

      <div className="p-6">
        <GreenBtn text={button} />

        <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-[var(--btn-color)] transition-all">{title}</h3>

        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-4">
          <div className="flex items-center gap-1">
            <FiBook className="text-[var(--btn-color)]" />
            <span>{lesson} Lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <FiClock className="text-[var(--btn-color)]" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-600 font-semibold text-[15px]">
          <FiUser className="text-[var(--btn-color)]" />
          <span>{seats} Seats Available</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
