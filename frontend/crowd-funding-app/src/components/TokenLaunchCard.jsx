import {
  checkMark,
  doubleAngleBracketsBlack,
  doubleAngleBracketsWhite,
} from "../assets/icons";
const TokenLaunchCard = () => {
  return (
    <div className="flex justify-center w-3/6 pt-3">
      <div className="bg-black text-white h-[47%]  w-2/3 rounded-2xl pt-8 px-6  ">
        <h1 className="text-2xl font-bold ml-3">INITIAL TOKEN LAUNCH</h1>
        <p className="text-sm font-light ml-4">
          Support WAGA By Purchasing some WGTN
        </p>
        <div className="text-[#FBFF3A] mt-5 font-ligt">
          <p>
            <img src={checkMark} className="inline pr-1" /> Connect your wallet
          </p>
          <p>
            <img src={checkMark} className="inline pr-1" /> Swap Some ETH into
            WGTN
          </p>
        </div>
        <div className="mt-8">
          <button className="block bg-[#F9E727] text-[#11121A]  font-bold p-3 rounded-lg text-nowrap text-sm w-11/12 mb-7">
            SUPPORT US
            <img src={doubleAngleBracketsBlack} className="inline pl-3 " />
          </button>
          <button className="block bg-[#1A1B25] mt-5 rounded-lg w-11/12 p-3 text-xs font-bold">
            CONNECT WALLET
            <img src={doubleAngleBracketsWhite} className="inline pl-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenLaunchCard;
