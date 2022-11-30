import { useEffect } from "react";
import Rating from "react-rating";
import {
  useParams,
  useSearchParams,
} from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import {
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const Category = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] =
    useSearchParams();
  useEffect(() => {
    setSearchParams({ hello: "world" });
    console.log(searchParams.values);
  }, []);
  return (
    <div className="bg-[#F5F5FA] w-full flex flex-col relative z-[9] laptop:items-center laptop:justify-center">
      <div className="w-full laptop:max-w-[73.75rem] laptop:bg-[#f5f5fa] pb-[4rem] tablet:pb-0">
        <Breadcrumb
          name={"abc"}
          category={null}
        />

        <div className="flex flex-row mb-4">
          {/* filter section */}
          <div className="flex flex-col">
            {/* customer'address */}
            <div className="min-w-[200px] max-w-[200px] bg-white py-3 px-3 rounded-l-sm border-b border-solid border-t-0 border-l-0 border-r-0 border-[#e7e7e7]">
              <div className="text-[#38383d] text-sm font-semibold pb-3">
                Địa chỉ nhận hàng
              </div>
              <div className="text-[12px] whitespace-nowrap underline mb-1">
                Q. 1, P. Bến Nghé, Hồ Chí Minh
              </div>
              <div className="text-xs text-dark-blue font-semibold cursor-pointer">
                Đổi địa chỉ
              </div>
            </div>
            {/* filter by rating */}
            <div className="min-w-[200px] max-w-[200px] bg-white py-3 px-3 rounded-l-sm border-b border-solid border-t-0 border-l-0 border-r-0 border-[#e7e7e7]">
              <div className="text-[#38383d] text-sm font-semibold pb-3">
                Đánh giá
              </div>
              {[5, 4, 3].map((rate) => (
                <div
                  className="py-1 flex flex-row items-center cursor-pointer"
                  key={`rating-${rate}`}
                >
                  <Rating
                    className="  flex items-center gap-[2px]"
                    placeholderRating={rate}
                    placeholderSymbol={
                      <BsStarFill className="text-[12px] text-[#fdd940]" />
                    }
                    readonly="true"
                    emptySymbol={
                      <BsStarFill className="text-[12px] text-[#BCBCBC]" />
                    }
                    fullSymbol={
                      <BsStarHalf className="text-[12px] text-[#fdd940]" />
                    }
                    fractions={2}
                  />
                  <div className="ml-2 text-[12px]">
                    từ {rate} sao
                  </div>
                </div>
              ))}
            </div>
            {/* filter by price */}
            <div className="min-w-[200px] max-w-[200px] bg-white py-3 px-3 rounded-l-sm border-b border-solid border-t-0 border-l-0 border-r-0 border-[#e7e7e7]">
              <div className="text-[#38383d] text-sm font-semibold pb-3">
                Giá
              </div>
              <div className="max-w-[200px] mb-2">
                <div className="mb-2 text-[12px] text-[#808089]">
                  Chọn khoảng giá
                </div>
                <div className="flex flex-row justify-between items-center ">
                  <input
                    type="number"
                    defaultValue={0}
                    className="max-w-[5rem] text-[12px] p-2 rounded-md border-solid border-[0.5px] border-[#c0c0c0] outline-none"
                  />
                  <BiMinus className="text-[#c0c0c0]" />
                  <input
                    type="number"
                    defaultValue={0}
                    className="max-w-[5rem] text-[12px] p-2 rounded-md border-solid border-[0.5px] border-[#c0c0c0] outline-none "
                  />
                </div>
              </div>
              <button className="rounded outline-none border-[0.5px] border-blue bg-white text-blue text-xs w-full p-1 cursor-pointer hover:text-white hover:bg-blue hover:shadow-button">
                Áp dụng
              </button>
            </div>
          </div>
          {/* products */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Category;
