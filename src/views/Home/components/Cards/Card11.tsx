import React from "react";

const Card11 = () => {
  return (
    <div className="__card xl:px-12 lg:aspect-[3/5] xl:aspect-[3/4.5] bg-cover bg-[url('/img/card_11_bg.svg')]">
      <h2 className="__card_title_md">Total NFTs Sold in 2022</h2>
      <p className="__card_body_text">
        In total, you sold (insert number) of NFTs this year. We hope you put
        that capital to good work!
      </p>
      <div>
        <button className="__card_share_btn">Share</button>
      </div>

      <h3 className="__card_title_lg lg:text-[100px] lg:leading-[112px] 2xl:text-[130px] 2xl:leading-[132px] mt-auto">
        365
      </h3>
    </div>
  );
};

export default Card11;
