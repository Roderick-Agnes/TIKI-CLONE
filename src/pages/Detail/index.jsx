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

const breadcrumbs = [
  "Trang chủ",
  "Điện thoại Smartphone",
  "Phone name",
];
const product = {
  brand_name: ["Tecno"],
  title:
    "Điện thoại Gaming Tecno POVA 4 PRO 8GB/128GB - Media Tek G99 | 6000 mAh | Sạc nhanh 45W - Hàng Chính Hãng",
  thumbnails: [
    "https://salt.tikicdn.com/cache/750x750/ts/product/b2/2c/44/caa24bf38721f9b9ea0e10ad8ee9e35b.png",
    "https://salt.tikicdn.com/cache/750x750/ts/product/e7/8b/47/9e24b1b1e277287123a08c4c084ce8dc.png",
    "https://salt.tikicdn.com/cache/750x750/ts/product/08/3e/1d/d0d35e6f160a7c5f9d24b6efa109d5a2.png",
    "https://salt.tikicdn.com/cache/750x750/ts/product/13/40/43/fec58606a6335d2432ed2f916e7d3d47.png",
    "https://salt.tikicdn.com/cache/750x750/ts/product/a8/c5/1c/a02dad9166fc2262b755b8e75ba6ffc8.png",
    "https://salt.tikicdn.com/cache/750x750/ts/product/a8/c5/1c/a02dad9166fc2262b755b8e75ba6ffc8.png",
  ],
  rating_average: 4.5,
  review_count: 114,
  quantitySold: 325,
  rootPrice: 199000,
  salePrice: 135000,
  discountRate: 32,
};

const Detail = () => {
  const [indexActive, setIndexActive] =
    useState(0);

  const [quantityBuy, setQuantityBuy] =
    useState(1);

    const {id} = useParams();

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

  useEffect(() => {
    fetchProductData();
  }, [])

  const fetchProductData = async () => {
    console.log("product id: " , id)
    const product = await productApi.getProductById(id)
  }

  return (
    <>
      {/* breadcrumb */}
      <div className="bg-[#F5F5FA] w-full flex flex-col relative z-[9] laptop:items-center laptop:justify-center">
        <div className="w-full laptop:max-w-[73.75rem] laptop:bg-[#f5f5fa] px-4">
          <Breadcrumb titles={breadcrumbs} />
        </div>
      </div>
      <main className="bg-[#F5F5FA] w-full flex flex-col relative z-[9] laptop:items-center laptop:justify-center">
        <div className="w-full laptop:max-w-[73.75rem] laptop:bg-[#f5f5fa]">
          <div className="tablet:flex tablet:flex-row">
            {/* Left section - Product silder images */}
            <div className="w-full p-4 bg-[#fff] rounded-l-md laptop:w-[40%]">
              <img
                src={
                  product.thumbnails[indexActive]
                }
                className="object-cover w-full laptop:w-[444px] laptop:h-[444px]"
                alt={product.title}
              />
              <div className="flex flex-row justify-between pt-2">
                {product?.thumbnails.map(
                  (thumbnail, idx) => {
                    return (
                      <div
                        key={
                          "thumbnail-product-" +
                          idx
                        }
                        className={`max-w-[64px] max-h-[64px] cursor-pointer  ${idx > 4 ? "hidden tablet:flex" : ""}`}
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
                          alt={
                            "thumbnail-product-" +
                            idx
                          }
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
                {product.brand_name.map(
                  (brand, idx) => {
                    return (
                      <span
                        key={"brand-name-" + idx}
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
                {product.title}
              </h1>
              {/* Avg rating */}
              <div className="text-sm text-[#787878] font-light flex items-center space-x-2 pb-2">
                <Rating
                  className="space-x-1 text-base leading-4 text-[#fdd940]"
                  placeholderRating={
                    product.rating_average
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
                  ({product.review_count} đánh
                  giá)
                </span>
                <span> | </span>
                <span>
                  Đã bán {product.quantitySold}
                </span>
              </div>
              {/* Prices infomation of product */}
              <div className=" bg-[#fafafa] rounded p-4">
                <div className="flex space-x-2 pb-2">
                  <div className="text-red text-[32px] font-semibold">
                    {formatPrice(
                      product.salePrice,
                    )}
                  </div>
                  <div className="flex flex-row items-end text-sm space-x-2 font-semibold">
                    <span className="line-through text-[#808089] font-medium">
                      {formatPrice(
                        product.rootPrice,
                      )}
                    </span>
                    <span className="text-red">
                      {-product.discountRate}%
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
        </div>
      </main>
    </>
  );
};

export default Detail;
