import { useActiveAccount, useConnectModal } from "thirdweb/react";
import { downloadPng } from "../assets/icons";
import TokenLaunchCard from "../components/TokenLaunchCard";

const Hero = () => {
  const { connect } = useConnectModal();
  const account = useActiveAccount();

  return (
    <div className="flex flex-col lg:flex-row bg-[#0f2c23] text-white px-6 sm:px-12 lg:px-28 pt-24 relative lg:h-[75vh]">
      {/* Left Section */}
      <div className="flex flex-col lg:w-1/2 space-y-6 text-center lg:text-left items-center lg:items-start">
        <h1 className="text-[#FBFF3A] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider leading-snug lg:leading-normal">
          Empowering Coffee&apos;s <br className="hidden lg:block" /> Future
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-10 max-w-lg">
          WAGA tokenizes coffee on blockchain, ensuring transparency, supporting
          farmers, and connecting global buyers.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">

          <button 
            className="inline-flex items-center border-2 gap-3 sm:gap-4 border-yellow-100 rounded-md py-3 px-5 hover:bg-[#14392d] active:scale-95 transition-all"
            onClick={() => window.open('https://hackmd.io/@yl2u-hpeQU-iSu-PwJJHUw/r1HuiikM1g', '_blank')}
          >
            <img
              src={downloadPng}
              className="object-contain w-5 "
              alt="Download Icon"
            />
            Download White Paper
          </button>
          <button className="bg-[#FBFF3A] text-black rounded-md px-5 sm:px-6 py-3 font-semibold hover:bg-yellow-200 transition">
            SUPPORT US
          </button>
        </div>
      </div>
      {/* Right Section (TokenLaunchCard) */}
      <div className="flex justify-center lg:justify-end w-full lg:w-1/2  mt-20 mb-10">
        <TokenLaunchCard connect={connect} account={account} />
      </div>
    </div>
  );
};

export default Hero;
