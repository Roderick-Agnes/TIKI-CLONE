import "./index.css";
import { GrClose } from "react-icons/gr";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { TfiFacebook } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export const LoginComponent = (props) => {
  const { showPassword, setShowPassword, isLoginAction, setIsLoginAction } = props;
  return (
    <>
      <div className="title">
        <h4>Đăng nhập bằng email</h4>
        <p>Nhập email và mật khẩu</p>
      </div>
      <form action="" className="auth__form">
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Tên người dùng"
        />
        <input
          className="password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Mật khẩu"
        />
        <span
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          style={{ top: "32%" }}
          className="statusPassword"
        >
          {!showPassword ? "Hiện" : "Ẩn"}
        </span>
        <button className="submit" type="submit">
          Đăng nhập
        </button>
      </form>
      <div className="toggle__method">
        <span>
          <p>Quên mật khẩu</p>
        </span>
        <span>
          Chưa có tài khoản?
          <p
            onClick={() => {
              setIsLoginAction(!isLoginAction);
            }}
          >
            Tạo tài khoản
          </p>
        </span>
      </div>
    </>
  );
};

export const RegisterComponent = (props) => {
  const { showPassword, setShowPassword, isLoginAction, setIsLoginAction } = props;
  return (
    <>
      <div className="title">
        <h4>Tạo tài khoản</h4>
        <p>Vui lòng điền đầy đủ thông tin</p>
      </div>
      <form action="" className="auth__form">
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Tên người dùng"
        />
        <input
          className="username"
          type="email"
          name="email"
          placeholder="Địa chỉ email, ex: abc@gmail.com"
        />
        <input
          className="password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Mật khẩu"
        />
        <span
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          className="statusPassword"
        >
          {!showPassword ? "Hiện" : "Ẩn"}
        </span>
        <button className="submit" type="submit">
          Đăng ký
        </button>
      </form>
      <div className="toggle__method">
        <span>
          Đã có tài khoản?
          <p
            onClick={() => {
              setIsLoginAction(!isLoginAction);
            }}
          >
            {" "}
            Đăng nhập ngay
          </p>
        </span>
      </div>
    </>
  );
};

const AuthPopup = (props) => {
  const { togglePopup } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginAction, setIsLoginAction] = useState(true);

  const closePopup = () => {
    togglePopup();
  };

  return (
    <section className="popup__login">
      <div className="__container__ popup__box">
        <div className="popup__item">
          <div className="popup__item__left">
            <div className="left__contents">
              {isLoginAction ? (
                <LoginComponent
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  isLoginAction={isLoginAction}
                  setIsLoginAction={setIsLoginAction}
                />
              ) : (
                <RegisterComponent
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  isLoginAction={isLoginAction}
                  setIsLoginAction={setIsLoginAction}
                />
              )}

              <div className="social__login">
                <span className="or">Hoặc tiếp tục bằng</span>
                <span className="social__list">
                  <span className="fb__icon social__icon">
                    <TfiFacebook />
                  </span>
                  <span className="gg__icon social__icon">
                    <FcGoogle />
                  </span>
                </span>
                <span className="conditional">
                  Bằng việc tiếp tục, bạn đã chấp nhận điều khoản sử dụng
                </span>
              </div>
            </div>
          </div>
          <div className="popup__item__right">
            <div className="right__contents">
              <img
                alt="mua sắm ngay"
                src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
              />
              <p>Mua sắm tại Agnes Shop</p>
              <span>Siêu ưu đãi mỗi ngày</span>
            </div>
          </div>
        </div>
        <span className="close__icon" onClick={closePopup}>
          <GrClose />
        </span>
      </div>
    </section>
  );
};

export default AuthPopup;
