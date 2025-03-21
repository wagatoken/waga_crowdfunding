import { discord, telegram, twitter } from "../assets/icons";
import { ConnectButton } from "thirdweb/react";
import { useState, useEffect } from "react";
import { client } from "../client";
import { wallets } from "../client";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#0f2c23] text-white w-full relative ">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 md:pr-32 min-[1050px]:pl-24 pt-6">
        <div className="flex items-center">
          <div className="font-dela text-canaryYellow-0 text-4xl mr-4 min-[1085px]:mr-10">
            WAGA
          </div>
          <div className="hidden min-[1010px]:flex space-x-8 font-semibold text-xl">
            <a href="#" className="hover:text-canaryYellow-0">
              Roadmap
            </a>
            <a href="#" className="hover:text-canaryYellow-0">
              Tokenomics
            </a>
            <a href="#" className="hover:text-canaryYellow-0">
              Our Process
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <div className="hidden min-[1010px]:flex space-x-5">
            <img src={telegram} className="w-[30px]" alt="Telegram" />
            <img src={discord} className="w-[30px]" alt="Discord" />
            <img src={twitter} className="w-[30px]" alt="Twitter" />
          </div>
          <div>
            <ConnectButton
              client={client}
              wallets={wallets}
              connectModal={{ title: "Connecting to WAGA" }}
              connectButton={{
                label: "Connect Wallet",
                className:
                  "!bg-canaryYellow-0 !text-cinder-0 !h-10 !p-1 !font-semibold rounded-lg",
              }}
            />
          </div>
          <button
            className="min-[1000px]:hidden text-canaryYellow-0 focus:outline-none text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-cinder-900 bg-opacity-95 backdrop-blur-sm transform transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-6 text-lg font-semibold ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-canaryYellow-0 text-3xl"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <a
          href="#"
          className="text-white hover:text-canaryYellow-0"
          onClick={() => setIsMenuOpen(false)}
        >
          Roadmap
        </a>
        <a
          href="#"
          className="text-white hover:text-canaryYellow-0"
          onClick={() => setIsMenuOpen(false)}
        >
          Tokenomics
        </a>
        <a
          href="#"
          className="text-white hover:text-canaryYellow-0"
          onClick={() => setIsMenuOpen(false)}
        >
          Our Process
        </a>
        <div className="flex space-x-5">
          <img src={telegram} className="w-[30px]" alt="Telegram" />
          <img src={discord} className="w-[30px]" alt="Discord" />
          <img src={twitter} className="w-[30px]" alt="Twitter" />
        </div>
        <ConnectButton
          client={client}
          wallets={wallets}
          connectModal={{ title: "Connecting to WAGA" }}
          connectButton={{
            label: "Connect Wallet",
            className: "!bg-canaryYellow-0 !text-cinder-0 p-2 rounded-lg",
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;
