import React from "react";

const Card2 = () => {
  return (
    <>
      <div className="__card xl:pb-[80px] bg-[url('/img/card_2_bg.svg')]">
        <h3 className="__card_title_xl">2,022</h3>
        <h2 className="__card_title_md mt-auto">
          Total Number of NFTS in Portfolio
        </h2>
        <p className="__card_body_text">
          That’s right, while you were sweeping floors, we were keeping score!
          Your total NFTs for 2022 is (insert number).
        </p>
        <div>
          <button className="__card_share_btn">Share</button>
        </div>
      </div>
    </>
  );
};

export default Card2;
