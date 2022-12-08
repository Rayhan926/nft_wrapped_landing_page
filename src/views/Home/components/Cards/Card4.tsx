import Image from "next/image";
import React from "react";

const Card4 = () => {
  return (
    <>
      <div className="__card xl:pb-[90px] bg-[url('/img/card_4_bg.svg')]">
        <div className="absolute right-5 bottom-[18%] lg:bottom-[32%] max-w-[160px] lg:max-w-[auto]">
          <Image
            src={"/img/circular_nft.png"}
            width={228}
            height={228}
            alt="circular_nft"
          />
        </div>

        <h2 className="__card_title_md max-w-[400px] relative z-[2]">
          Best Single NFT ROI
        </h2>
        <p className="__card_body_text relative z-[2]">
          TO THE MOON! Those are some impressive returns. You should be proud of
          yourself! We are.
        </p>
        <div>
          <button className="__card_share_btn relative z-[2]">Share</button>
        </div>
        <p className="__card_title_sm mt-auto mb-6">Renga #4213</p>
        <h3 className="__card_title_xl">+300%</h3>
      </div>
    </>
  );
};

export default Card4;
