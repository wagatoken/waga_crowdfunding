import StepCard from "../components/StepCard";
import { twoCoffeeBeans } from "../assets/icons";
const HowToBuy = () => {
  return (
    <div className="h-screen bg-cinder-0 flex justify-center items-center ">
      <div className=" h-2/3 w-2/3 flex-col ">
        <div className="flex h-2/5 gap-9">
          <div className="w-3/5 bg-[#0F2C23] rounded-3xl text-canaryYellow-0 font-dela text-7xl flex justify-center items-center pl-20">
            <section>HOW TO BUY?</section>
          </div>
          <div className="grow-[1] bg-[#0F2C23] rounded-3xl flex justify-center items-center">
            <img src={twoCoffeeBeans} alt="Two Coffee Beans" className="w-56" />
          </div>
        </div>
        <div className="flex h-3/5 gap-5 mt-5 ">
          <div className="grow-[1] flex-col justify-center items-center gap-14">
            <div className=" bg-[#0F2C23] rounded-3xl text-white text-sm p-5 h-3/4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </div>
            <button className=" py-2 mt-4 w-full bg-canaryYellow-0  rounded-full border-9 text-3xl ">
              Connect
            </button>
          </div>
          <div className="w-2/3 bg-[#0F2C23] rounded-3xl">
            <StepCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
