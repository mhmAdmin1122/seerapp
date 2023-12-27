import React from "react";
import LevelUserName from "../L/LevelUserName";

const Wellcome = ({name}:any) => {
  return (
    <div className="welcomeBox grid justify-items-center pt-[22px] gap-2">
      <h1 className="text-[26px] text-[#000] font-semibold">Welcome</h1>
      <LevelUserName />
    </div>
  );
};

export default Wellcome;
