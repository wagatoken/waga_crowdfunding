"use client";
import Link from "next/link";
import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import TokenLaunch from "./TokenLaunch";
import { Button } from "./ui/button";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleDownloadWhitepaper = () => {
    window.open("https://hackmd.io/@yl2u-hpeQU-iSu-PwJJHUw/r1HuiikM1g", "_blank");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="home" className="bg-primary overflow-hidden pb-12 pt-28 lg:pb-20 lg:pt-35">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-8 xl:gap-32.5">
          {/* Left Side - Heading and Description */}
          <div className="md:w-1/2">
            <h1 className="mb-5 pr-16 text-3xl font-bold text-[#D7FF00] xl:text-5xl xl:leading-tight">
              Empowering Coffee's Future
            </h1>
            <p className="text-white font-medium leading-loose">
              WAGA tokenizes coffee on blockchain, ensuring transparency, supporting farmers, and connecting global buyers.
            </p>

            <div className="mt-10 flex gap-4">
                <Button
                  aria-label="Download Whitepaper"
                  onClick={handleDownloadWhitepaper}
                  className="bg-[#D7FF00] text-primary flex items-center gap-2 rounded-md hover:bg-[#c1e600] transition-colors duration-300"
                >
                  <FaFileDownload className="w-5 h-5" />
                  Download Whitepaper
                </Button>
              
                <Button
                  aria-label="Support WAGA"
                  className="text-[#D7FF00] flex items-center gap-2 rounded-md border border-[#D7FF00] hover:bg-[#D7FF00] hover:text-primary transition-all duration-300"
                >
                  <FaHandHoldingUsd className="w-5 h-5" />
                  Support WAGA
                </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="animate_right">
            <TokenLaunch/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
