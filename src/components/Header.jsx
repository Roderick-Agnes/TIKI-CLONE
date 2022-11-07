import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { Badge } from "antd";
import "./css/header.css";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowDropup } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { logoutAction } from "../redux/custom/authRequest";
import { useEffect } from "react";
import { useCallback } from "react";

const style = {
  width: "100%",
  bgcolor: "background.paper",
};

const Header = (props) => {
  const { togglePopup } = props;
  const [showOptions, setShowOptions] = useState(false);
  const userInfo = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const toggleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleLogout = async () => {
    const accessToken = userInfo.info.accessToken;
    console.log(accessToken);
    await logoutAction(
      {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      },
      dispatch,
      toggleShowOptions
    );
  };

  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo-header">
            <a href="/">
              <img
                src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                alt="tiki-logo"
              />
            </a>
            <a href="/">
              <img
                src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
                alt="free-ship-badge"
                width="83px"
                height="12px"
              />
            </a>
          </div>
          <div className="middle-header">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
              />
              <button className="search-button">
                <BiSearchAlt size={20} className="search-icon" />
                <span>Tìm kiếm</span>
              </button>
            </div>
            <div className="category-search-container">
              <ul className="category-links">
                <li>
                  <a href="#">trái cây</a>
                </li>
                <li>
                  <a href="#">thịt, trứng</a>
                </li>
                <li>
                  <a href="#">rau củ quả</a>
                </li>
                <li>
                  <a href="#">sữa, bơ, phô mai</a>
                </li>
                <li>
                  <a href="#">hải sản</a>
                </li>
                <li>
                  <a href="#">gạo, mì ăn liền</a>
                </li>
                <li>
                  <a href="#">đồ uống, bia rượu</a>
                </li>
                <li>
                  <a href="#">bánh kẹo</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="end-header">
            <div className="end-header-container">
              <div
                className="auth-container"
                onClick={() => {
                  !userInfo.info ? togglePopup() : toggleShowOptions();
                }}
              >
                <BiUser color={"#fff"} size={32} />
                <span>
                  {!userInfo.info ? (
                    <span>Đăng nhập / Đăng ký</span>
                  ) : (
                    <span>Tài khoản</span>
                  )}

                  <p>
                    {userInfo.info ? userInfo.info?.username : "Tài khoản"}
                    <IoMdArrowDropdown size={16} />
                  </p>
                </span>
                {userInfo.info && showOptions && (
                  <div className="options">
                    <div className="head__icon">
                      <IoMdArrowDropup size={30} color={"#fff"} />
                    </div>
                    <div className="user__option">
                      <List sx={style} component="nav" aria-label="mailbox folders">
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
                        <ListItem button onClick={handleLogout}>
                          <ListItemText primary="Đăng xuất" /> <CiLogout />
                        </ListItem>
                      </List>
                    </div>
                  </div>
                )}
              </div>
              <div className="cart-container">
                <FiShoppingCart color={"#fff"} size={32} />
                <Badge count={0} className="cart-badge" showZero />
                <span className="cart-title">Giỏ hàng</span>
              </div>
            </div>
            <div className="store-container">
              <div className="btn-store-together">
                {/* <FaStore size={12} className="storestore-icon" />
                <span>Bán hàng cùng Tiki</span> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
