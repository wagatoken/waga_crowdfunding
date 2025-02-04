import { twoCoffeeBeans } from "../assets/icons";
const WagasOffering = () => {
  return (
    <div className=" bg-cinder-0 pt-12 font-sans font-semibold ">
      <div className="flex-col space-y-12  h-screen">
        <div className=" flex justify-center ">
          <div className="text-7xl text-canaryYellow-0 font-dela  indent-12">
            WAGA&apos;s
            <img
              src={twoCoffeeBeans}
              alt="Two Coffee Beans"
              className="w-20 inline"
            />
            <br />
            OFFERING
          </div>
        </div>

        <div className="h-3/5 flex justify-center items-center">
          <div className="bg-[#144939] w-64 border-4 self-center h-5/6 mr-[-50px] border-black shadow-md rounded-3xl pt-10 pr-[50px] pl-5 text-center">
            <p className="text-canaryYellow-0 text-3xl mb-4 ">
              Farm to cup Tracabliity
            </p>
            <p className="text-white text-2xl ">
              Allows stackholders to trace coffee&apos;s jorney
            </p>
          </div>
          <div className="bg-[#144939] w-64 border-4 h-full border-black shadow-md rounded-3xl z-20 text-center p-10">
            <p className="text-canaryYellow-0 text-3xl mb-5 ">
              Instant Settlements
            </p>
            <p className="text-white text-2xl">
              Ensures real-through smart contract for fast and secure
              transaction
            </p>
          </div>
          <div className="bg-[#144939] w-64 border-4 self-center h-5/6 ml-[-50px] pl-[50px] pt-10 border-black shadow-md rounded-3xl text-center">
            <p className="text-canaryYellow-0 text-3xl mb-4 ">
              Direct Market Access
            </p>
            <p className="text-white text-2xl">
              Farmers are able to global market directly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WagasOffering;
