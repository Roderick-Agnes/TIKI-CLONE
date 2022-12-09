import React from "react";

const BreadcrumbSkeleton = () => {
  return (
    <div className='flex items-center max-h-[40px] h-[40px] w-full mobile:pl-4'>
      <div className='animate-pulse flex flex-row gap-2 w-full'>
        <div className='bg-slate-200 h-4 w-[10%] rounded'></div>
        <div className='bg-slate-200 h-4 w-[30%] rounded'></div>
        <div className='bg-slate-200 h-4 w-[60%] rounded'></div>
      </div>
    </div>
  );
};

export default BreadcrumbSkeleton;
