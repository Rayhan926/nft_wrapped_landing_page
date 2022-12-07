import SiteLogo from "@components/SiteLogo";
import SocialIcons from "@components/SocialIcons";
import { navLinks } from "@config/constants";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-[50px] pt-[38px] absolute top-0 left-0 w-full z-[9999]">
      <div className="flex justify-between items-center">
        <SiteLogo />

        <nav className="flex items-center gap-11">
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

        <div className="flex gap-7">
          <SocialIcons />

          {/** Connect Wallet Button --Start-- */}
          <button className="h-[46px] rounded-full flex items-center px-[50px] connect_wallet_gradient_text">
            <span>Connect Wallet</span>
          </button>
          {/** Connect Wallet Button --End-- */}
        </div>
      </div>
    </header>
  );
};

export default Header;
