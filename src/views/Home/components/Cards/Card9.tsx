import React from "react";

const Card9 = () => {
  return (
    <>
      <div className="__card xl:px-12 lg:aspect-[3/5] xl:aspect-[3/4.5] bg-cover bg-[url('/img/card_9_bg.svg')]">
        <h2 className="__card_title_md">Total NFTs Minted in 2022</h2>
        <p className="__card_body_text">
          You’ve been putting in work this year! The total NFTs you minted in
          2022 is (insert number). Will you beat that in 2023?
        </p>
        <div>
          <button className="__card_share_btn">Share</button>
        </div>

        <h3 className="__card_title_lg lg:text-[100px] lg:leading-[112px] 2xl:text-[130px] 2xl:leading-[132px] mt-auto">
          2,212
        </h3>
      </div>
    </>
  );
};

export default Card9;
