"use client";

import { doGoogleLogin } from "@/app/action/userAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";

const SocialLoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const signInWithGoogle = async () => {
    setLoadingGoogle(true);
    setError("");

    try {
      const response = await doGoogleLogin();

      if (response?.error) {
        console.error(response.error);
        setError("Google sign-in failed. Please try again.");
      } else {
        // Ensure routing happens inside a useEffect
        setTimeout(() => {
          router.push("/");
        }, 0);
      }
    } catch (e) {
      console.error(e);
      setError("An unexpected error occurred.");
    } finally {
      setLoadingGoogle(false);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between space-x-3 mt-6">
        <button
          onClick={signInWithGoogle()}
          className={`text-white font-medium rounded-lg text-lg px-5 py-2.5 w-full bg-none border border-gray-700 hover:bg-hoverColor flex items-center justify-center space-x-2 cursor-pointer`}
        >
          <FcGoogle className="size-6" />
          <p className="text-gray-700">
            {loadingGoogle ? "Loading" : "Google"}
          </p>
        </button>
        <div
          className={`text-white font-medium rounded-lg text-lg px-5 py-2.5 w-full bg-none border border-gray-700 hover:bg-hoverColor flex items-center justify-center space-x-2 cursor-pointer`}
        >
          <ImFacebook2 className="size-5 text-blue-800" />
          <p className="text-gray-700"> Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLoginPage;
