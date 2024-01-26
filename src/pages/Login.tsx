import Google from "../assets/image/search 1.svg";
import Apple from "../assets/image/Frame 1016.svg";
import Facebook from "../assets/image/Frame 1017.svg";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-500">
      <div className="bg-white w-[700px] h-[600px] rounded-xl">
        <div className="flex justify-around items-center mt-16">
          <div className="text-4xl text-black font-normal font-['Poppins']">
            Sign In
          </div>
        </div>
        <form className="space-y-6">
          <div className="form-control w-full mx-auto mt-20">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered border-slate-300 font-medium w-6/12 h-5/12 mx-auto bg-white text-black"
            />
          </div>
          <div className="form-control w-full mx-auto">
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered border-slate-300 font-medium w-6/12 h-5/12 mx-auto bg-white text-black"
            />
          </div>
          <div className="form-control w-6/12 mx-auto">
            <button className="bg-black h-12 rounded-lg text-base text-white">
              Log In
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center mt-7">
          <div className="w-[424px] inline-flex justify-start items-center gap-6">
            <div className="grow shrink basis-0 h-[0px] border border-slate-100"></div>
            <div className="text-center text-slate-500 text-xs font-normal font-['Poppins'] leading-tight">
              or do it via other accounts
            </div>
            <div className="grow shrink basis-0 h-[0px] border border-slate-100"></div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-7">
          <div className="w-[223px] justify-center items-center gap-10 inline-flex">
            <div className="flex justify-start items-start gap-8">
              <div className="w-14 h-14">
                <div className="w-14 h-14 bg-white rounded-3xl shadow flex justify-center items-center">
                  <div className="w-6 h-6 top-4">
                    <img src={Google} alt="" />
                  </div>
                </div>
              </div>
              <div className="w-14 h-14">
                <div className="w-14 h-14 bg-white rounded-3xl shadow flex justify-center items-center">
                  <div className="w-16 h-6 -mt-8">
                    <img src={Apple} />
                  </div>
                </div>
              </div>
              <div className="w-14 h-14">
                <div className="w-14 h-14 bg-white rounded-3xl shadow flex justify-center items-center">
                  <div className="w-16 h-6 -mt-8">
                    <img src={Facebook} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
