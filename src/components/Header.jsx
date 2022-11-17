import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import {
  BiSearchAlt,
  BiUser,
} from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";

import "./css/header.css";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { IoMdArrowDropup } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { logoutAction } from "../redux/custom/authRequest";
import { axiosRequestInterceptor } from "../api/axiosClient";
import {
  Badge,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import { theme } from "../utils/theme";
import { styled } from "@mui/material/styles";

const style = {
  width: "100%",
  bgcolor: "background.paper",
};

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

const Header = (props) => {
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
    <>
      <header className="flex bg-blue w-full items-center justify-center flex-col relative">
        <div className="flex gap-16 py-[15px] px-5 sm:max-w-full md:max-w-[77.5rem] w-full">
          {/* logo-header  */}
          <div className="flex flex-col">
            <a href="/" className="">
              <img
                className="w-[60px] h-10"
                src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                alt="tiki-logo"
              />
            </a>
            <a href="/" className="mt-[13px]">
              <img
                src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
                alt="free-ship-badge"
                width="83px"
                height="12px"
              />
            </a>
          </div>
          <div className="middle-header flex flex-col grow-[3]">
            {/* search-container */}
            <div className="flex flex-row gap-5">
              <div className="flex justify-center items-center grow-[2]">
                <input
                  type="text"
                  className="text-sm font-medium w-full h-10 border-none outline-none px-2.5 rounded-sm drop-shadow-md placeholder:text-sm placeholder:font-light"
                  placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
                />
                <button className="cursor-pointer border-none outline-none bg-[#0D5CB6] flex justify-center items-center h-10 min-w-[120px] py-2.5 px-[15px] text-[13px] font-bold rounded-sm drop-shadow-md ">
                  <BiSearchAlt
                    size={25}
                    className="search-icon"
                  />
                  <span>Tìm kiếm</span>
                </button>
              </div>
              <div className="flex justify-center">
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
                      badgeContent={4}
                      color="yellow"
                      className="mt-[5px] text-white h-1/2"
                    >
                      <FiShoppingCart
                        color={"#fff"}
                        size={30}
                      />
                    </Badge>
                  </ThemeProvider>

                  <span className="text-white text-xs font-extralight ml-[5px] mt-[3px] h-[170%]  flex items-end">
                    Giỏ hàng
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-none">
              <ul className="flex justify-start items-center pt-[5px] ">
                <li className="list-none mr-3">
                  <span className="lowercase text-[11px]">
                    trái cây
                  </span>
                </li>
                <li className="list-none mr-3">
                  <span className="lowercase text-[11px]">
                    thịt, trứng
                  </span>
                </li>
                <li className="list-none mr-3">
                  <span className="lowercase text-[11px]">
                    rau củ quả
                  </span>
                </li>
                <li className="list-none mr-3">
                  <span className="lowercase text-[11px]">
                    sữa, bơ, phô mai
                  </span>
                </li>
                <li className="list-none mr-3">
                  <span className="lowercase text-[11px]">
                    hải sản
                  </span>
                </li>
                <li className="list-none mr-3">
                  <span className="lowercase text-[11px]">
                    gạo, mì ăn liền
                  </span>
                </li>
                <li className="list-none mr-3">
                  <span className="lowercase text-[11px]">
                    đồ uống, bia rượu
                  </span>
                </li>
                <li className="list-none mr-3">
                  <span className="lowercase text-[11px]">
                    bánh kẹo
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
{
  /*             <div className="flex pl-[120px] pt-2.5">
              <div className="flex justify-end items-center text-white w-full h-[22px] px-[10px] rounded-[10px] cursor-pointer"><FaStore size={12} className="storestore-icon" />
                <span>Bán hàng cùng Tiki</span> </div>
            </div>*/
}
export default Header;
