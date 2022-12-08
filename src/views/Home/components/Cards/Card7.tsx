import React from "react";

const Card7 = () => {
  return (
    <>
      {" "}
      <div className="__card xl:pb-[80px] xl:pt-[100px] bg-[url('/img/card_6_bg.svg')]">
        <h3 className="__card_title_xl">-99.9%</h3>
        <h2 className="__card_title_md max-w-[400px] mt-auto">
          You’ve Been Rugged!
        </h2>
        <p className="__card_body_text">
          So you’ve been rugged. Welcome to the club! The rugged support group
          meets every day on Twitter. You’ll recognize your fellow rugged mates
          by their slogan, “GM.” May your 2023 be filled with fewer rugs.
        </p>
        <div>
          <button className="__card_share_btn">Share</button>
        </div>
      </div>
    </>
  );
};

export default Card7;
