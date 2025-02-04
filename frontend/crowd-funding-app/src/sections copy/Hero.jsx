import { useActiveAccount, useConnectModal } from "thirdweb/react";
import { downloadPng } from "../assets/icons";
import { client } from "../client";
import { wallets } from "../client";
const Hero = () => {
  const { connect } = useConnectModal();
  const account = useActiveAccount();
  return (
    <div className="flex bg-[#11121A] h-screen text-white pr-12 pl-28 pt-10">
      <div>
        <h1 className="text-[#FBFF3A] text-5xl font-bold tracking-wider leading-normal ">
          Empowering Coffee&apos;s <br />
          Future
        </h1>

        <p className="text-3xl my-6 ">
          WAGA tokenizes coffee on blockchain, ensuring transparency, supporting
          farmers, and connecting global buyers.
        </p>
        <div className="flex space-x-4">
          <button className=" inline-flex border-2 space-x-5 border-white rounded-md py-3 px-4">
            <img src={downloadPng} className="object-contain w-6 mr-4" />
            Downlad White Paper
          </button>
          <button className="bg-[#FBFF3A] text-black rounded-lg px-6 font-semibold">
            SUPPORT US
          </button>
        </div>
      </div>
      <div className="flex justify-center w-5/6 ">
        <div className="bg-black text-white h-2/5 w-2/3 rounded-2xl py-8 px-6 ">
          <h1 className="text-2xl font-bold ml-3">INITIAL TOKEN LAUNCH</h1>
          <p className="text-sm font-light ml-4">
            Support WAGA By Purchasing some WGTN
          </p>

          <div className="text-[#FBFF3A] mt-5 font-ligt">
            <p>Connect your wallet</p>
            <p> Swap Some ETH into WGTN</p>
          </div>
          <div className="mt-8">
            <button className="block bg-[#F9E727] text-[#11121A]  font-bold p-2 rounded-lg text-nowrap text-sm w-11/12">
              SUPPORT US {">>"}
            </button>
            <button
              disabled={!!account}
              className="block bg-[#1A1B25] text-white mt-5 rounded-lg w-11/12 p-3 text-xs font-bold"
              onClick={() => connect({ client, wallets, size: "compact" })}
            >
              {account ? "CONNECTED" : "CONNECT WALLET >>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
