const FilterNavbarSkeleton = () => {
  return (
    <div className='flex flex-row justify-between px-4 py-4  w-full  bg-white border-b border-solid border-t-0 border-l-0 border-r-0 border-[#e7e7e7]'>
      <div className='animate-pulse w-full flex flex-row relative gap-4'>
        {Array(4)
          .fill(0)
          .map((filter, idx) => (
            <div
              className='w-36 h-6 first:ml-0 last:mr-0 bg-slate-200'
              key={idx}
            ></div>
          ))}
      </div>
      <div className='flex flex-row justify-between items-center space-x-4'>
        <div className='w-11 h-6 bg-slate-200'></div>
        <div className='w-11 h-6 bg-slate-200'></div>
      </div>
    </div>
  );
};

export default FilterNavbarSkeleton;
