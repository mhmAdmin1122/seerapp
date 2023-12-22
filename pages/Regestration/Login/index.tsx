import Head from "next/head";
import React, { useState } from "react";
import FormLayout from "../FormLayout/FormLayout";
import Link from "next/link";
import { FaUser, FaFingerprint } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div>
      <Head>
        <title>LogIn || Seer interactive</title>
      </Head>
      <FormLayout hight={"h-screen"} highttwo={"h-[320px]"}>
        <h1 className="text-center text-[26px] font-bold">LogIn</h1>
        <h2 className="text-center text-[16px] font-medium text-[#999]">
          Create an account?{" "}
          <Link href="/Regestration/SignIn" className="text-[#ff0000]">
            SignIn
          </Link>
        </h2>
        <form className="regesterrationForm grid justify-items-center">
          <div>
            <input type="text" className="username" placeholder="Username" />
            <FaUser />
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="Password"
              placeholder="Password"
            />
            <span onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FaFingerprint className="text-[#999]" />
              ) : (
                <FaFingerprint className="text-[#ff0000]" />
              )}
            </span>
          </div>

          <button type="submit">LogIn</button>
        </form>
      </FormLayout>
    </div>
  );
};

export default Login;
