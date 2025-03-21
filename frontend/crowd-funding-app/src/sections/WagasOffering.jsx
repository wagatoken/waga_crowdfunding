import { twoCoffeeBeans } from "../assets/icons";

const WagasOffering = () => {
  return (
    <div className="bg-[#0f2c23] pt-12 h-screen font-sans font-semibold flex justify-center">
      <div className="max-w-screen-lg w-full flex flex-col space-y-12">
        {/* Title Section */}
        <div className="flex justify-center">
          <div className="text-4xl md:text-7xl text-canaryYellow-0 font-dela text-center md:indent-12">
            WAGA&apos;s
            <img
              src={twoCoffeeBeans}
              alt="Two Coffee Beans"
              className="w-16 md:w-20 inline mx-2"
            />
            <br />
            OFFERING
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0">
          {/* Card 1: Farm to Cup */}
          <div className="bg-[#144939] w-full md:w-64 self-center h-auto md:h-5/6 md:mr-[-50px] border-2 border-black shadow-md rounded-3xl pt-10 pr-5 md:pr-[50px] pl-5 text-center">
            <p className="text-canaryYellow-0 text-3xl mb-4">
              Farm to Cup Traceability
            </p>
            <p className="text-white text-2xl">
              Allows stakeholders to trace coffee&apos;s journey.
            </p>
          </div>

          {/* Card 2: Instant Settlements */}
          <div className="bg-[#144939] w-full md:w-64 h-auto md:h-full border-2 border-black shadow-md rounded-3xl z-20 text-center p-10">
            <p className="text-canaryYellow-0 text-3xl mb-5">
              Instant Settlements
            </p>
            <p className="text-white text-2xl">
              Ensures real-time smart contracts for fast and secure
              transactions.
            </p>
          </div>

          {/* Card 3: Direct Market Access */}
          <div className="bg-[#144939] w-full md:w-64 self-center h-auto md:h-5/6 md:ml-[-50px] pl-5 md:pl-[50px] border-2 border-black pt-10 shadow-md rounded-3xl text-center">
            <p className="text-canaryYellow-0 text-3xl mb-4">
              Direct Market Access
            </p>
            <p className="text-white text-2xl">
              Farmers can access the global market directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WagasOffering;
