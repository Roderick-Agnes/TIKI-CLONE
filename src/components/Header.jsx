import React from 'react';
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaStore } from "react-icons/fa";
import { Badge } from "antd";

import "./css/header.css";

const Header = () => {

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
              <div className="auth-container">
                <BiUser color={"#fff"} size={32} />
                <a href="#">
                  <span>Đăng nhập / Đăng ký</span>
                  <p>
                    Tài khoản
                    <IoMdArrowDropdown size={16} />
                  </p>
                </a>
              </div>
              <div className="cart-container">
                <FiShoppingCart color={"#fff"} size={32} />
                <Badge count={0} className="cart-badge" showZero />
                <span className="cart-title">Giỏ hàng</span>
              </div>
            </div>
            <div className="store-container">
              <div className="btn-store-together">
                <FaStore size={12} className="storestore-icon" />
                <span>Bán hàng cùng Tiki</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
};

export default Header;
