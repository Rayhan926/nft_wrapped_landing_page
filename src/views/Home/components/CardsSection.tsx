/* eslint-disable @next/next/no-img-element */
import YourYeaInReview from "@components/YourYeaInReview";
import Image from "next/image";
import React from "react";
import Card1 from "./Cards/Card1";
import Card10 from "./Cards/Card10";
import Card11 from "./Cards/Card11";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import Card5 from "./Cards/Card5";
import Card6 from "./Cards/Card6";
import Card7 from "./Cards/Card7";
import Card8 from "./Cards/Card8";
import Card9 from "./Cards/Card9";

const CardsSection = () => {
  return (
    <section className="-mt-[230px] relative z-[5] lg:-mt-[200px]">
      <div className="container">
        <YourYeaInReview />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-4 xl:gap-10">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
          <Card6 />
          <Card7 />
          <Card8 />
        </div>

        {/** 3 Columns Grid --Start-- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-4 xl:gap-10 mt-5 lg:mt-4 xl:mt-10">
          <Card9 />
          <Card10 />
          <Card11 />
        </div>
        {/** 3 Columns Grid --End-- */}
      </div>
    </section>
  );
};

export default CardsSection;
