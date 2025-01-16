import { discord, telegram, twitter } from "../assets/icons/";
const Nav = () => {
  return (
    <nav className="flex  pr-12 pl-28 py-9 bg-[#11121A] text-white  ">
      <div className="flex flex-grow  space-x-10  ">
        <div className=" font-dela text-[#FBFF3A] text-4xl ">WAGA</div>
        <div className="flex justify-between px-4 space-x-10 font-semibold mt-2 text-nowrap text-xl">
          <a href="#">Roadmap</a>
          <a href="#">Tokenomics</a>
          <a href="#">Our Process</a>
        </div>
      </div>
      <div className=" ml-auto flex space-x-4 mr-4">
        <img src={telegram} className="object-contain w-[30px]" />
        <img src={discord} className="object-contain w-[30px]" />
        <img src={twitter} className="object-contain w-[30px]" />
        <button className=" bg-[#FBFF3A] text-[#11121A]  font-semibold font-sans p-2 rounded-lg text-nowrap">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Nav;
