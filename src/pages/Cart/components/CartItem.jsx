import { useState, useEffect } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import NewIcon from "../../../assets/icon/new-icon.gif";
import { removeProductById, updateQuantity, updateStateOfProducts } from "../../../redux/custom/cartHandler";
import { formatPrice } from "../../../utils/formatPrice";

const CartItem = ({ product, allChecked }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [checked, setItemChecked] = useState(allChecked)

  const handleIncreasing = () => {
    const info = {id: product.id, quantity: product.quantity + 1}
    updateQuantity(dispatch, info)
  };

  const handleDescreasing = () => {
    if (product.quantity > 1) {
      const info = {id: product.id, quantity: product.quantity - 1}
      updateQuantity(dispatch, info)
    }
  };

  const handleRemoveProductById = (id) => {
    removeProductById(dispatch, id)
  }

  const handleUpdateStateOfProduct = (product) => {
    updateStateOfProducts(dispatch, product)
  }

  useEffect(()=>{
    setItemChecked(allChecked)
  }, [allChecked])
  
  useEffect(() => {
    setItemChecked(checked)
    handleUpdateStateOfProduct({id:product.id, state: checked})
  }, [checked])


  return (
    <div className='grid grid-cols-[398px_170px_130px_130px_30px] py-8 px-5 bg-white rounded my-1'>
      <div className='flex flex-row justify-between items-center gap-1'>
        <input
          type='checkbox'
          className='min-w-[18px] min-h-[18px] mr-2'
          checked={checked}
          onClick={() => {
            setItemChecked(pre => !pre)
          }}
          readOnly
        />
        <img
          src={product.thumbnails[0]}
          alt={product.title}
          className='max-w-[78px] max-h-[80x] mx-2'
        />
        <div className='flex flex-col pr-4'>
          <p className='text-[13px] leading-5 mb-1 text-[#242424] text-ellipsis line-clamp-2 cursor-pointer hover:text-blue'  onClick={() => {navigate(`/product/${product.id}`)}}>
            {product.title}
          </p>
          <div className='flex flex-row justify-between space-x-2'>
            <div className='flex justify-center items-center gap-1 py-1 px-2 bg-[#f2f0fe] text-xs font-semibold text-[#7263f3] border-[#402de1] border-[0.3px] border-dashed rounded'>
              <img
                src='https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg'
                alt=''
                className=''
              />
              Thương hiệu của {product.brand_name}
            </div>
            <div className='flex items-center'>
              <img
                src={NewIcon}
                alt='new-icon'
                className='max-w-[42px]'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <span className='text-[13px] text-[#242424] font-semibold mr-1'>
          {product.salePrice &&
          product.salePrice > 0
            ? formatPrice(product.salePrice)
            : formatPrice(product.rootPrice)}
        </span>

        {product.salePrice &&
          product.rootPrice > 0 && (
            <del className='text-[11px] line-through text-[#999999] font-medium'>
              {formatPrice(product.rootPrice)}
            </del>
          )}
      </div>
      <div className='flex items-center'>
        <div className='text-[15px] py-4'>
          <div className='flex py-2 '>
            <div
              className={`cursor-pointer border-solid border-[1px] border-[#cacaca] rounded-l w-[26px] h-[26px] flex justify-center items-center z-[1]`}
                onClick={handleDescreasing}
            >
              <BiMinus
                className={`w-[18px] h-[23px] ${
                  product.quantity === 1
                    ? "opacity-20 cursor-not-allowed"
                    : ""
                }`}
              />
            
            </div>
            <div className='border-solid border-[1px] border-[#cacaca] w-8 h-[26px] flex justify-center items-center z-[2]'>
              <input
                className=' w-6 outline-none border-none text-center text-[15px]'
                type={"text"}
                value={product.quantity} // quantityBuy
                readOnly
              />
            </div>
            <div
              className='cursor-pointer border-solid border-[1px] border-[#cacaca] rounded-r w-[26px] h-[26px]  flex justify-center items-center z-[1]'
                onClick={handleIncreasing}
            >
              <BsPlus className='w-[23px] h-[23px] ' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <span className='text-[13px] text-red font-semibold'>
          {product.salePrice &&
          product.salePrice > 0
            ? formatPrice(product.salePrice)
            : formatPrice(product.rootPrice)}
        </span>
      </div>
      <div className='flex justify-end items-center'>
        <RiDeleteBinLine className='w-[18px] h-[18px] cursor-pointer text-[#9e9d9d]' onClick={() => {handleRemoveProductById(product.id)}}/>
      </div>
    </div>
  );
};

export default CartItem;
