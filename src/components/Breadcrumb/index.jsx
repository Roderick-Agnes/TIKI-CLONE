import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Breadcrumb = ({ titles }) => {
  return (
    <div className="flex items-center max-h-[40px] h-[40px] w-full">
      <ul className="list-none flex flex-row  gap-1 ">
        {titles.map((title, idx) => {
          return (
            <li
              key={"breadscrumb-title-" + idx}
              className="flex items-center gap-1 text-[#808089] text-[14px] hover:underline cursor-pointer"
            >
              {title}
              {idx < titles.length - 1 && (
                <MdArrowForwardIos className="text-[#808089] text-[14px]" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
