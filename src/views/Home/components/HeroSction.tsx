/* eslint-disable @next/next/no-img-element */
import Header from "@components/Header";
import React from "react";

const HeroSction = () => {
  return (
    <section className="relative">
      <Header />
      <img src="/img/hero-bg.png" className="w-full" alt="hero-bg" />

      <div className="absolute inset-0 flex flex-col items-center pt-[140px]">
        <h1 className="max-w-[920px] text-center text-[144px] leading-[132px] tracking-[-0.04em] font-[900]">
          Your 2022 NFT Wrapped
        </h1>
        <p className="text-center mt-14 text-[#FFF9F9]/80 font-medium max-w-[530px] text-lg leading-[24px]">
          Whether you minted your first NFT or are a seasoned veteran, everyone
          has a story from the year that changed NFTs forever. Let’s see how
          your year went.
        </p>

        <button className="mt-9  px-20 py-3 rounded-full font-bold __lets_go_btn">
          Let&apos;s go!
        </button>
      </div>
    </section>
  );
};

export default HeroSction;
