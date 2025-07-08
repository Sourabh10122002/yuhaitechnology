'use client';

import { GrEmoji } from "react-icons/gr";
import React from "react";
import CountUp from 'react-countup';

interface Props {
    title: number;
    value: string;
}

const AchievementCards: React.FC<Props> = ({ title, value }) => {
  return (
    <div className="flex items-center gap-3 p-4 sm:p-6 shadow-[0_0_4px_rgba(0,0,0,0.2)] bg-white rounded-lg">
      <span>
        <GrEmoji className="w-6 h-6 sm:w-8 sm:h-8" />
      </span>
      <div>
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold opacity-80 text-[var(--text-color)]">
          <CountUp
            end={title}
            duration={1}
            enableScrollSpy
            scrollSpyOnce={true}
          />
        </span>
        <p className="text-sm sm:text-base opacity-60">{value}</p>
      </div>
    </div>
  );
};

export default AchievementCards;