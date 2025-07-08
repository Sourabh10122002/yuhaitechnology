
import { cardData } from "@/constants/cardsData";
import React from "react";
import Cards from "./Cards";

const CardSection: React.FC = () => {
  return (
    <section className="flex flex-wrap">
      <section className="flex flex-col lg:flex-row w-full">
        {cardData.map((val, index) => (
          <Cards key={index} title={val.title} value={val.value} />
        ))}
      </section>
    </section>
  );
};

export default CardSection;
