import LeaderBoardPassCard from "@components/LeaderBoardPassCard";
import MintYourWrappedCard from "@components/MintYourWrappedCard";
import React from "react";

const LeaderboardAccessSection = () => {
  return (
    <section className="pt-[177px] bg-[url('/img/blury_lights.svg)] bg-contain ">
      <div className="container">
        <h2 className="text-center text-[96px] leading-[115px] font-black tracking-[-0.04em] max-w-[1100px] mx-auto">
          Save Your Wrapped & Get Leaderboard Access
        </h2>

        <div className="mt-[60px] flex justify-center gap-5">
          <MintYourWrappedCard />
          <LeaderBoardPassCard />
        </div>
      </div>
    </section>
  );
};

export default LeaderboardAccessSection;
