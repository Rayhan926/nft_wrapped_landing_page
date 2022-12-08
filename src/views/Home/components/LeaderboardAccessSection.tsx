import LeaderboardPassTransparentCard from "@components/LeaderboardPassTransparentCard";
import MintYourWrappedCard from "@components/MintYourWrappedCard";
import WrappedNFTAndLeaderboardPassBundleCard from "@components/WrappedNFTAndLeaderboardPassBundleCard";
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

        <div className="mt-[60px] flex-wrap flex-row items-center flex justify-center gap-5">
          <WrappedNFTAndLeaderboardPassBundleCard />

          <MintYourWrappedCard />
          {/* <LeaderBoardPassCard /> */}
          <LeaderboardPassTransparentCard />
        </div>
      </div>
    </section>
  );
};

export default LeaderboardAccessSection;
