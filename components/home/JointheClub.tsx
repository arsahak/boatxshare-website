import Link from "next/link";

const JointheClub = () => {
  return (
    <div className="bg-sectionbg ">
      <div className="container py-10 md:py-20">
        <div className="flex items-center justify-center flex-col">
          <div className="font-aviano-regular uppercase text-center w-full md:max-w-[70%] ">
            <h2 className="text-2xl md:text-4xl font-semibold">
              Join the Club
            </h2>
            <h2 className="text-base md:text-xl font-semibold mt-3 ">
              These VIP Benefits give club members access to a fun, fresh and
              diverse catalogue, allowing them to discover and adopt the latest
              trends in the market first, making them the fashion experts!
            </h2>
          </div>
        </div>
        <div className="w-full md:max-w-[70%] mx-auto mt-12">
          <form className="w-full font-aviano-regular uppercase">
            <div className="flex flex-col md:flex-row md:space-x-4 my-6">
              <div className="w-full">
                <input
                  autoComplete="off"
                  type="text"
                  id="email-address-icon"
                  className="bg-white border border-black text-sm md:text-lg rounded w-full pl-4 py-3 placeholder-gray-600  outline-none"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full mt-6 md:mt-0">
                <input
                  autoComplete="off"
                  type="text"
                  id="email-address-icon"
                  className="bg-white border border-black text-sm md:text-lg rounded w-full pl-4 py-3 placeholder-gray-600  outline-none"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="my-6">
              <div className="w-full">
                <input
                  autoComplete="off"
                  type="text"
                  id="email-address-icon"
                  className="bg-white border border-black text-sm md:text-lg rounded w-full pl-4 py-3 placeholder-gray-600  outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="my-6">
              <div className="w-full">
                <input
                  autoComplete="off"
                  type="text"
                  id="email-address-icon"
                  className="bg-white border border-black text-sm md:text-lg rounded w-full pl-4 py-3 placeholder-gray-600  outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between space-x-4 my-6">
              <button className="bg-white border border-black text-sm md:text-lg rounded w-full  py-3 placeholder-gray-600  outline-none hover:bg-black hover:text-white">
                WOMEN
              </button>
              <button className="bg-white border border-black text-sm md:text-lg rounded w-full  py-3 placeholder-gray-600  outline-none hover:bg-black hover:text-white">
                MEN
              </button>
              <button className="bg-white border border-black text-sm md:text-lg rounded w-full  py-3 placeholder-gray-600  outline-none hover:bg-black hover:text-white">
                OTHERS
              </button>
            </div>
            <div className="my-12 flex justify-center">
              <h2 className="text-center max-w-[70%]">
                By Clicking Join now to enjoy the benifit’s you agree to join
                our newsletter & accept our{" "}
                <Link href="/" target="_blank" className="underline">
                  Privacy Policy
                </Link>{" "}
                &{" "}
                <Link href="/" target="_blank" className="underline">
                  erms and Conditions
                </Link>{" "}
                .
              </h2>
            </div>
            <div className="">
              <button className="text-base md:text-lg rounded w-full py-3  outline-none bg-black text-white">
                JOIN NOW TO ENJOY THE BENEFITS
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JointheClub;
