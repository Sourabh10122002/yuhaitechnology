import React from "react";

interface Props {
  text: string;
}

const GreenLeftHover: React.FC<Props> = ({ text }) => {
  return (
    <div className="cta">
      <span>{text}
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </span>
    </div>
  );
};

export default GreenLeftHover;
