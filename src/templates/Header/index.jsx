import { FiShoppingCart } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import {
  Badge,
  ThemeProvider,
} from "@mui/material";
import { AiOutlineAppstore } from "react-icons/ai";
import { theme } from "../../utils/theme";
import Slider from "react-slick";

const Header = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <header className="bg-blue w-full pt-[2rem] px-[0.7rem] top-0 sticky z-10">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between pb-2 w-full">
          {/* <div className="w-auto h-[2rem]"> */}
          <div>
            <img
              className="w-[60px] h-10"
              src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
              alt="tiki-logo"
            />
          </div>
          <div className="flex flex-row justify-between items-center text-white  gap-[0.5rem]">
            <div className="cursor-pointer">
              <IoMdNotificationsOutline className="w-auto h-[2rem]" />
            </div>
            <div className="relative w-full cursor-pointer">
              <ThemeProvider theme={theme}>
                <Badge
                  badgeContent={0}
                  color="yellow"
                  className=" text-white"
                >
                  <FiShoppingCart className="w-auto h-[1.7rem]" />
                </Badge>
              </ThemeProvider>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full relative block">
            <span className="sr-only">
              Search
            </span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <BiSearchAlt
                size={23}
                className="text-slate-400"
              />
            </span>
            <input
              type="text"
              className="placeholder:italic placeholder:text-slate-400 block w-full outline-none border-none rounded-sm pl-[2.2rem] pr-2 py-2 shadow-md  focus:text-slate-600"
              placeholder="Bạn cần tìm gì ?"
              name="search"
            />
          </div>
          <div className="my-2 py-[0.5rem] relative">
            <Slider
              key={"menu"}
              {...settings}
              className=""
            >
              <span className="w-fit lowercase text-white pr-[1rem]">
                trái cây
              </span>
              <span className="w-fit lowercase text-white pr-[1rem]">
                thịt, trứng
              </span>
              <span className="w-fit lowercase text-white pr-[1rem]">
                rau củ quả
              </span>
              <span className="w-fit lowercase text-white pr-[1rem]">
                sữa, bơ, phô mai
              </span>
              <span className="w-fit lowercase text-white pr-[1rem]">
                hải sản
              </span>
              <span className="w-fit lowercase text-white pr-[1rem]">
                gạo, mì ăn liền
              </span>
              <span className="w-fit lowercase text-white pr-[1rem]">
                đồ uống, bia rượu
              </span>
              <span className="w-fit lowercase text-white pr-[1rem]">
                bánh kẹo
              </span>
            </Slider>
            <div className="absolute top-0 right-0  mt-1 flex justify-center items-center text-white bg-blue">
              <AiOutlineAppstore size={30} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
