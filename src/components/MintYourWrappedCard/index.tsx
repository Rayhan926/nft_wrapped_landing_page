import React from "react";

const MintYourWrappedCard = () => {
  return (
    <div className="__price_card bg-[url('/img/mint_your_wrapped_bg.svg')]">
      <h3 className="__price_card_title">Mint Your Wrapped</h3>

      <p className="text-white/80 __price_card_body_text">
        Mint your Wrapped into an NFT for future access & utility!
      </p>

      <div className="mt-auto">
        <button
          style={{
            boxShadow:
              "16px 10px 24px rgba(248, 191, 71, 0.2), 0px 4px 10px rgba(244, 88, 203, 0.4), -10px 7px 13px rgba(41, 41, 236, 0.5), inset 0px -4px 4px rgba(255, 255, 255, 0.25), inset 0px 4px 6px rgba(0, 0, 0, 0.25)",
          }}
          className="bg-white text-black font-bold text-center rounded-full px-[110px] py-[17.5px]"
        >
          Mint Now
        </button>

        <p className="__price_card_subtitle">0.02Ξ</p>
      </div>
    </div>
  );
};

export default MintYourWrappedCard;
