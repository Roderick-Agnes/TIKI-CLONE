import { useState } from "react";
import "./css/collection-item.css";

const CollectionItem = (props) => {
  const {
    image_url,
    title,
    parentLen,
    isActive,
    onClick,
  } = props;

  return (
    <>
      <div
        className={` min-w-[calc(100%_/_${parentLen}_-_0.5rem_*_${
          parentLen * 2
        })px]  text-[13px] text-center  bg-white flex flex-col items-center flex-shrink-0 cursor-pointer rounded py-2 px-2  ${
          isActive
            ? " border-[0.2px] border-solid border-[#0D5CB6] text-[#0D5CB6]"
            : " "
        } `}
        onClick={onClick}
      >
        <img
          src={image_url}
          alt={title}
          className="w-[3rem] h-[3rem]"
        />
        <span>{title}</span>
      </div>
    </>
  );
};

export default CollectionItem;
