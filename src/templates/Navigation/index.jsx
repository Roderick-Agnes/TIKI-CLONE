import { useState } from "react";
import {
  AiOutlineFire,
  AiOutlineHome,
} from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { RiAccountPinCircleLine } from "react-icons/ri";

const Navigation = (props) => {
  return (
    <div className="tablet:hidden w-screen bg-white min-h-[1rem] fixed left-0 bottom-0 z-[10] shadow-navigation">
      <div className="flex flex-row justify-between items-center w-full h-full">
        <div className="flex flex-col justify-center items-center p-2 max-w-full min-w-[5rem] text-slate-700 active:text-white active:bg-blue">
          <AiOutlineHome className="w-auto h-[1.5rem] " />
          <span className="text-[14px] leading-[14px] mt-1 ">
            Home
          </span>
        </div>
        <div className="flex flex-col justify-center items-center p-2 max-w-full min-w-[5rem] active:text-white active:bg-blue">
          <AiOutlineFire className="w-auto h-[1.5rem]" />
          <span className="text-[14px] leading-[14px] mt-1">
            Lướt
          </span>
        </div>
        <div className="flex flex-col justify-center items-center p-2 max-w-full min-w-[5rem] active:text-white active:bg-blue">
          <BsChatDots className="w-auto h-[1.5rem]" />
          <span className="text-[14px] leading-[14px] mt-1">
            Chat
          </span>
        </div>
        <div className="flex flex-col justify-center items-center p-2 max-w-full min-w-[5rem] active:text-white active:bg-blue">
          <RiAccountPinCircleLine className="w-auto h-[1.5rem]" />
          <span className="text-[14px] leading-[14px] mt-1">
            Tài khoản
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
