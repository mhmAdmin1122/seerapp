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
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import axios from "axios";
import { signIn } from "next-auth/react";

const Regester = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [wpassword, setWpassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState("");
  const [show, setShow] = useState(false);

  async function SignIn(ev: any) {
    ev.preventDefault();
    const data = { userName, email, phone, password, wpassword, inviteCode };
    const response: any = await axios.post("/api/signIn", data);
    if (response.ok) {
      alert("Form submission failed.");
    } else {
      setUserName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setCpassword("");
      setWpassword("");
      setInviteCode("");
    }
  }

  const passwordOnChange = (ev: any) => {
    setPassword(ev.target.value);
  };
  const confpassword = (ev: any) => {
    setCpassword(ev.target.value);
    if (password && ev.target.value !== password) {
      setPasswordsMatch("Password must be same");
      setShow(false);
    } else {
      setPasswordsMatch("");
      setShow(true);
    }
  };
  console.log(passwordsMatch);

  return (
    <div>
      <h1 className="text-center text-[26px] font-bold">Regester</h1>
      <h2 className="text-center text-[16px] font-medium text-[#999]">
        Already have an account?{" "}
        <Link href="/Regestration/Login" className="text-[#ff0000]">
          LogIn
        </Link>
      </h2>
      <form
        className="regesterrationForm grid justify-items-center"
        onSubmit={SignIn}
      >
        <div>
          <input
            type="text"
            className="username"
            placeholder="Username"
            value={userName}
            onChange={(ev) => setUserName(ev.target.value)}
          />
          <FaUser />
        </div>
        <div>
          <input
            type="email"
            className="email"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <MdAlternateEmail />
        </div>
        <div>
          <input
            type="tell"
            className="phone"
            placeholder="Phone"
            value={phone}
            onChange={(ev) => setPhone(ev.target.value)}
          />
          <FaPhone />
        </div>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={passwordOnChange}
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
        <div>
          <input
            type="password"
            className="Password"
            placeholder="Confirm Password"
            value={cpassword}
            onChange={confpassword}
          />
          <FaHandMiddleFinger />
        </div>
        <b className="text-[#ff0000]">{passwordsMatch}</b>
        <div>
          <input
            type="password"
            className="wpassword"
            placeholder="Withdraw Password"
            value={wpassword}
            onChange={(ev) => setWpassword(ev.target.value)}
          />
          <FaRegMoneyBillAlt />
        </div>
        <div>
          <input
            type="text"
            className="InviteCode"
            placeholder="Invite Code"
            value={inviteCode}
            onChange={(ev) => setInviteCode(ev.target.value)}
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

        <button type="submit" className={`${show ? "formbtn" : "hidden"}`}>
          Sign Up
        </button>
      </form>
      <span className="grid gap-4 justify-items-center">
        <span className="bg-[#ffa500] border-[1px] border-[#ffa500] shadow-md shadow-gray-300 px-[20px] py-[8px] w-fit rounded-[4px] flex items-center gap-2 text-[20px] text-[#fff] font-medium">
          <FaGoogle />
          <button onClick={() => signIn("google")}>Sign in google</button>
        </span>
        <span className="bg-[#000] border-[1px] border-[#000] shadow-md shadow-gray-300 px-[20px] py-[8px] w-fit rounded-[4px] flex items-center gap-2 text-[20px] text-[#fff] font-medium">
          <FaGithub />
          <button onClick={() => signIn("github")}>Sign in github</button>
        </span>
      </span>
    </div>
  );
};

export default Regester;
