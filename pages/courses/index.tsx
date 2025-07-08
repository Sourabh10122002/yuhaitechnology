import CourseCards from "@/components/UI/CourseCards";
import React from "react";
import { motion } from "framer-motion";

const index = () => {
  const courseData = [
    {
      button: "Arts and Design",
      title: "Basic Fundamentals of Interior & Graphics Design",
      lesson: 3,
      time: "3h 45m",
      rating: 4.9,
      seats: 30,
      price: 49,
    },
    {
      button: "Social",
      title: "Increasing Engagement with Instagram & Facebook",
      lesson: 5,
      time: "4h 15m",
      rating: 4.7,
      seats: 21,
      price: 39,
    },
    {
      button: "Design",
      title: "Introduction to Color Theory & Basic UI/UX",
      lesson: 4,
      time: "6h 25m",
      rating: 4.8,
      seats: 33,
      price: 29,
    },
    {
      button: "Technology",
      title: "Financial Security Thinking and Principles Theory",
      lesson: 7,
      time: "7h 45m",
      rating: 4.7,
      seats: 11,
      price: 59,
    },
    {
      button: "Data Science",
      title: "Logo Design: From Concept to Presentation",
      lesson: 5,
      time: "4h 55m",
      rating: 4.9,
      seats: 41,
      price: 69,
    },
    {
      button: "Development",
      title: "Professional Ceramic Moulding for Beginners",
      lesson: 3,
      time: "3h 10m",
      rating: 4.9,
      seats: 37,
      price: 99,
    },
    {
      button: "Arts and Design",
      title: "Basic Fundamentals of Interior & Graphics Design",
      lesson: 3,
      time: "3h 45m",
      rating: 4.9,
      seats: 30,
      price: 49,
    },
    {
      button: "Social",
      title: "Increasing Engagement with Instagram & Facebook",
      lesson: 5,
      time: "4h 15m",
      rating: 4.7,
      seats: 21,
      price: 39,
    },
    {
      button: "Design",
      title: "Introduction to Color Theory & Basic UI/UX",
      lesson: 4,
      time: "6h 25m",
      rating: 4.8,
      seats: 33,
      price: 29,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <main className="w-full">
        <section
          style={{ backgroundImage: "url('/contact-top.png')" }}
          className="bg-cover bg-center text-center py-32 relative"
        >
          <h1 className="text-5xl font-bold text-[#1A2C62]">All Courses</h1>
          <div className="mt-4 inline-block px-10 py-3 bg-white rounded-[6px] shadow-sm">
            <span className="text-green-500 font-bold">Home</span> /{" "}
            <span className="font-bold text-[#1A2C62]">Courses</span>
          </div>
        </section>

        <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-4">
                <h2 className="text-sm sm:text-base font-bold text-[var(--btn-color)] uppercase">
                  Popular Courses
                </h2>
                <span className="w-16 sm:w-28 bg-[var(--btn-color)] py-[1.2px] rounded-full"></span>
              </div>
              <div className="mt-2 sm:mt-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                  Choose Our{" "}
                  <span className="text-[var(--btn-color)]">
                    <u>Top Skills</u>
                  </span>
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseData.map((course, index) => (
                <CourseCards
                  key={index}
                  button={course.button}
                  title={course.title}
                  lesson={course.lesson}
                  time={course.time}
                  rating={course.rating}
                  seats={course.seats}
                  index={index}
                  price={course.price}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default index;
