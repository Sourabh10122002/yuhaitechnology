
import React from "react";

interface Props {
    text: string
}

const GreenBtn: React.FC<Props> = ({text}) => {
  return (
    <button className="px-6 py-2 bg-[var(--btn-color)] text-white rounded-[8px] text-base font-bold mb-3">
      {text}
    </button>
  );
};

export default GreenBtn;
