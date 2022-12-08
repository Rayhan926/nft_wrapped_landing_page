/* eslint-disable @next/next/no-img-element */
import React from "react";

const Card5 = () => {
  return (
    <>
      <div className="__card w-full md:col-span-2 md:aspect-[10/5] grid grid-cols-1 md:grid-cols-[auto,350px] lg:grid-cols-[auto,500px] xl:grid-cols-[auto,550px] 2xl:grid-cols-[auto,650px] p-0">
        <div className="px-[30px] py-[40px] md:p-10 xl:p-[70px] flex flex-col">
          <h3 className="__card_title_xl tiger_nft_gradient_text leading-[100px] lg:leading-[160px]">
            0.01%
          </h3>
          <p className="__card_title_sm md:mt-3 mb-10 md:mb-0 opacity-80">
            Renga #4213
          </p>

          <h2 className="__card_title_md max-w-[400px] mt-auto">
            Rarest NFT in Collection
          </h2>
          <p className="__card_body_text">
            Out of millions of NFTs, you’ve managed to find a diamond in the
            rough.
          </p>
          <div>
            <button className="__card_share_btn">Share</button>
          </div>
        </div>
        <div>
          <img
            src="/img/tiger_nft.jpg"
            alt="tiger_nft"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Card5;
