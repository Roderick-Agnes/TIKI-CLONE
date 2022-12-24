import {useState} from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { RiDeleteBinLine } from "react-icons/ri";
import CartItem from "./components/CartItem";
import CartEmpty from "./components/CartEmpty";
import { useDispatch, useSelector } from "react-redux";
import { removeAllProduct } from "../../redux/custom/cartHandler";



const Cart = () => {
  const [allChecked, setAllChecked] = useState(false)

  const cart = useSelector(
    (state) => state?.cart,
  );
  const ditpatch = useDispatch()

    const handleRemoveAll = () => {
      removeAllProduct(ditpatch)
    }
  const handleChangeStateOfProducts = () => {
    setAllChecked(pre => !pre)
  }

  return (
    <div className='bg-[#F5F5FA] w-full flex flex-col relative z-[9] laptop:items-center laptop:justify-center'>
      <div className='w-full laptop:max-w-[73.75rem] laptop:bg-[#f5f5fa] pb-[4rem] tablet:pb-0'>
        {/* Breadcrumb */}
        <Breadcrumb name={"Giỏ hàng của bạn"} />
        {/* Cart Empty */}
        {cart.size === 0 && <CartEmpty />}

        <div
          className={`flex flex-row justify-between pb-5 ${
            cart.size === 0 && "hidden"
          }`}
        >
          {/* Left side  */}
          <div className='flex flex-col'>
            {/* Header */}
            <div className='grid grid-cols-[398px_170px_130px_130px_30px] items-center w-full mb-3 py-3 px-5 bg-[#fff] rounded'>
              <div className='flex flex-row gap-3'>
                <input
                  type='checkbox'
                  className='w-[18px] h-[18px]'
                  onChange={handleChangeStateOfProducts}
                />
                <span className='text-sm'>
                  Tất cả ({cart.size} sản phẩm)
                </span>
              </div>
              <span className='text-[13px]'>
                Đơn giá
              </span>
              <span className='text-[13px]'>
                Số lượng
              </span>
              <span className='text-[13px]'>
                Thành tiền
              </span>
              <div className='flex justify-end items-center'>
                <RiDeleteBinLine className='w-[18px] h-[18px] cursor-pointer right-0 text-[#9e9d9d]' onClick={handleRemoveAll}/>
              </div>
            </div>
            {/* Products list  */}
            {cart.products.map((product) => (
                <CartItem
                  product={product}
                  allChecked={allChecked}
                  key={product?._id}
                />
              ))}
          </div>
          {/* Right side  */}
          <div className='bg-[#fff] rounded ml-3  w-full h-fit relative'>
            {/* Total form  */}
            <div className='px-4 py-4 border-b border-solid border-t-0 border-l-0 border-r-0 border-[#e7e7e7]'>
              <div className='flex flex-row justify-between text-sm text-[#333333] mb-3'>
                <span>Tạm tính</span>
                <span>0đ</span>
              </div>
              <div className='flex flex-row justify-between text-sm text-[#333333]'>
                <span>Giảm giá</span>
                <span>0đ</span>
              </div>
            </div>
            <div className='px-4 py-4'>
              <div className='flex flex-row justify-between text-sm text-[#333333] mb-3 whitespace-nowrap'>
                <span>Tổng tiền</span>
                <span className='flex flex-col'>
                  <p className='text-red text-[15px] font-semibold mb-1 whitespace-nowrap'>
                    Vui lòng chọn sản phẩm
                  </p>
                  <span className='text-xs text-right'>
                    (Đã bao gồm VAT nếu có)
                  </span>
                </span>
              </div>
            </div>
            <button className='absolute w-full mt-4 py-3 bg-red rounded outline-none border-none text-white text-[15px] font-semibold cursor-pointer shadow-md justify-center items-center hover:opacity-80'>
              Mua hàng (0)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
