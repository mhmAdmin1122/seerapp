import { ImPower  } from "react-icons/im";
import React from "react";

const FormLayout = ({ children, hight, highttwo }: any) => {
  return (
    <div
      className={`grid justify-items-center w-full bg-red-700 py-[40px] ${hight}`}
    >
      <div
        className={`flex w-[650px] border-[2px] border-[#d1d1d193] shadow-md shadow-gray-300 rounded-md ${highttwo}`}
      >
        <div
          className={`formArea w-[100%] bg-[#fff] px-[20px] py-[30px] rounded-md grid gap-0 ${highttwo}`}
        >
          {children}
          <p className="flex items-center gap-[2px] justify-end text-[#999]">
            <ImPower className="text-[#c46ca9]"/>
            Powered By Seer
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
