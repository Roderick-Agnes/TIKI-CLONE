import React from "react";

const CustomerAddress = () => {
  return (
    <div className='min-w-[200px] max-w-[200px] bg-white py-3 px-3 rounded-l-sm border-b border-solid border-t-0 border-l-0 border-r-0 border-[#e7e7e7]'>
      <div className='text-[#38383d] text-sm font-semibold pb-3'>
        Địa chỉ nhận hàng
      </div>
      <div className='text-[12px] whitespace-nowrap underline mb-1'>
        Q. 1, P. Bến Nghé, Hồ Chí Minh
      </div>
      <div className='text-xs text-dark-blue font-semibold cursor-pointer'>
        Đổi địa chỉ
      </div>
    </div>
  );
};

export default CustomerAddress;
