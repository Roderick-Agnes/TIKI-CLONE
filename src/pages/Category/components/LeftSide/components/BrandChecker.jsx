const BrandChecker = ({
  brands,
  filterByBrands,
}) => {
  return (
    brands &&
    brands[0] !== "" && (
      <div className='min-w-[200px] max-w-[200px] bg-white py-3 px-3 rounded-l-sm border-b border-solid border-t-0 border-l-0 border-r-0 border-[#e7e7e7]'>
        <div className='text-[#38383d] text-sm font-semibold pb-3'>
          Thương hiệu
        </div>

        <div className='max-w-[200px] mb-2'>
          <div className='flex flex-col justify-start'>
            {brands.map((brand, idx) => {
              return (
                brand !== "" && (
                  <div
                    className='flex flex-row items-center w-full pb-3'
                    key={brand}
                  >
                    <input
                      type='checkbox'
                      name={brand}
                      value={brand}
                      className='w-4 h-4'
                      onChange={(e) =>
                        filterByBrands(e)
                      }
                    />
                    <p className='text-xs text-[#38383d] ml-3'>
                      {brand}
                    </p>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default BrandChecker;
