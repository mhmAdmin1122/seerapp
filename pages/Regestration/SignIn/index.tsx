import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import {
  FaUser,
  FaPhone,
  FaRegMoneyBillAlt,
  FaFingerprint,
  FaHandMiddleFinger,
  FaGifts,
  FaRegEdit,
} from "react-icons/fa";
import FormLayout from "../FormLayout/FormLayout";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Head>
        <title>Regester || Seer Interactive</title>
      </Head>
      <FormLayout hight={"h-auto"}>
        <h1 className="text-center text-[26px] font-bold">Regester</h1>
        <h2 className="text-center text-[16px] font-medium text-[#999]">
          Already have an account?{" "}
          <Link href="/Regestration/Login" className="text-[#ff0000]">
            LogIn
          </Link>
        </h2>
        <form className="regesterrationForm grid justify-items-center">
          <div>
            <input type="text" className="username" placeholder="Username" />
            <FaUser />
          </div>
          <div>
            <input type="email" className="email" placeholder="Email" />
            <MdAlternateEmail />
          </div>
          <div>
            <input type="tell" className="phone" placeholder="Phone" />
            <FaPhone />
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
              {showPassword ? <FaFingerprint className="text-[#999]" /> : <FaFingerprint className="text-[#ff0000]" />}
            </span>
          </div>
          <div>
          <input
              type="password"
              className="Password"
              placeholder="Confirm Password"
            />
            <FaHandMiddleFinger />
          </div>
          <div>
            <input
              type="password"
              className="wpassword"
              placeholder="Withdraw Password"
            />
            <FaRegMoneyBillAlt />
          </div>
          <div>
            <input
              type="text"
              className="InviteCode"
              placeholder="Invite Code"
            />
            <FaGifts />
          </div>
          <span className="cline flex items-center gap-2">
            <input type="checkBox" id="cline" className="confirmLine" />
            <label htmlFor="cline">
              I agree with the{" "}
              <Link href="/" className="text-[#ff0000]">
                Term & condition
              </Link>
            </label>
          </span>

          <button type="submit">Sign Up</button>
        </form>
      </FormLayout>
    </>
  );
};

export default SignIn;
