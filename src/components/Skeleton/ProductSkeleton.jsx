import React from "react";

const ProductSkeleton = ({ counts }) => {
  return Array(counts)
    .fill(0)
    .map((item, idx) => (
      <div
        className='animate-pulse bg-white max-w-[175px] mobile:max-w-[190px] tablet:max-w-[190px] mobile:w-[175px] tablet:w-[190px] rounded cursor-pointer hover:shadow-item'
        key={idx}
      >
        <div className=' bg-white max-w-[190px] max-h-[190px]'>
          <div className='mobile:w-[175px] tablet:w-[190px] mobile:h-[175px] tablet:h-[190px] bg-slate-200'></div>
        </div>
        <div className='my-[0.7rem] px-[0.7rem]'>
          <div className='h-8 bg-slate-200 rounded min-h-[2rem]'></div>
          <div className='h-3 bg-slate-200 rounded mt-[0.5rem] min-h-[12px]'></div>
          <div className='h-6 bg-slate-200 rounded mt-4 min-h-[1rem] '></div>
        </div>
      </div>
    ));
};

export default ProductSkeleton;
