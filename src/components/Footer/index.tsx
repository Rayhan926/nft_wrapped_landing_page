import SiteLogo from "@components/SiteLogo";
import SocialIcons from "@components/SocialIcons";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-[168px] lg:mt-[250px]">
      {/** Footer Top --Start-- */}
      <div className="container">
        <div className="__footer_top relative rounded-[40px] flex flex-col lg:flex-row lg:justify-between items-center px-8 md:px-11 py-9 gap-8 md:bg-[url('/img/footer_top_bg.png')] bg-no-repeat bg-cover bg-bottom">
          <div className="flex flex-col gap-y-4 2xl:flex-row 2xl:items-center grow">
            <h2 className="text-[50px] leading-[60px] font-black text-center lg:text-left">
              Your year is worth sharing
            </h2>
            <p className="text-2xl opacity-80 2xl:ml-auto text-center lg:text-left">
              Share NFT Wrapped with your friends!
            </p>
          </div>
          <div>
            <button className="__card_share_btn m-0 py-2.5">
              Share with friends
            </button>
          </div>
        </div>
      </div>
      {/** Footer Top --End-- */}
      {/** Footer Bottom --Start-- */}
      <div className="container mt-7 md:mt-11">
        <div className="border-t border-white/10 py-11 md:py-10 flex flex-col items-center md:flex-row gap-10 justify-between">
          <SiteLogo />

          <SocialIcons />
        </div>
      </div>
      {/** Footer Bottom --End-- */}
    </footer>
  );
};

export default Footer;
