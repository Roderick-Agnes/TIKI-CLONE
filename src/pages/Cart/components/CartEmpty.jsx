import { useNavigate } from "react-router-dom";

const CartEmpty = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center bg-white rounded py-10 px-5 gap-4 mb-4'>
      <img
        src='https://salt.tikicdn.com/desktop/img/mascot@2x.png'
        alt=''
        className='max-w-[190px]'
      />
      <p className='text-sm'>
        Không có sản phẩm nào trong giỏ hàng của
        bạn
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
        className='w-60 mt-4 py-3 bg-red rounded outline-none border-none text-white text-[15px] font-semibold cursor-pointer shadow-md justify-center items-center hover:opacity-80'
      >
        Tiếp tục mua sắm
      </button>
    </div>
  );
};

export default CartEmpty;
