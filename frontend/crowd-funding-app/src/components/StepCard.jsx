import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const steps = [
  {
    step: 1,
    title: "Choose a Cryptocurrency",
    content:
      "Select the cryptocurrency you will use to exchange for our token. Popular options include Bitcoin (BTC), Ethereum (ETH), or USDT. Ensure your chosen crypto is supported by your wallet and our platform.",
  },
  {
    step: 2,
    title: "Set Up a Crypto Wallet",
    content:
      "If you don’t already have a wallet, create one using platforms like MetaMask, Trust Wallet, or Coinbase Wallet. This wallet will store your tokens securely. Make sure to back up your recovery phrase!",
  },
  {
    step: 3,
    title: "Connect Your Wallet to Our Platform",
    content:
      "Click the 'Connect Wallet' button on our platform. Follow the prompts to link your wallet. Once connected, you’ll see your wallet address displayed at the top of the page.",
  },
  {
    step: 4,
    title: "Swap Your Crypto for Our Token",
    content:
      "Specify the amount of cryptocurrency you want to exchange for our token. Confirm the transaction and pay any associated network fees. Wait for the transaction to be processed.",
  },
  {
    step: 5,
    title: "Verify Your Token Balance",
    content:
      "After the transaction is complete, check your wallet to see your new token balance. You’re now part of our community! If you have any issues, contact our support team.",
  },
];

const StepCard = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        className="relative"
      >
        {steps.map((step) => (
          <SwiperSlide key={step.step}>
            <div className="p-6 md:p-10 text-center md:text-left">
              <div className="text-white font-dela pb-2 text-lg md:text-xl">
                STEP {step.step}:
              </div>
              <div className="text-[#E2FEA5] text-2xl md:text-3xl font-bold pb-2">
                {step.title}
              </div>
              <div className="text-white text-sm md:text-base mb-6 md:mb-10">
                {step.content}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-pagination mt-4"></div>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className=" custom-prev absolute top-1/2 -left-6 md:left-0 transform -translate-y-1/2 text-2xl text-[#E2FEA5]">
        ❮
      </button>
      <button className=" absolute top-1/2 -right-6 md:right-0 transform -translate-y-1/2 text-2xl text-[#E2FEA5]">
        ❯
      </button>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #E2FEA5 !important;
        }
      `}</style>
    </div>
  );
};

export default StepCard;
