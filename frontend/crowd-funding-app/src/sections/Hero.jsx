import { useActiveAccount, useConnectModal } from "thirdweb/react";
import { downloadPng } from "../assets/icons";
import { client } from "../client";
import { wallets } from "../client";
import TokenLaunchCard from "../components/TokenLaunchCard";

const Hero = () => {
  const { connect } = useConnectModal();
  const account = useActiveAccount();
  
  return (
    <div className="flex flex-col md:flex-row bg-[#0E0E18] min-h-screen text-white px-6 md:px-28 pt-24 pb-20">
      {/* Left Section */}
      <div className="flex flex-col md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-[#FBFF3A] text-3xl md:text-5xl font-bold tracking-wider md:leading-normal">
          Empowering Coffee&apos;s <br /> Future
        </h1>

        <p className="text-xl md:text-4xl mt-6 md:mt-10">
          WAGA tokenizes coffee on blockchain, ensuring transparency, supporting
          farmers, and connecting global buyers.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-6">
          <button className="inline-flex items-center border-2 gap-4 border-white rounded-md py-3 px-6">
            <img src={downloadPng} className="object-contain w-6" alt="Download Icon" />
            Download White Paper
          </button>
          <button className="bg-[#FBFF3A] text-black rounded-lg px-6 py-3 font-semibold">
            SUPPORT US
          </button>
        </div>
      </div>
      {/* Right Section (TokenLaunchCard) */}
      <TokenLaunchCard connect={connect} account={account} />
    </div>
  );
};

export default Hero;
