import Image from "next/image";
import React from "react";

const Card3 = () => {
  return (
    <>
      <div className="__card pb-[80px] bg-[url('/img/card_3_bg.svg')]">
        {/** Circular Nft --Start-- */}
        <div className="absolute top-10 -right-8 md:right-0 md:top-0 max-w-[230px] md:max-w-[auto]">
          <Image
            src={"/img/circular_nft.png"}
            width={400}
            height={400}
            alt="circular_nft"
          />
        </div>
        {/** Circular Nft --End-- */}
        <h3 className="__card_title_lg relative z-[2]">2.5Ξ</h3>
        <p className="__card_title_sm">Renga #4213</p>
        <h2 className="__card_title_md mt-auto max-w-[500px] relative z-[2]">
          Most Valuable NFT You Own
        </h2>
        <p className="__card_body_text">
          Even if all your other NFTs were rugpulls and duds, you had one NFT
          that stood out!
        </p>
        <div>
          <button className="__card_share_btn">Share</button>
        </div>
      </div>
    </>
  );
};

export default Card3;
