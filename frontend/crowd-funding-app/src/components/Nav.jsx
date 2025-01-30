import { discord, telegram, twitter } from "../assets/icons/";
import { ConnectButton } from "thirdweb/react";
import { useState } from "react";
import { client } from "../client";
import { wallets } from "../client";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-cinder-0 text-white w-full ">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 indent-16">
        <div className="flex items-center space-x-10">
          <div className="font-dela text-canaryYellow-0 text-4xl">WAGA</div>
          <div className="hidden md:flex space-x-10 font-semibold text-xl">
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
          <div className="hidden md:flex space-x-5">
            <img
              src={telegram}
              className="object-contain w-[30px]"
              alt="Telegram"
            />
            <img
              src={discord}
              className="object-contain w-[30px]"
              alt="Discord"
            />
            <img
              src={twitter}
              className="object-contain w-[30px]"
              alt="Twitter"
            />
          </div>
          <div className="indent-0 hidden lg:flex">
            <ConnectButton
              client={client}
              wallets={wallets}
              connectModal={{ title: "Connecting to WAGA" }}
              connectButton={{
                label: "Connect Wallet",
                className: "!bg-canaryYellow-0  !text-cinder-0 ",
              }}
            />
          </div>

          <button
            className="md:hidden text-canaryYellow-0 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-start space-y-4 px-6 py-4 bg-cinder-0">
          <a
            href="#"
            className="text-lg font-semibold hover:text-canaryYellow-0"
          >
            Roadmap
          </a>
          <a
            href="#"
            className="text-lg font-semibold hover:text-canaryYellow-0"
          >
            Tokenomics
          </a>
          <a
            href="#"
            className="text-lg font-semibold hover:text-canaryYellow-0"
          >
            Our Process
          </a>
          <div className="flex space-x-5 mt-4">
            <img
              src={telegram}
              className="object-contain w-[30px]"
              alt="Telegram"
            />
            <img
              src={discord}
              className="object-contain w-[30px]"
              alt="Discord"
            />
            <img
              src={twitter}
              className="object-contain w-[30px]"
              alt="Twitter"
            />
          </div>
          <ConnectButton
            client={client}
            wallets={wallets}
            connectModal={{ title: "Connecting to WAGA" }}
            connectButton={{
              label: "Connect Wallet",
              className: "!bg-canaryYellow-0  !text-cinder-0 !w-full ",
            }}
          />
        </div>
      )}
    </nav>
  );
};

export default Nav;
