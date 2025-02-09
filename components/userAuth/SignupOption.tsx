import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const SignupOption = () => {
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ…M5NH0.-NIDufp-xchgqlxvK5BlR0qe0iv-5nP9QDQ9NPjG3LA`;

  return (
    <div className="w-[700px] mx-auto px-20 py-20 bg-white rounded shadow-md border">
      <h2 className="font-semibold text-3xl text-primary mb-12 text-center">
        Create account
      </h2>

      <Link
        href={`/sign-up/create-with-email`}
        className={`text-white font-medium rounded-lg text-lg px-5 py-3 w-full bg-primary hover:bg-hoverColor  flex items-center justify-center space-x-2 uppercase`}
      >
        <MdOutlineMarkEmailRead className="size-6" />
        <p className="text-white text-base"> Sign up with email</p>
      </Link>

      <div className="flex items-center justify-between w-full space-x-5  mt-0 md:mt-4 mb-1 px-6">
        <hr className="h-px my-8 bg-gray-400 border-0 w-[20%] md:w-[49%]" />
        <div className="flex items-center justify-between space-x-2 w-[60%] md:w-[2%] text-gray-400 ">
          or
        </div>
        <hr className="h-px my-8 bg-gray-400 border-0 w-[20%] md:w-[49%]" />
      </div>

      <div className=" space-y-5 mt-4">
        <div
          className={`text-white font-medium rounded-lg text-lg px-5 py-2.5 w-full bg-none border border-gray-700 hover:bg-hoverColor flex items-center justify-center space-x-2 cursor-pointer`}
        >
          <FcGoogle className="size-6" />
          <p className="text-gray-700"> Google</p>
        </div>
        <div
          className={`text-white font-medium rounded-lg text-lg px-5 py-2.5 w-full bg-none border border-gray-700 hover:bg-hoverColor flex items-center justify-center space-x-2 cursor-pointer`}
        >
          <ImFacebook2 className="size-5 text-blue-800" />
          <p className="text-gray-700"> Facebook</p>
        </div>
      </div>
      {/* Remember Me & Links */}
      <div className="flex items-center justify-center mt-6 mb-6">
        <div>
          <h3 className="text-base font-normal text-gray-900">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-primary hover:underline">
              Sign in
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SignupOption;
