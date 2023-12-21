import Link from "next/link";
import React from "react";
import Image from "next/image";
import about1 from "../../../public/img/aboutPic1.jpg";
import about2 from "../../../public/img/aboutPic2.jpg";

const AboutUs = () => {
  return (
    <div className="aboutForm">
      <div className="h-[80px]">
        <Link
          href={"/"}
          className="text-[#2193d0] font-medium cursor-context-menu"
        >
          Seer Interactive
        </Link>
        <h1 className="text-[22px] mt-2">Latest Event</h1>
      </div>
      <div className="aboutPic h-[320px] grid gap-2">
        <Image src={about1} alt="about-pic" />
        <Image src={about2} alt="about-pic" />
      </div>
    </div>
  );
};

export default AboutUs;
