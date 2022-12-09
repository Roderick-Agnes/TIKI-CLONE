import React from "react";

const BrandCheckerSkeleton = () => {
  return (
    <div className='min-w-[200px] max-w-[200px] bg-white py-3 px-3 rounded-l-sm border-b border-solid border-t-0 border-l-0 border-r-0 border-[#e7e7e7]'>
      <div className='animate-pulse'>
        <div className='w-full h-5 mb-4 bg-slate-200'></div>
        {Array(10)
          .fill(0)
          .map((item, idx) => (
            <div
              className='flex flex-row justify-between mb-3 gap-1'
              key={idx}
            >
              <div className='w-4 h-4 bg-slate-200'></div>
              <div className='w-[85%] h-4 bg-slate-200'></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BrandCheckerSkeleton;
