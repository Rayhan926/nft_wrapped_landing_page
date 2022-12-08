import Image from "next/image";
import React from "react";

const Card6 = () => {
  return (
    <>
      <div className="__card xl:pb-[90px] bg-[url('/img/card_5_bg.svg')]">
        <div className="absolute right-7 bottom-7 lg:right-11 lg:bottom-11 max-w-[125px] lg:max-w-[auto]">
          <Image
            src={"/img/circular_nft_2.png"}
            width={300}
            height={300}
            alt="circular_nft_2"
          />
        </div>

        <h2 className="__card_title_md max-w-[550px]">
          Collection You Own the Most of
        </h2>
        <p className="__card_body_text">
          It’s not often that you find a project that you really believe in. But
          it seems you have found one worthy of (number) of NFTs. The question
          is, are you the biggest supporter? Share with your community and find
          out!
        </p>
        <div>
          <button className="__card_share_btn">Share</button>
        </div>
        <div className="md:translate-y-3 xl:translate-y-6 mt-auto">
          <p className="__card_title_sm">Renga #4213</p>
          <h3 className="__card_title_xl md:my-3 lg:my-5">225</h3>
          <p className="__card_title_sm">NFTs Collected</p>
        </div>
      </div>
    </>
  );
};

export default Card6;
