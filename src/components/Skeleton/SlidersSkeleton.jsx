import React from "react";

const SlidersSkeleton = () => {
  return (
    <>
      <div className='mobile:max-h-full mobile:max-w-full w-full laptop:w-[785px] h-[259px] bg-slate-200 animate-pulse rounded-md'></div>
      <div className='mobile:max-h-full mobile:max-w-full w-full laptop:w-[387px] h-[259px] bg-slate-200 animate-pulse rounded-md'></div>
    </>
  );
};

export default SlidersSkeleton;
