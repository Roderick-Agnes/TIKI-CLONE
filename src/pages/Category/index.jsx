import { useState, useEffect } from "react";
import Rating from "react-rating";
import {
  useLocation,
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
import Products from "../../components/Products";
import productApi from "../../api/productApi";
import queryString from "query-string";

let queryParams = {
  _page: 1,
  _limit: 40,
};
const filterItems = [
  { title: "Bán chạy", code: "selling" },
  { title: "Hàng mới", code: "new" },
  { title: "Giá thấp đến cao", code: "asc" },
  { title: "Giá cao đến thấp", code: "desc" },
];

const Category = () => {
  const [category, setCategory] = useState();
  const [filterActive, setFilterActive] =
    useState(0);
  const { id } = useParams();
  const [searchParams, setSearchParams] =
    useSearchParams();
  const location = useLocation();
  const urlParams = queryString.parse(
    location.search,
  );

  const fetchProductsByCategoryId = async () => {
    try {
      const data =
        await productApi.getProductsByCategoryId(
          id,
          queryParams,
        );
      return data;
    } catch (error) {
      console.log("Failed to fetch data");
    }
  };

  useEffect(() => {
    (async () => {
      const data =
        await fetchProductsByCategoryId();
      if (data) {
        setCategory(data.data[0]);
        console.log(data.data[0]);
      }
    })();
  }, []);

  return (
    <div className="bg-[#F5F5FA] w-full flex flex-col relative z-[9] laptop:items-center laptop:justify-center">
      <div className="w-full laptop:max-w-[75rem] laptop:bg-[#f5f5fa] pb-[4rem] tablet:pb-0">
        {category && (
          <Breadcrumb
            category={null}
            name={category?.title}
          />
        )}

        <div className="flex flex-row mb-4 gap-3">
          {/* filter section - left */}
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
          {/* products - right */}
          <div className="flex flex-col gap-1">
            {/* filter navbar */}
            <div className="flex flex-row justify-between px-4  w-full  bg-white border-b border-solid border-t-0 border-l-0 border-r-0 border-[#e7e7e7]">
              <div className="py-4  w-full flex flex-row relative">
                {filterItems.map(
                  (filter, idx) => (
                    <div
                      key={`filter-${filter.code}`}
                      className={`flex flex-col justify-center items-center cursor-pointer mx-4 first:mr-4 first:ml-0 last:ml-4 last:mr-0 
                      hover:content-[''] hover:text-co hover:font-semibold hover:text-blue ${
                        filterActive === idx
                          ? "font-semibold text-blue"
                          : `hover:rounded hover:border-b-4 hover:border-solid hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-blue`
                      } `}
                      onClick={() => {
                        setFilterActive(idx);
                      }}
                    >
                      <span
                        className={` text-sm pb-1 whitespace-pre-line`}
                      >
                        {filter.title}
                      </span>
                      <span
                        className={`w-[40px] z-10 rounded border-b-4 border-solid border-t-0 border-l-0 border-r-0 border-blue ${
                          filterActive === idx
                            ? "block"
                            : "hidden"
                        }`}
                      ></span>
                    </div>
                  ),
                )}
              </div>
              <div className=""></div>
            </div>
            {/* products list after filter */}
            <Products
              products={category?.products}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
