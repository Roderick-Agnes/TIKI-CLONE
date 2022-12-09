import React from "react";

const RatingCheckerSkeleton = () => {
  return (
    <div className='min-w-[200px] max-w-[200px] bg-white py-3 px-3 rounded-l-sm border-b border-solid border-t-0 border-l-0 border-r-0 border-[#e7e7e7]'>
      <div className='animate-pulse'>
        <div className='w-full h-4 mb-4 bg-slate-200'></div>
        <div className='w-full mb-1 h-3 bg-slate-200'></div>
        <div className='w-full mb-1 h-3 bg-slate-200'></div>
        <div className='w-full mb-1 h-3 bg-slate-200'></div>
      </div>
    </div>
  );
};

export default RatingCheckerSkeleton;
