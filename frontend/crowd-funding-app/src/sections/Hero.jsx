import { downloadPng } from "../assets/icons";
import TokenLaunchCard from "../components/TokenLaunchCard";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#0E0E18] h-4/5  text-white pr-6 md:pr-12 pl-6 md:pl-28 pt-24 pb-20">
      <div className="flex flex-col md:w-1/2 space-y-6">
        <h1 className="text-canaryYellow-0 text-3xl md:text-5xl font-bold tracking-wider md:leading-normal">
          Empowering Coffee&apos;s <br />
          Future
        </h1>

        <p className="text-xl md:text-4xl my-20 ">
          WAGA tokenizes coffee on blockchain, ensuring transparency, supporting
          farmers, and connecting global buyers.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
          <button className="inline-flex items-center border-2 space-x-5 border-white rounded-md py-3 px-4">
            <img
              src={downloadPng}
              className="object-contain w-6 mr-4"
              alt="Download Icon"
            />
            Downlad White Paper
          </button>
          <button className="bg-canaryYellow-0 text-cinder-0 rounded-lg px-6 py-3 font-semibold">
            SUPPORT US
          </button>
        </div>
      </div>
      <TokenLaunchCard />
    </div>
  );
};

export default Hero;
