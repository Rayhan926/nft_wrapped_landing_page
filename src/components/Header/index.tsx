import HeaderMobile from "@components/HeaderMobile";
import SiteLogo from "@components/SiteLogo";
import SocialIcons from "@components/SocialIcons";
import { navLinks } from "@config/constants";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-5 pt-[30px] lg:px-[50px] lg:pt-[38px] absolute top-0 left-0 w-full z-[9999]">
      <div className="flex justify-between lg:grid lg:grid-cols-3 items-center">
        <div className="max-w-[190px] lg:max-w-[290px]">
          <SiteLogo />
        </div>

        <nav className="items-center gap-11 hidden lg:flex lg:justify-center">
          {navLinks.map(({ text, url }, i) => (
            <Link
              key={i}
              href={url}
              className="text-[#FFF9F9] opacity-80 hover:opacity-100 duration-200 px-1 py-0.5 inline-block font-medium font-inter"
            >
              {text}
            </Link>
          ))}
        </nav>

        <div className="gap-7 hidden lg:flex lg:justify-center">
          <SocialIcons />

          {/** Connect Wallet Button --Start-- */}
          <button className="h-[46px] rounded-full flex items-center px-[50px] connect_wallet_gradient_text">
            <span>Connect Wallet</span>
          </button>
          {/** Connect Wallet Button --End-- */}
        </div>

        <HeaderMobile />
      </div>
    </header>
  );
};

export default Header;
