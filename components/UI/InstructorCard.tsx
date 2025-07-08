import React from "react";
import team1 from "@/public/team1.jpg";
import team2 from "@/public/team2.jpg";
import team3 from "@/public/team3.jpg";
import team4 from "@/public/team4.jpg";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaUserAlt,
  FaBook,
} from "react-icons/fa";

interface Props {
  index: number;
  name: string;
  role: string;
  course: number;
  students: number;
}

const InstructorCard: React.FC<Props> = ({ index,name,role,course,students }) => {
  const images = [team1, team2, team3, team4];

  return (
    <div className="relative group">
      <Image
        src={images[index]}
        alt={name}
        className="rounded-lg shadow-lg w-full h-[360px] object-cover"
      />

      <div className="absolute left-1/2 -bottom-20 transform -translate-x-1/2 w-[90%] bg-[var(--btn-color)] text-white rounded-lg shadow-lg px-6 py-4 text-center">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-base mb-3">{role}</p>
        <div className="flex items-center justify-center gap-2 mb-1">
          <FaBook className="text-white" />
          <p className="underline text-base">{course} years exp.</p>
        </div>
        <div className="flex items-center justify-center gap-2 mb-3">
          <FaUserAlt className="text-white" />
          <p className="underline text-base">{students} Student</p>
        </div>
        <div className="flex justify-center gap-4">
          <span className="p-3 rounded-full bg-white text-black">
            <FaFacebookF className="hover:text-[var(--btn-color)] cursor-pointer" />
          </span>
          <span className="p-3 rounded-full bg-white text-black">
            <FaTwitter className="hover:text-[var(--btn-color)] cursor-pointer" />
          </span>
          <span className="p-3 rounded-full bg-white text-black">
            <FaInstagram className="hover:text-[var(--btn-color)] cursor-pointer" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
