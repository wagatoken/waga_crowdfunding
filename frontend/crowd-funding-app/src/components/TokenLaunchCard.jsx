import { useState } from "react";
import { Settings, ChevronDown } from "lucide-react";

function TokenLaunchCard() {
  const [fromAmount, setFromAmount] = useState("0.0");
  const [toAmount, setToAmount] = useState("0.0");

  const handleFromAmountChange = (e) => {
    setFromAmount(e.target.value);
    setToAmount(e.target.value);
  };

  const handleToAmountChange = (e) => {
    setToAmount(e.target.value);
    setFromAmount(e.target.value);
  };

  return (
    <div className=" flex items-center justify-center md:mb-32 shadow-2xl flex-shrink-0 ">
      <div className="bg-[#144939] rounded-3xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-canaryYellow-0 text-2xl font-bold">Buy</h1>
          <button className="text-canaryYellow-0">
            <Settings size={24} />
          </button>
        </div>

        <p className="text-gray-300 mb-4">Swap ETH to WGTN</p>

        {/* From input */}
        <div className="bg-[#0f2c23] rounded-xl p-3 mb-2">
          <label className="text-gray-400 text-sm mb-1 block">From</label>
          <input
            type="text"
            value={fromAmount}
            onChange={handleFromAmountChange}
            className="bg-transparent text-white text-xl w-full focus:outline-none"
          />
        </div>

        {/* Arrow down */}
        <div className="flex justify-center my-2">
          <div className="text-canaryYellow-0">
            <ChevronDown size={24} />
          </div>
        </div>

        {/* To input */}
        <div className="bg-[#0f2c23] rounded-xl p-3 mb-6">
          <label className="text-gray-400 text-sm mb-1 block">To</label>
          <div className="flex justify-between items-center">
            <input
              type="text"
              value={toAmount}
              onChange={handleToAmountChange}
              className="bg-transparent text-white text-xl w-full focus:outline-none"
            />
            <button className="flex items-center text-canaryYellow-0">
              WGTN <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
        </div>

        {/* Buy button */}
        <button className="bg-[#0f2c23] text-canaryYellow-0 w-full py-4 rounded-xl font-bold text-lg hover:bg-[#1b4e3e] transition-colors ">
          Buy
        </button>
      </div>
    </div>
  );
}

export default TokenLaunchCard;
