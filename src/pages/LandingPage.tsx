import Layout from "../component/Layout";
import Kabbah from "../assets/image/download.jpg";

const LandingPage = () => {
  return (
    <div className="bg-white w-full h-screen p-3">
      <div className="flex justify-center items-center">
        <div className="flex flex-col mt-14 md:mt-28 md:space-y-9">
          <div className="text-black ml-2 text-sm md:text-base font-normal font-['Clash Display'] uppercase tracking-wide">
            Branding & Landing Page
          </div>
          <div className="text-zinc-800 text-xl md:text-[110.41px] font-semibold font-['Clash Display'] uppercase tracking-[7.18px]">
            Proposal
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3 md:mt-36">
        <div className="flex flex-col space-x-4 md:flex-row">
          <div className=" mt-36 relative mx-auto">
            <img className="w-72 h-72" src={Kabbah} />
            <div className="w-72 h-72 -mt-[320px] ml-[30px] bg-zinc-900 rounded-lg"></div>
          </div>
          <div className="space-y-8 md:space-y-20 mt-20 mx-auto">
            <div className="grow shrink basis-0 h-[0px] border border-gray-400"></div>
            <div className="text-center text-base md:text-lg text-black w-full md:w-[474px] h-[137px] font-light font-['Space Grotesk'] leading-snug tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              eveniet dolorem quo tempore, delectus corrupti assumenda,
              quibusdam eligendi illum ad molestias! Mollitia corporis corrupti
              non. Modi, tenetur sequi? Cupiditate, excepturi?
            </div>
            <div className="grow shrink basis-0 h-[0px] border border-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
