import React from "react";

const Card10 = () => {
  return (
    <div className="__card xl:px-12 lg:aspect-[3/5] xl:aspect-[3/4.5] bg-cover bg-[url('/img/card_10_bg.svg')]">
      <h2 className="__card_title_md">Total Gas Spent in 2022</h2>
      <p className="__card_body_text">
        Wow! PoS couldn’t have come sooner could it? With what you spent on gas
        this year you could have bought (Tesla, trip to dubai, some fun NFT
        project.)
      </p>
      <div>
        <button className="__card_share_btn">Share</button>
      </div>

      <h3 className="__card_title_lg lg:text-[100px] lg:leading-[112px] 2xl:text-[130px] 2xl:leading-[132px] mt-auto">
        1000Ξ
      </h3>
    </div>
  );
};

export default Card10;
