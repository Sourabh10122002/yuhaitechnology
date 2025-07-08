
import React from 'react';
import GreenLeftHover from '../Buttons/GreenLeftHover';

interface Props {
  title: string;
  value: string;
}

const Cards: React.FC<Props> = ({ title, value }) => {
  return (
    <div className="w-full h-auto min-h-[200px] bg-white flex items-center justify-center border-r-[1px] border-r-[#ededed] transition-all duration-300">
      <section className="p-6 sm:p-8 lg:p-[60px] flex flex-col gap-3 sm:gap-4 w-full">
        <h1 className="font-bold text-xl sm:text-2xl lg:text-[1.4em] text-[#1A2D62]">
          {title}
        </h1>
        <p className="text-gray-800 font-normal opacity-60 text-sm sm:text-base lg:text-[1em] leading-relaxed">
          {value}
        </p>

        <GreenLeftHover text='Explore' />

      </section>
    </div>
  );
};

export default Cards;