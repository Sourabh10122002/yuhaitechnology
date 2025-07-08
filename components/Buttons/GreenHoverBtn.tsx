import React from "react";

interface Props{
    text: string
}

const GreenHoverBtn: React.FC<Props> = ({text}) => {
  return (
    <button className="md:px-7 px-6 py-2 text-sm  md:py-[10px] text-gray-700 text-[16px] rounded-3xl font-semibold shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:bg-[var(--btn-color)] hover:text-white cursor-pointer transition-all">
      {text}
    </button>
  );
};

export default GreenHoverBtn;
