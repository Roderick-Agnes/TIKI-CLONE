import {
  BiLoader,
  BiMinus,
} from "react-icons/bi";

const PriceRangeInput = (props) => {
  const {
    filters,
    filterByPriceRange,
    priceStart,
    priceEnd,
  } = props;

  return (
    <div className='min-w-[200px] max-w-[200px] bg-white py-3 px-3 rounded-l-sm border-b border-solid border-t-0 border-l-0 border-r-0 border-[#e7e7e7]'>
      <div className='text-[#38383d] text-sm font-semibold pb-3'>
        Giá
      </div>
      <div className='max-w-[200px] mb-2'>
        <div className='mb-2 text-[12px] text-[#808089]'>
          Chọn khoảng giá
        </div>
        <div className='flex flex-row justify-between items-center '>
          <input
            type='number'
            min={0}
            minLength={1}
            defaultValue={
              filters._priceRangeStart
            }
            onChange={(e) => {
              if (priceStart === "")
                priceStart.current.value = 0;
              if (
                e.target.value !== 0 &&
                e.target.value &&
                e.target.value >= 1000
              ) {
                priceEnd.current.value =
                  parseInt(e.target.value) * 10;
              } else {
                priceEnd.current.value = 0;
              }
            }}
            ref={priceStart}
            className='max-w-[5rem] text-[12px] p-2 rounded-md border-solid border-[0.5px] border-[#c0c0c0] outline-none'
          />
          <BiMinus className='text-[#c0c0c0]' />
          <input
            type='number'
            defaultValue={filters._priceRangeEnd}
            ref={priceEnd}
            className='max-w-[5rem] text-[12px] p-2 rounded-md border-solid border-[0.5px] border-[#c0c0c0] outline-none '
          />
        </div>
      </div>
      <button
        className='rounded outline-none border-[0.5px] border-blue bg-white text-blue text-xs w-full p-1 cursor-pointer hover:text-white hover:bg-blue hover:shadow-button'
        onClick={() => {
          priceEnd.current.value !== "0" &&
            filterByPriceRange();
        }}
      >
        Áp dụng
      </button>
    </div>
  );
};

export default PriceRangeInput;
