import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaUser,
  FaPhoneSquare,
  FaRegMoneyBillAlt,
  FaLock,
  FaCheckSquare,
  FaGifts,
  FaRegEdit,
} from "react-icons/fa";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [withPassword, setWithPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [gender, setGender] = useState("");
  const [inviteCode, setInviteCode] = useState("");

  async function regestration(ev: any) {
    ev.preventDefault();
    const data = {
      userName,
      phoneNumber,
      withPassword,
      password,
      confPassword,
      gender,
      inviteCode,
    };
    const response: any = await axios.post("/api/regestration", data);
    if (response.ok) {
      alert("Form submission failed.");
    } else {
      setUserName("");
      setPhoneNumber("");
      setWithPassword("");
      setPassword("");
      setConfPassword("");
      setGender("");
      setInviteCode("");
    }
    console.log(gender);
  }

  return (
    <>
      <head>
        <title>Regester</title>
      </head>
      <body>
        <div className="formBox">
          <form
            className="SignIn_Form grid justify-items-center w-full"
            onSubmit={regestration}
          >
            <div className="name-form gap-[4px] justify-center w-[100%]">
              <FaRegEdit className="text-[40px]" />
              <h1 className="text-[30px] underline">Regestration</h1>
            </div>

            {/* username */}
            <div className="username">
              <input
                type="text"
                placeholder="Username"
                id="u_name"
                value={userName}
                onChange={(ev) => setUserName(ev.target.value)}
                required
              />
              <label htmlFor="u_name">
                <FaUser className="text-[44px] rounded-r-[6px] bg-[#fff] text-[#999] p-[5px]" />
              </label>
            </div>

            {/* Phone */}
            <div className="phonenumber">
              <input
                type="tell"
                placeholder="Phone"
                id="phone"
                value={phoneNumber}
                onChange={(ev) => setPhoneNumber(ev.target.value)}
                required
              />
              <label htmlFor="phone">
                <FaPhoneSquare className="text-[44px] rounded-r-[6px] bg-[#fff] text-[#999] p-[5px]" />
              </label>
            </div>

            {/* withdraw password */}
            <div className="w_password">
              <input
                type="password"
                placeholder="Withdraw Password"
                id="w_password"
                value={withPassword}
                onChange={(ev) => setWithPassword(ev.target.value)}
                required
              />
              <label htmlFor="w_password">
                <FaRegMoneyBillAlt className="text-[44px] rounded-r-[6px] bg-[#fff] text-[#999] p-[5px]" />
              </label>
            </div>

            {/* password */}
            <div className="password">
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                required
              />
              <label htmlFor="password">
                <FaLock className="text-[44px] rounded-r-[6px] bg-[#fff] text-[#999] p-[5px]" />
              </label>
            </div>

            {/* confirm password */}
            <div className="c_password">
              <input
                type="password"
                placeholder="Confirm Password"
                id="c_password"
                value={confPassword}
                onChange={(ev) => setConfPassword(ev.target.value)}
                required
              />
              <label htmlFor="c_password">
                <FaCheckSquare className="text-[44px] rounded-r-[6px] bg-[#fff] text-[#999] p-[5px]" />
              </label>
            </div>

            {/* gender */}
            <div className="gender">
              <label htmlFor="">Gender</label>
              <select
                className="outline-none"
                value={gender}
                onChange={(ev) => setGender(ev.target.value)}
              >
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Other</option>
              </select>
            </div>

            {/* Invite Code */}
            <div className="I_Code">
              <input
                type="text"
                placeholder="Invite Code"
                id="I_Code"
                value={inviteCode}
                onChange={(ev) => setInviteCode(ev.target.value)}
              />
              <label htmlFor="I_Code">
                <FaGifts className="text-[44px] rounded-r-[6px] bg-[#fff] text-[#999] p-[5px]" />
              </label>
            </div>

            {/* agreement line */}
            <div className="gap-2">
              <input
                type="checkbox"
                required
                id="t_c"
                className="h-6 w-6 text-indigo-600 rounded-md focus:ring-indigo-500"
              />
              <label htmlFor="t_c">I agree with the Term & Condition</label>
            </div>

            {/* sub btn */}
            <div className="submit_btn">
              <button className="bg-[#0011ff] text-[#fff] px-[20px] py-[12px] rounded-md font-bold">
                Regester Now
              </button>
            </div>

            {/* login link */}
            <p>
              Already Have an account?{" "}
              <Link
                href="/"
                className="underline text-[#00ff37e0] text-[24px] font-bold transition-all ease-in-out duration-1000 hover:text-[#ffd000d5]"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </body>
    </>
  );
};

export default SignIn;
