import SiteLogo from "@components/SiteLogo";
import SocialIcons from "@components/SocialIcons";
import { navLinks } from "@config/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { use100vh } from "react-div-100vh";

const HeaderMobile = () => {
  const height = use100vh();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const overlayClickHandler = (e: any) => {
    if (e.target.id === "mobileMenuOverlay") {
      setIsOpenMobileMenu(false);
    }
  };

  useEffect(() => {
    if (isOpenMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpenMobileMenu]);

  return (
    <div className="lg:hidden">
      <button
        style={{
          background:
            "linear-gradient(51.1deg, #1624EE 4.21%, #F352D2 46.29%, #F8C93A 91.08%), #FFFFFF",
        }}
        onClick={() => setIsOpenMobileMenu(true)}
        className="w-11 h-11 rounded-full flex items-center justify-center"
      >
        <FiMenu size={18} />
      </button>

      <div
        onClick={overlayClickHandler}
        id="mobileMenuOverlay"
        style={{ height: height || "100vh" }}
        className={`fixed top-0 left-0 w-full bg-black/50 z-[9999999] duration-100 ${
          isOpenMobileMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none delay-300"
        }`}
      >
        <div
          className={`w-[80%] bg-dark h-full duration-300 ${
            isOpenMobileMenu ? "translate-x-0 delay-200" : "-translate-x-full"
          }`}
        >
          <Menus />
        </div>
      </div>
    </div>
  );
};
export default HeaderMobile;

const Menus = () => {
  return (
    <nav className="h-full flex flex-col py-6">
      <div className="max-w-[180px] mb-4 ml-7">
        <SiteLogo />
      </div>
      <ul className="flex flex-col lg:flex-row lg:items-center">
        {navLinks.map(({ url, text }, i) => (
          <li key={i}>
            <Link
              className="text-[#FFF9F9] opacity-80 hover:opacity-100 duration-200 px-7 hover:bg-white/5 py-4 block font-medium font-inter"
              href={url}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto space-y-6 px-7">
        <SocialIcons />
        <button className="h-[46px] rounded-full flex items-center px-[50px] connect_wallet_gradient_text justify-center w-full">
          <span>Connect Wallet</span>
        </button>
      </div>
    </nav>
  );
};
