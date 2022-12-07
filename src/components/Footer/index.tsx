import SiteLogo from "@components/SiteLogo";
import SocialIcons from "@components/SocialIcons";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-[250px]">
      {/** Footer Top --Start-- */}
      <div className="container">
        <div className="__footer_top rounded-[40px] flex items-center px-11 py-9 gap-8 bg-[url('/img/footer_top_bg.png')] bg-contain bg-bottom">
          <h2 className="text-[50px] font-black">Your year is worth sharing</h2>
          <p className="text-lg opacity-80 ml-auto">
            Share NFT Wrapped with your friends!
          </p>
          <button className="__card_share_btn m-0 py-2.5">
            Share with friends
          </button>
        </div>
      </div>
      {/** Footer Top --End-- */}
      {/** Footer Bottom --Start-- */}
      <div className="container mt-11">
        <div className="border-t border-white/10 py-10 flex justify-between">
          <SiteLogo />

          <SocialIcons />
        </div>
      </div>
      {/** Footer Bottom --End-- */}
    </footer>
  );
};

export default Footer;
