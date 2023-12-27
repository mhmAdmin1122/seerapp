import Link from "next/link";
import React from "react";
import { signIn} from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const LandingPage = () => {
  const handleGoogleSign = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };

  return (
    <div>
      <h2 className="text-[18px] text-[#999] font-bold my-3">
        Seer Interactive
      </h2>
      <Link
        href={"/Regestration/SignIn"}
        className="bg-[#0000ff] m-2 text-[#fff] font-bold px-[12px] py-[6px] rounded-[4px]"
      >
        Sign In
      </Link>
      <div
        onClick={handleGoogleSign}
        className="text-[18px] flex items-center justify-center text-[#999] px-[12px] py-[4px] rounded-[4px] bg-[#fff] shadow-md shadow-gray-300 border-[1px] border-[#dadada] w-fit gap-3 font-medium my-4"
      >
        <FaGoogle />
        <p>Sign in with Google</p>
      </div>
    </div>
  );
};

export default LandingPage;
