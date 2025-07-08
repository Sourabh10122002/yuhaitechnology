
import React from "react";

const SubscribeSection:React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D2951]">
          Subscrib<span className="inline-block">e</span> to our newsletter,
          <br />
          We do not make any spam.
        </h2>
        <p className="text-gray-500 mt-4 text-base md:text-lg lg:px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod
          tempor enim minim
        </p>

        <form className="mt-8 flex items-center justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full rounded-full border px-6 py-4 pr-16 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-green-400 hover:bg-green-500 text-white p-3 rounded-full transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10l9 4 9-4-9-4-9 4zm0 0v6a2 2 0 002 2h14a2 2 0 002-2v-6"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
