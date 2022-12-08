/* eslint-disable @next/next/no-img-element */
import Header from "@components/Header";
import Image from "next/image";
import React from "react";

const HeroSction = () => {
  return (
    <section className="relative overflow-hidden">
      <Header />
      <Image
        width={1713 * 2}
        height={1552 * 2}
        src="/img/hero_gradient.png"
        className="w-full hidden md:block pointer-events-none"
        alt="hero-bg"
      />
      <Image
        width={1713 * 2}
        height={1552 * 2}
        src="/img/hero_nft_text.png"
        className="w-full hidden md:block absolute inset-0 z-[3] pointer-events-none"
        alt="hero-bg"
      />

      <div className="md:absolute container inset-0 flex flex-col items-center pt-[140px] bg-[url('/img/hero_mobile_bg.svg')] bg-bottom sm:bg-position-70 pb-[550px] md:pb-0 md:bg-[url('/')] bg-cover bg-no-repeat">
        <h1 className="max-w-[920px] relative z-10 text-center text-[72px] leading-[72px] lg:text-[100px] lg:leading-[90px] xl:text-[144px] xl:leading-[132px] tracking-[-0.04em] font-[900]">
          Your 2022 NFT Wrapped
        </h1>
        <p className="text-center relative z-10 mt-14 text-[#FFF9F9]/80 font-medium max-w-[530px] text-lg leading-[24px]">
          Whether you minted your first NFT or are a seasoned veteran, everyone
          has a story from the year that changed NFTs forever. Let’s see how
          your year went.
        </p>

        <button className="mt-9 relative z-10  px-20 py-3 rounded-full font-bold __lets_go_btn w-[90%] mx-auto sm:w-auto">
          Let&apos;s go!
        </button>
      </div>

      <img
        src={"/img/floating-imgs/img-1.svg"}
        alt="img-1"
        className="hidden md:inline absolute top-[11%] left-[3.5%] w-[6.8vw] opacity-40"
      />
      <img
        src={"/img/floating-imgs/img-2.svg"}
        alt="img-1"
        className="hidden md:inline absolute top-[22%] left-[12%] w-[5vw] opacity-20"
      />
      <img
        src={"/img/floating-imgs/img-3.svg"}
        alt="img-1"
        className="hidden md:inline absolute top-[29%] left-[-2%] w-[9vw] opacity-60"
      />
      <img
        src={"/img/floating-imgs/img-4.svg"}
        alt="img-1"
        className="hidden md:inline absolute top-[38%] left-[15%] w-[10vw] opacity-40"
      />
      <img
        src={"/img/floating-imgs/img-5.svg"}
        alt="img-1"
        className="hidden md:inline absolute top-[14%] left-[84%] w-[3.2vw] opacity-40"
      />
      <img
        src={"/img/floating-imgs/img-6.svg"}
        alt="img-1"
        className="hidden md:inline absolute top-[17%] left-[95%] w-[6.6vw] opacity-40"
      />
      <img
        src={"/img/floating-imgs/img-7.svg"}
        alt="img-1"
        className="hidden md:inline absolute top-[28%] left-[84%] w-[9.3vw] opacity-40"
      />
    </section>
  );
};

export default HeroSction;
