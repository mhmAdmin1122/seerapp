"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../public/img/logo.png";
import userIco from "../../../public/img/profileUserIcon.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${isSticky ? "fixed z-[500000] header-main w-[100%]" : "header-main"}`}>
      <Link
        href={"/"}
        className="logo-box cursor-context-menu"
        title="Seer Interactive"
      >
        <Image src={logo} alt="logo" />
      </Link>
      <div className="profile-box flex items-center gap-3" title="Profile">
        <Image src={userIco} alt="user-profile-ico" />
        <Link href={"/page/Profile"}>PROFILE</Link>
      </div>
    </div>
  );
};

export default Navbar;
