import LeaderBoardPassCard from "@components/LeaderBoardPassCard";
import MintYourWrappedCard from "@components/MintYourWrappedCard";
import React from "react";

const LeaderboardAccessSection = () => {
  return (
    <section className="pt-[177px] bg-[url('/img/blury_lights.svg)] bg-contain ">
      <div className="container">
        <h2 className="text-center text-[48px] leading-[54px] xl:text-[96px] xl:leading-[115px] font-black tracking-[-0.04em] max-w-[1100px] mx-auto">
          <span className="xl:hidden">
            Mint Your Wrapped & Get Leaderboard Access
          </span>
          <span className="hidden xl:inline-block">
            Save Your Wrapped & Get Leaderboard Access
          </span>
        </h2>

        <div className="mt-[60px] flex-col lg:flex-row items-center flex justify-center gap-5">
          <MintYourWrappedCard />
          <LeaderBoardPassCard />
        </div>
      </div>
    </section>
  );
};

export default LeaderboardAccessSection;
