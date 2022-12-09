import Rating from "react-rating";
import {
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";

const RatingChecker = ({ filterByRating }) => {
  return (
    <div className='min-w-[200px] max-w-[200px] bg-white py-3 px-3 rounded-l-sm border-b border-solid border-t-0 border-l-0 border-r-0 border-[#e7e7e7]'>
      <div className='text-[#38383d] text-sm font-semibold pb-3'>
        Đánh giá
      </div>
      {[5, 4, 3].map((rate) => (
        <div
          className='py-1 flex flex-row items-center cursor-pointer'
          key={`rating-${rate}`}
          onClick={() => {
            filterByRating(rate);
          }}
        >
          <Rating
            className='  flex items-center gap-[2px]'
            placeholderRating={rate}
            placeholderSymbol={
              <BsStarFill className='text-[12px] text-[#fdd940]' />
            }
            readonly='true'
            emptySymbol={
              <BsStarFill className='text-[12px] text-[#BCBCBC]' />
            }
            fullSymbol={
              <BsStarHalf className='text-[12px] text-[#fdd940]' />
            }
            fractions={2}
          />
          <div className='ml-2 text-[12px]'>
            từ {rate} sao
          </div>
        </div>
      ))}
    </div>
  );
};

export default RatingChecker;
