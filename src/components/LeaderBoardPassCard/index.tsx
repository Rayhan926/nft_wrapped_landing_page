import React from "react";

const LeaderBoardPassCard = () => {
  return (
    <div className="__price_card bg-[url('/img/leaderboard_pass_bg.svg')] bg-[#F6F6F6]">
      <h3
        style={
          {
            background:
              "linear-gradient(87.41deg, #9A5BEB 0%, #F352D2 100%), #FFFFFF",
            backgroundClip: "text",
            "-webkit-background-clip": "text",
          } as any
        }
        className="__price_card_title text-transparent"
      >
        Leaderboard Pass
      </h3>

      <p className="text-black/80 __price_card_body_text">
        Access the global leaderboard & see where you rank! PLus, you get a free
        mint of your NFT Wrapped
      </p>

      <div className="mt-auto">
        <button
          style={{
            background:
              "linear-gradient(87.41deg, #1624EE 0%, #F352D2 48.44%, #F8C93A 100%), #FFFFFF",
            boxShadow:
              "16px 10px 24px rgba(248, 191, 71, 0.2), 0px 4px 10px rgba(244, 88, 203, 0.4), -10px 7px 13px rgba(41, 41, 236, 0.5), inset 0px -4px 4px rgba(255, 255, 255, 0.25), inset 0px 4px 6px rgba(0, 0, 0, 0.25)",
          }}
          className="font-bold text-center rounded-full px-[110px] py-[17.5px] "
        >
          Buy Now
        </button>

        <p className="__price_card_subtitle">0.06Ξ</p>
      </div>
    </div>
  );
};

export default LeaderBoardPassCard;
