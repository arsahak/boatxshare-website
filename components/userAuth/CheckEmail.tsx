import Link from "next/link";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const CheckEmail = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 w-full">
      <div className="w-full max-w-xl mx-auto px-8 py-10 bg-white rounded-lg shadow-lg border">
        <h2 className="font-semibold text-2xl text-primary text-center mb-6">
          Email Verification Required
        </h2>
        <p className="text-gray-600 text-center mb-6">
          We've sent an email to your registered email address. Please check
          your inbox (and spam folder) for the activation link to verify your
          account.
        </p>
        <div className="text-center mb-8 flex items-center justify-center">
          <MdOutlineMarkEmailRead className="size-16 text-primary text-center" />
        </div>
        <p className="text-center text-base text-gray-500 mb-8">
          Didn’t receive the email? Check your spam folder or{" "}
          <button className="text-primary font-medium hover:underline">
            Resend the email
          </button>
          .
        </p>
        <div className="flex items-center justify-center">
          <Link
            href={"/sign-in"}
            className="w-[70%] bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition px-5 text-center hover:bg-hoverColor"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
