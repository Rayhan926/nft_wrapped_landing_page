import React from "react";

const MintYourWrappedButton = ({ className = "" }: { className?: string }) => {
  return (
    <button
      className={`h-[46px] rounded-full flex items-center px-[40px] bg-white connect_wallet_gradient_text justify-center ${className}`}
    >
      <span className="font-bold">Mint Your Wrapped</span>
    </button>
  );
};

export default MintYourWrappedButton;
