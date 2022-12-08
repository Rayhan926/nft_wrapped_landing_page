import React from "react";

const LeaderboardPassTransparentCard = () => {
  return (
    <div className="__price_card !bg-cover bg-[url('/img/leaderboardPassTransparentCardBg.svg')]">
      <h3 className="__price_card_title">Leaderboard Pass</h3>

      <p className="text-white/80 __price_card_body_text">
        Access the global leaderboard & see where you rank!
      </p>

      <div className="mt-auto w-full">
        <button
          style={{
            boxShadow:
              "16px 10px 24px rgba(248, 191, 71, 0.2), 0px 4px 10px rgba(244, 88, 203, 0.4), -10px 7px 13px rgba(41, 41, 236, 0.5), inset 0px -4px 4px rgba(255, 255, 255, 0.25), inset 0px 4px 6px rgba(0, 0, 0, 0.25)",
          }}
          className="bg-white text-black font-bold text-center rounded-full w-full max-w-[295px] py-[17.5px]"
        >
          Mint Now
        </button>

        <p className="__price_card_subtitle">0.05Ξ</p>
      </div>
    </div>
  );
};

export default LeaderboardPassTransparentCard;
