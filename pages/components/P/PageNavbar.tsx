import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const PageNavbar = ({title, url}:any) => {
  return (
    <nav className="bg-[#2293e6] text-[#fff] text-[20px] font-bold flex items-center justify-between px-[12px] py-[8px]">
      <Link href={url}>
        <MdArrowBackIosNew />
      </Link>
      <h1>{title}</h1>
      <b></b>
    </nav>
  );
};

export default PageNavbar;
