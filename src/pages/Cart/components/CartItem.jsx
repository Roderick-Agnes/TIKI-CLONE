import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import NewIcon from "../../../assets/icon/new-icon.gif";
import { formatPrice } from "../../../utils/formatPrice";
const product = {
  _id: "638253ce4479bac1465ea53c",
  id: "175193744",
  title:
    "Giày Thể Thao Nam Biti's Hunter Core Festive 3D",
  category: [
    {
      _id: "636bbdfee1aebb6d94d79013",
      id: "6826",
      title: "Giày thể thao nam",
      thumbnail:
        "https://salt.tikicdn.com/cache/280x280/ts/product/6e/10/a8/dc5f0c121e6937d61d2599240fa8f8dd.jpg",
      createdAt: "2022-11-09T14:49:34.453Z",
      updatedAt: "2022-11-09T14:49:34.453Z",
      __v: 0,
    },
  ],
  brand_name: "Biti's",
  short_description:
    "  Phiên bản dòng Hunter Core ứng dụng cao cùng công nghệ vải 3D-LiteKnit  Với chất liệu có sự đàn hồi cao, ôm gọn chân và phần lưới bao quanh đem lại cảm giác êm mềm, thông thoáng cho mọi hoạt động ...",
  description:
    "<p> </p>\n<div> </div>\n<p><span>Phiên bản dòng Hunter Core ứng dụng cao cùng công nghệ vải 3D-LiteKnit </span> <span>Với chất liệu có sự đàn hồi cao, ôm gọn chân và phần lưới bao quanh đem lại cảm giác êm mềm, thông thoáng cho mọi hoạt động mỗi ngày.</span> <span>Màu sắc cơ bản, dễ dàng mix &amp; match với những bộ đồ đi làm, đi học hàng ngày. </span> <span>- </span><strong><span>LƯỚI DỆT 3D-LITEKNIT:</span></strong><span> Vải Knit bế đường gân nổi, phần lưới được thiết kế nhiều lỗ tối ưu hoá khả năng thoáng khí.</span> <span>- </span><strong><span>ĐẾ GIỮA PHYLON:</span></strong><span> cải tiến độ êm, uốn gấp &amp; đàn hồi tốt hơn, chống xốc, giảm chấn phản lực từ mặt&amp;l</span></p>\n<p> </p><p>Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....</p>",
  salePrice: 799000,
  discount: 0,
  discountRate: 0,
  rootPrice: 799000,
  quantitySold: {
    text: "Đã bán 2",
    value: 2,
  },
  thumbnails: [
    "https://salt.tikicdn.com/cache/280x280/ts/product/a9/58/b2/277dfa4aa25973864c77b22f837fea50.jpg",
    "https://salt.tikicdn.com/cache/280x280/ts/product/e2/94/0b/a67cc12d63d86a4084d8eaf3bdf6658b.jpg",
    "https://salt.tikicdn.com/cache/280x280/ts/product/54/47/b7/348509c13e6e68f35b3162d7cac02f27.jpg",
    "https://salt.tikicdn.com/cache/280x280/ts/product/d1/4e/35/76e4f5b3061397b97be49c2c4ed28c54.jpg",
  ],
  rating_average: 3,
  review_count: 2,
  createdAt: "2022-11-27T17:46:45.024Z",
  updatedAt: "2022-11-27T17:46:45.024Z",
  information: [
    {
      code: "brand",
      name: "Thương hiệu",
      value: "Biti's",
    },
    {
      code: "brand_country",
      name: "Xuất xứ thương hiệu",
      value: "Việt Nam",
    },
    {
      code: "origin",
      name: "Xuất xứ",
      value: "Việt Nam",
    },
  ],
};
const CartItem = () => {
  return (
    <div className='grid grid-cols-[398px_170px_130px_130px_30px] py-8 px-5 bg-white rounded my-1'>
      <div className='flex flex-row justify-between items-center gap-1'>
        <input
          type='checkbox'
          className='w-[18px] h-[18px]'
        />
        <img
          src={product.thumbnails[0]}
          alt={product.title}
          className='max-w-[78px] max-h-[80x] mx-2'
        />
        <div className='flex flex-col pr-4'>
          <p className='text-[13px] leading-5 mb-1 text-[#242424] text-ellipsis line-clamp-2 cursor-pointer hover:text-blue'>
            {product.title}
          </p>
          <div className='flex flex-row space-x-2'>
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
              //   onClick={handleDescreasing}
            >
              {/* <BiMinus
                className={`w-6 h-6 font-thin  ${
                  quantityBuy === 1
                    ? "opacity-20 cursor-not-allowed"
                    : ""
                }`}
              /> */}
              <BiMinus className='w-[18px] h-[23px] ' />
            </div>
            <div className='border-solid border-[1px] border-[#cacaca] w-8 h-[26px] flex justify-center items-center z-[2]'>
              <input
                className=' w-6 outline-none border-none text-center text-[15px]'
                type={"text"}
                value={1} // quantityBuy
                readOnly
              />
            </div>
            <div
              className='cursor-pointer border-solid border-[1px] border-[#cacaca] rounded-r w-[26px] h-[26px]  flex justify-center items-center z-[1]'
              //   onClick={handleIncreasing}
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
        <RiDeleteBinLine className='w-[18px] h-[18px] cursor-pointer text-[#9e9d9d]' />
      </div>
    </div>
  );
};

export default CartItem;
