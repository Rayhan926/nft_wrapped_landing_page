import React from "react";

const Card1 = () => {
  return (
    <>
      <div className="__card xl:pb-[90px] bg-[url('/img/card_1_bg.svg')]">
        <h2 className="__card_title_md">Overall Portfolio Return</h2>
        <p className="__card_body_text">
          What bear market? While everyone was getting rekt in stocks and
          crypto, you managed to earn those gains in the NFT market. Now tell us
          what sniper tool you used!{" "}
        </p>
        <div>
          <button className="__card_share_btn">Share</button>
        </div>

        <h3 className="__card_title_xl mt-auto">+300%</h3>
      </div>
    </>
  );
};

export default Card1;
