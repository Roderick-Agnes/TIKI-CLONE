import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Rating from "react-rating";
import { formatPrice } from "../../utils/formatPrice";
import {
  BsStar,
  BsStarFill,
  BsStarHalf,
  BsPlus,
} from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import NewIcon from "../../assets/icon/new-icon.gif";
import { number } from "yup";
import { useRef } from "react";
import { useEffect } from "react";
import productApi from "../../api/productApi";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  onLoading,
  offLoading,
} from "../../redux/custom/loader";
import { memo } from "react";
import { useCallback } from "react";
import { htmlFrom } from "../../utils/validateHtmlString";
import "./index.css";

const breadcrumbs = [
  "Trang chủ",
  "Điện thoại Smartphone",
  "Phone name",
];

const Detail = () => {
  const [indexActive, setIndexActive] =
    useState(0);
  const [productData, setProductData] =
    useState();
  const dispatch = useDispatch();
  const { id } = useParams();
  const loader = useSelector(
    (state) => state.loader,
  );
  const fetchProductData = async () => {
    onLoading(dispatch);
    const product =
      await productApi.getProductById(id);
    if (product) {
      console.log("product: ", product);
      setProductData(product?.data);
      offLoading(dispatch);
    } else {
      console.log("No product");
      offLoading(dispatch);
    }
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  const [quantityBuy, setQuantityBuy] =
    useState(1);

  const handleIncreasing = () => {
    setQuantityBuy(quantityBuy + 1);
  };

  const handleDescreasing = () => {
    if (quantityBuy > 1)
      setQuantityBuy(quantityBuy - 1);
  };

  const handleShowImage = (idx) => {
    setIndexActive(idx);
  };

  return (
    <>
      <div className="bg-[#F5F5FA] w-full flex flex-col relative z-[9] laptop:items-center laptop:justify-center">
        <div className="w-full laptop:max-w-[73.75rem] laptop:bg-[#f5f5fa] pb-[4rem] tablet:pb-0">
          <Breadcrumb titles={breadcrumbs} />

          {/* product overview */}
          <div className="tablet:flex tablet:flex-row">
            {/* Left section - Product silder images */}
            <div className="w-full p-4 bg-[#fff] rounded-l-md laptop:w-[40%]">
              <img
                src={
                  productData?.thumbnails[
                    indexActive
                  ]
                }
                className="object-cover w-full laptop:w-[444px] laptop:h-[444px]"
                alt={productData?.title}
              />
              <div className="flex flex-row justify-center space-x-3 pt-2 x-mobile:flex-wrap x-mobile:gap-3">
                {productData?.thumbnails.map(
                  (thumbnail, idx) => {
                    return (
                      <div
                        key={`thumbnail-product-${idx}`}
                        className={`max-w-[64px] max-h-[64px]  ${
                          idx > 4 ? "hidden" : ""
                        } cursor-pointer `}
                        onClick={() => {
                          handleShowImage(idx);
                        }}
                      >
                        <img
                          className={`object-cover w-[64px] rounded ${
                            indexActive === idx
                              ? "border-solid border-[1px] border-blue"
                              : ""
                          }`}
                          src={thumbnail}
                          alt={`thumbnail-product-${idx}`}
                        />
                      </div>
                    );
                  },
                )}
              </div>
            </div>

            {/* Right section - Product infomation */}
            <div className="laptop:w-[60%] p-4 bg-[#fff] rounded-r-md">
              {/* Brand name of product */}
              <span className="text-[13px] text-main">
                Thương hiệu:{" "}
                {productData?.brand_name.map(
                  (brand, idx) => {
                    return (
                      <span
                        key={`brand-name-${idx}`}
                        className="text-blue"
                      >
                        {brand}
                      </span>
                    );
                  },
                )}
              </span>
              {/* Product name */}
              <h1 className="text-[#504d4d] text-2xl font-light break-words py-2">
                {productData?.title}
              </h1>
              {/* Avg rating */}
              <div className="text-sm text-[#787878] font-light flex items-center space-x-2 pb-2">
                <Rating
                  className="space-x-1 text-base leading-4 text-[#fdd940]"
                  placeholderRating={
                    productData?.rating_average
                  }
                  placeholderSymbol={
                    <BsStarFill className="" />
                  }
                  readonly="true"
                  emptySymbol={<BsStar />}
                  fullSymbol={<BsStarHalf />}
                  fractions={2}
                />
                <span>
                  ({productData?.review_count}{" "}
                  đánh giá)
                </span>

                {productData?.quantitySold && (
                  <>
                    <span> | </span>
                    <span>
                      Đã bán{" "}
                      {
                        productData?.quantitySold
                          .value
                      }
                    </span>
                  </>
                )}
              </div>
              {/* Prices infomation of product */}
              <div className=" bg-[#fafafa] rounded p-4">
                <div className="flex space-x-2 pb-2">
                  <div
                    className={`${
                      productData?.discountRate >
                      0
                        ? "text-red"
                        : "text-[#38383d]"
                    } text-[32px] font-semibold`}
                  >
                    {formatPrice(
                      parseInt(
                        productData?.salePrice,
                      ),
                    )}
                  </div>
                  <div
                    className={` ${
                      productData?.discountRate ===
                      0
                        ? "hidden "
                        : "flex "
                    } flex-row items-end text-sm space-x-2 font-semibold `}
                  >
                    <span className="line-through text-[#808089] font-medium">
                      {formatPrice(
                        parseInt(
                          productData?.rootPrice,
                        ),
                      )}
                    </span>
                    <span className="text-red">
                      {-productData?.discountRate}
                      %
                    </span>
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="flex justify-center items-center gap-1 py-1 px-2 bg-[#f2f0fe] text-sm font-semibold text-[#7263f3] border-[#402de1] border-[0.3px] border-dashed rounded">
                    <img
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                      alt=""
                      className=""
                    />
                    May mắn giảm thêm{" "}
                    {formatPrice(15000)}
                  </div>
                  <div className="flex items-center">
                    <img
                      src={NewIcon}
                      alt="new-icon"
                      className="max-w-[42px]"
                    />
                  </div>
                </div>
              </div>
              {/* Quantity product handler */}
              <div className="text-[15px] py-4">
                <div>Số lượng</div>
                <div className="flex py-2">
                  <div
                    className={`cursor-pointer border-solid border-[0.7px] border-[#ececec] rounded-l w-8 h-8 flex justify-center items-center`}
                    onClick={handleDescreasing}
                  >
                    <BiMinus
                      className={`w-6 h-6 font-thin  ${
                        quantityBuy === 1
                          ? "opacity-20 cursor-not-allowed"
                          : ""
                      }`}
                    />
                  </div>
                  <div className="border-solid border-[0.7px] border-[#ececec] w-10 h-8 flex justify-center items-center">
                    <input
                      className=" w-6 h-6 outline-none border-none text-center text-lg"
                      type={"text"}
                      value={quantityBuy}
                      readOnly
                    />
                  </div>
                  <div
                    className="cursor-pointer border-solid border-[0.7px] border-[#ececec] rounded-r w-8 h-8 flex justify-center items-center"
                    onClick={handleIncreasing}
                  >
                    <BsPlus className=" w-6 h-6" />
                  </div>
                </div>
              </div>
              {/* Add to cart button */}
              <div className="laptop:max-w-[250px]">
                <button className="w-full py-4 bg-red rounded outline-none border-none text-white text-[15px] font-semibold cursor-pointer shadow-md justify-center items-center hover:opacity-80">
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>

          {/* product infomation */}
          <div className="bg-white px-4 py-4 my-4">
            <div className=" text-[20px] text-[#333333]">
              Thông tin sản phẩm
            </div>
            <div className="pt-2 product__infomation">
              <table className="">
                <tbody>
                  {productData?.information &&
                    productData?.information.map(
                      (info, idx) => {
                        return (
                          <tr
                            key={`row-${idx}`}
                            className="text-[13px]"
                          >
                            <td className="w-[220px] text-[#2b2a2a]  font-semibold py-[10px] px-[15px] bg-[#efefef]">
                              {info.name}
                            </td>
                            <td
                              className={`py-[10px] px-[15px] text-[#242424] leading-5 ${
                                idx % 2 > 0
                                  ? " bg-[#fafafa]"
                                  : ""
                              }`}
                            >
                              {info.value &&
                                htmlFrom(
                                  info.value,
                                )}
                            </td>
                          </tr>
                        );
                      },
                    )}
                </tbody>
              </table>
            </div>
          </div>

          {/* product description */}
          <div className="bg-white px-4 py-4 my-4 x-mobile:mb-0 mobile:mb-0">
            <div className=" text-[20px] text-[#333333]">
              Mô tả sản phẩm
            </div>
            <div
              className="pt-2 product__description"
              dangerouslySetInnerHTML={{
                __html: productData?.description,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
