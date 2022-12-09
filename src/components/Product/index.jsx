import { sliceTitleShort } from "../../utils/sliceTitleShort";
import { AiFillStar } from "react-icons/ai";
import { useEffect } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const { info } = props;
  const navigate = useNavigate();
  const {
    _id,
    id,
    title,
    thumbnails,
    rating_average,
    quantitySold,
    rootPrice,
    salePrice,
    discountRate,
    freeShip,
  } = info;

  const getInfomation = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div
        className=' bg-white max-w-[175px] mobile:max-w-[190px] tablet:max-w-[190px]  rounded cursor-pointer hover:shadow-item'
        onClick={() => {
          getInfomation(id);
        }}
      >
        <div className=' bg-white max-w-[190px] max-h-[190px]'>
          <img
            src={thumbnails[0]}
            className='w-full h-full object-cover'
            alt={title}
          />
        </div>
        <div className='my-[0.7rem] px-[0.7rem]'>
          <div className='text-[12px] text-[#38383d] leading-4 min-h-[2rem]'>
            {sliceTitleShort(title, 40)}
          </div>
          <div className='leading-3 flex justify-start items-center mt-[0.2rem]  min-h-[12px]'>
            {rating_average > 0 && (
              <>
                <span className='leading-3 text-[12px] flex justify-start items-center mr-[0.1rem] text-[#808089]'>
                  {rating_average}
                </span>
                <span className=' mr-[0.3rem] leading-3 text-[1rem] flex justify-start items-center  text-[#808089]'>
                  <AiFillStar
                    color='#FDD940'
                    size={"13px"}
                  />
                </span>
              </>
            )}

            {rating_average > 0 &&
              quantitySold?.value > 0 && (
                <>
                  <span className='mr-[0.3rem] leading-3 text-[12px] flex justify-start items-center text-[#808089]'>
                    |
                  </span>
                  <span className='leading-3 text-[11px] flex justify-start items-center mr-[0.1rem] text-[#808089]'>
                    Đã bán {quantitySold?.value}
                  </span>
                </>
              )}
          </div>
          <div className='mt-4 leading-4 min-h-[1rem] pb-[0.5rem]'>
            {salePrice > 0 && (
              <span className='font-bold text-[1rem] text-[#fe4b57]'>
                {formatPrice(salePrice)}
              </span>
            )}
            {salePrice === 0 && (
              <span className='font-bold text-[1rem] text-[#38383D]'>
                {formatPrice(rootPrice)}
              </span>
            )}
            {discountRate > 0 && (
              <span className='font-bold text-[12px] ml-[5px] text-[#fe4b57]'>
                -{discountRate}%
              </span>
            )}
          </div>

          {freeShip && (
            <div className='min-h-[1rem] mt-[0.5rem] flex justify-start items-center'>
              <span className='border-solid border-[0.5px] border-[#1a94ff] rounded-[0.1rem] text-[10px] p-[0.2rem] text-[#1a94ff]'>
                Freeship+
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
