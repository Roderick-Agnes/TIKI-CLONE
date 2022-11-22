import { FiShoppingCart } from "react-icons/fi";
import {
  IoMdNotificationsOutline,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";
import {
  BiSearchAlt,
  BiUser,
} from "react-icons/bi";
import {
  Badge,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import { theme } from "../../utils/theme";
import { AiOutlineAppstore } from "react-icons/ai";
import Slider from "react-slick";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { logoutAction } from "../../redux/custom/authRequest";
import { axiosRequestInterceptor } from "../../api/axiosClient";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(
  ({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 0,
      top: 0,
      // border: `2px solid ${theme.palette.background.paper}`,
      background: "orange",
      padding: "0 4px",
      textColor: "white",
    },
  }),
);

const style = {
  width: "100%",
  bgcolor: "background.paper",
};

const Header = (props) => {
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

  const { togglePopup } = props;
  const [showOptions, setShowOptions] =
    useState(false);
  const userInfo = useSelector(
    (state) => state?.user || null,
  );
  const accessToken = userInfo?.info?.accessToken;

  const dispatch = useDispatch();

  const toggleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleLogout = async () => {
    const interceptor =
      await axiosRequestInterceptor(
        userInfo,
        dispatch,
      );
    try {
      await logoutAction(
        {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        },
        dispatch,
        toggleShowOptions,
        interceptor,
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="bg-blue w-full py-[2rem] px-[0.7rem] top-0 sticky z-10 laptop:py-0 laptop:px-0 laptop:flex laptop:flex-col laptop:items-center laptop:relative ">
      <div className="laptop:flex laptop:justify-between  laptop:gap-16 laptop:py-[15px] laptop:px-0 max-w-full laptop:w-[73.75rem] w-full">
        <div className="flex flex-col laptop:flex-row laptop:w-full laptop:justify-between">
          <div className="flex laptop:block flex-row justify-between pb-2 laptop:pb-0 w-full laptop:w-fit">
            {/* <div className="w-auto h-[2rem]"> */}
            <div>
              <div className="flex flex-col">
                <a href="/" className="">
                  <img
                    className="w-[60px] h-10"
                    src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                    alt="tiki-logo"
                  />
                </a>
                <a
                  href="/"
                  className="mt-1 hidden laptop:block"
                >
                  <img
                    src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
                    alt="free-ship-badge"
                    width="83px"
                    height="12px"
                  />
                </a>
              </div>
            </div>
            <div className="laptop:hidden flex flex-row justify-between items-center text-white mr-1 gap-[0.1rem]">
              <div className="cursor-pointer">
                <IconButton aria-label="cart">
                  <StyledBadge
                    badgeContent={1}
                    // color="secondary"
                    className=" text-white"
                  >
                    <IoMdNotificationsOutline className="w-auto h-[2rem] text-white" />
                  </StyledBadge>
                </IconButton>
              </div>
              <div className="relative cursor-pointer">
                <IconButton aria-label="cart">
                  <StyledBadge
                    badgeContent={1}
                    // color="secondary"
                    className=" text-white"
                  >
                    <FiShoppingCart className="w-auto h-[1.85rem] text-white" />
                  </StyledBadge>
                </IconButton>
              </div>
            </div>
          </div>
          <div className="flex flex-col laptop:grow-[3] w-full">
            <div className="laptop:flex flex-row w-full laptop:justify-end">
              <div className="flex flex-row justify-center">
                <div className=" w-full  relative block    laptop:w-[626px]">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2 tablet:hidden">
                    <BiSearchAlt
                      size={23}
                      className="text-slate-400"
                    />
                  </span>
                  <div className="laptop:flex laptop:flex-col">
                    <input
                      type="text"
                      className="placeholder:text-slate-400 block w-full h-10 leading-10 text-[13px] outline-none border-none rounded-sm pl-[2.2rem] tablet:pl-2 pr-2  py-2 shadow-md "
                      placeholder="Tìm sản phẩm mong muốn..."
                      name="search"
                    />
                    <div className="mt-2 py-[0.2rem] relative hidden laptop:block laptop:text-[11px] laptop:w-full">
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

                      <div className="laptop:hidden laptop:left-0 absolute top-0 right-0  mt-1 flex justify-center items-center text-white bg-blue">
                        <AiOutlineAppstore
                          size={30}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="hidden cursor-pointer border-none outline-none bg-[#0D5CB6] tablet:flex justify-center items-center h-10 min-w-[120px] py-2.5 px-[15px] text-[13px] font-bold rounded-sm drop-shadow-md ">
                  <BiSearchAlt
                    size={25}
                    className="search-icon"
                  />
                  <span>Tìm kiếm</span>
                </button>
                {/* <div className="laptop:flex laptop:justify-center laptop:items-center laptop:grow-[2]"></div> */}
              </div>
              <div className="hidden laptop:flex justify-center">
                <div
                  className="flex flex-col justify-start cursor-pointer px-2.5 relative h-full"
                  onClick={() => {
                    !userInfo.info
                      ? togglePopup()
                      : toggleShowOptions();
                  }}
                >
                  <div className="flex flex-row h-1/2 w-full">
                    <BiUser
                      color={"#fff"}
                      size={35}
                    />
                    <span className="flex flex-col items-start py-0.75 px-0.5 text-white h-full">
                      {!userInfo.info ? (
                        <span className="text-[11px] ">
                          Đăng nhập / Đăng ký
                        </span>
                      ) : (
                        <span className="text-[11px] ">
                          Tài khoản
                        </span>
                      )}

                      <p className="text-[13px] flex justify-center items-center">
                        {userInfo.info
                          ? userInfo.info
                              ?.username
                          : "Tài khoản"}
                        <IoMdArrowDropdown
                          size={16}
                        />
                      </p>
                    </span>
                  </div>
                  {userInfo.info && showOptions && (
                    <div className="flex flex-col absolute mt-[5px] w-full z-[14]">
                      <div className="  flex flex-row justify-center mt-[29px]  z-[14]">
                        <IoMdArrowDropup
                          size={30}
                          color={"#fff"}
                        />
                      </div>
                      <div className="absolute left-[-55px] mt-[48px] border-[1px] border-solid border-[#EFEFEF] bg-white min-w-[246px] z-[15] list-none m-0 rounded-bl-[3px] drop-shadow-md ">
                        <List
                          sx={style}
                          component="nav"
                          aria-label="mailbox folders"
                        >
                          <ListItem button>
                            <ListItemText primary="Đơn hàng của tôi" />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary="Tài khoản của tôi" />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary="Đánh giá sản phẩm" />
                          </ListItem>
                          <Divider />
                          <ListItem
                            button
                            onClick={handleLogout}
                          >
                            <ListItemText primary="Đăng xuất" />{" "}
                            <CiLogout />
                          </ListItem>
                        </List>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative flex justify-center cursor-pointer h-1/2">
                  <ThemeProvider theme={theme}>
                    <Badge
                      badgeContent={1}
                      color="yellow"
                      className="mt-[5px] text-white h-1/2"
                    >
                      <FiShoppingCart
                        color={"#fff"}
                        size={30}
                      />
                    </Badge>
                  </ThemeProvider>

                  <span className="text-white text-xs font-extralight ml-[5px] mb-[3px]  flex items-end">
                    Giỏ hàng
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
