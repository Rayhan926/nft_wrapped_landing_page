/* eslint-disable @next/next/no-img-element */
import React from "react";

const Card8 = () => {
  return (
    <>
      <div className="__card w-full md:col-span-2 md:aspect-[10/6.5] 2xl:aspect-[10/5] grid grid-cols-1 md:grid-cols-2 p-0">
        <div>
          <img
            src="/img/tiger_nft.jpg"
            alt="tiger_nft"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-[30px] py-[40px] md:p-10 2xl:p-[70px] flex flex-col">
          <h3 className="__card_title_xl tiger_nft_gradient_text leading-[100px] lg:leading-[160px]">
            3 Years
          </h3>
          <p className="__card_title_sm mt-5 opacity-80">Renga #4213</p>

          <h2 className="__card_title_md mt-7 md:mt-[73px]">Diamond Hands</h2>
          <p className="__card_body_text">
            While everyone was flipping floors or selling too early, you found a
            project you really connected with! Or you’re just left holding a bag
            you can’t get rid of. Either way, (insert the amount of time) is a
            great achievement! Be proud of yourself. HODL on!
          </p>
          <div>
            <button className="__card_share_btn">Share</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card8;
