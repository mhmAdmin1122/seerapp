import React from "react";
import Image from "next/image";
import Level1pic from '@/public/img/VIP1.png'

const LevelUserName = () => {
  return (
    <div className="level-user-name flex justify-center items-center gap-3">
      <p className="user-name text-[20px] text-[#000] font-semibold">hasaan</p>
      <Image src={Level1pic} alt="level-pic" className="w-[25px] h-[25px]" />
    </div>
  );
};

export default LevelUserName;
