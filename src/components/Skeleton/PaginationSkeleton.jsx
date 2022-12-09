const PaginationSkeleton = () => {
  return (
    <div className='mt-5 flex flex-row justify-center items-center gap-5 w-full animate-pulse'>
      {Array(6)
        .fill(0)
        .map((item, idx) => (
          <div
            className='rounded-full w-8 h-8 bg-slate-200'
            key={idx}
          ></div>
        ))}
    </div>
  );
};

export default PaginationSkeleton;
