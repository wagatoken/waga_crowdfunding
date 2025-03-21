import StepCard from "../components/StepCard";
import { twoCoffeeBeans } from "../assets/icons";
import { ConnectButton } from "thirdweb/react";
import { client } from "../client";
import { wallets } from "../client";

const HowToBuy = () => {
  return (
    <div className="min-h-screen bg-[#0f2c23] flex justify-center items-center py-10 px-6 md:px-0">
      <div className="w-full md:w-2/3 flex flex-col ">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row h-2/5 gap-6">
          {/* "HOW TO BUY?" Box */}
          <div className="w-full md:w-3/5 bg-[#144939] rounded-3xl text-canaryYellow-0 font-dela text-6xl md:text-7xl flex justify-center items-center p-10 text-center md:text-left">
            <section>HOW TO BUY?</section>
          </div>
          {/* Coffee Beans Image */}
          <div className="w-full md:flex-1 bg-[#144939]  rounded-3xl flex justify-center items-center">
            <img
              src={twoCoffeeBeans}
              alt="Two Coffee Beans"
              className="w-44 md:w-56"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row h-3/5 gap-6 mt-6">
          {/* Left Text Section */}
          <div className="flex-1 flex flex-col items-center gap-6">
            <div className="bg-[#144939]  rounded-3xl text-white text-sm md:text-base p-10 leading-relaxed w-full text-center md:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </div>
            <div>
              <ConnectButton
                client={client}
                wallets={wallets}
                connectModal={{ title: "Connecting to WAGA" }}
                connectButton={{
                  label: "Connect Wallet",
                  className:
                    "!bg-canaryYellow-0 !text-cinder-0 !py-10 !px-20  !text-2xl !leading-none !tracking-wide !rounded-xl !flex !items-center !justify-center ", // py-2 mt-4 w-full bg-canaryYellow-0  rounded-full border-9 text-3xl
                }}
              />
            </div>
          </div>

          {/* Steps Section */}
          <div className="w-full md:w-2/3 bg-[#144939] rounded-3xl p-6">
            <StepCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
