/* eslint-disable @next/next/no-img-element */
import Header from "@components/Header";
import Image from "next/image";
import React from "react";

const HeroSction = () => {
  return (
    <section className="relative">
      <Header />
      <Image
        width={1713 * 2}
        height={1552 * 2}
        src="/img/hero-bg.png"
        className="w-full hidden md:block"
        alt="hero-bg"
      />

      <div className="md:absolute container inset-0 flex flex-col items-center pt-[140px] bg-[url('/img/hero_mobile_bg.svg')] bg-bottom sm:bg-position-70 pb-[550px] md:pb-0 md:bg-[url('/')] bg-cover bg-no-repeat">
        <h1 className="max-w-[920px] text-center text-[72px] leading-[72px] lg:text-[144px] lg:leading-[132px] tracking-[-0.04em] font-[900]">
          Your 2022 NFT Wrapped
        </h1>
        <p className="text-center mt-14 text-[#FFF9F9]/80 font-medium max-w-[530px] text-lg leading-[24px]">
          Whether you minted your first NFT or are a seasoned veteran, everyone
          has a story from the year that changed NFTs forever. Let’s see how
          your year went.
        </p>

        <button className="mt-9  px-20 py-3 rounded-full font-bold __lets_go_btn w-[90%] mx-auto sm:w-auto">
          Let&apos;s go!
        </button>
      </div>
    </section>
  );
};

export default HeroSction;
