
import {
  checkMark,
  doubleAngleBracketsBlack,
  doubleAngleBracketsWhite,
} from "../assets/icons";

const TokenLaunchCard = () => {
  return (
    <div className="flex justify-center w-full md:w-3/6 pt-3">
      <div className="bg-black text-white w-full md:w-2/3 rounded-2xl pt-8 px-6 text-center md:text-left">
        <h1 className="text-2xl font-bold">INITIAL TOKEN LAUNCH</h1>
        <p className="text-sm font-light mt-1">
          Support WAGA By Purchasing some WGTN
        </p>

        <div className="text-[#FBFF3A] mt-5 space-y-2">
          <p className="flex items-center justify-center md:justify-start gap-2">
            <img src={checkMark} className="w-5 h-5" /> Connect your wallet
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <img src={checkMark} className="w-5 h-5" /> Swap Some ETH into WGTN
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <button className="flex items-center justify-center gap-2 bg-[#F9E727] text-[#11121A] font-bold p-3 rounded-lg text-nowrap text-sm w-full">
            SUPPORT US
            <img src={doubleAngleBracketsBlack} className="w-4 h-4" />
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1A1B25] rounded-lg w-full p-3 text-xs font-bold">
            CONNECT WALLET
            <img src={doubleAngleBracketsWhite} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenLaunchCard;
