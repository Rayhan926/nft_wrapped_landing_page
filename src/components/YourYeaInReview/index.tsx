import React from "react";

const YourYeaInReview = () => {
  return (
    <div className="text-center flex flex-col items-center gap-6 mb-12 lg:mb-16">
      <p className=" text-[28px] lg:text-4xl font-bold">
        Your year in review <span className="lg:hidden">→</span>
      </p>
      <svg
        width="18"
        height="37"
        viewBox="0 0 18 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden lg:block"
      >
        <path
          d="M9 37L17.6603 22H0.339746L9 37ZM7.5 0L7.5 23.5H10.5L10.5 0L7.5 0Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default YourYeaInReview;
