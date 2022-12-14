import "./index.css";
import { GrClose } from "react-icons/gr";
import { TfiFacebook } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { loginAction, registerAction } from "../../redux/custom/authRequest";
import { toast } from "react-toastify";

YupPassword(yup);

const requiredField = () => yup.string().required();
const password = () =>
  requiredField()
    .min(
      8,
      "Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .minLowercase(1, "Password must contain at least 1 lower case letter")
    .minUppercase(1, "Password must contain at least 1 upper case letter")
    .minNumbers(1, "Password must contain at least 1 number")
    .minSymbols(1, "Password must contain at least 1 special character");

const loginSchema = yup
  .object({
    username: yup
      .string()
      .required()
      .min(8, "Username is too short - should be 8 chars minimum."),
    password: password(),
  })
  .required();

const registerSchema = yup
  .object({
    username: yup
      .string()
      .required()
      .min(8, "Username is too short - should be 8 chars minimum."),
    email: yup.string().email().required(),
    password: password(),
  })
  .required();

export const LoginComponent = (props) => {
  const { showPassword, setShowPassword, isLoginAction, setIsLoginAction, togglePopup } =
    props;
  const [topSize, setTopSize] = useState(32);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    if (errors.username?.message) setTopSize(37);
    else setTopSize(32);
    if (errors.password?.message) setTopSize(28);

    if (errors.username?.message && errors.password?.message) setTopSize(35);
  }, [errors.username?.message, errors.password?.message]);

  const onLoginSubmit = async (data) => {
    console.log("user: ", data);

    await loginAction(data, dispatch, togglePopup);
  };

  return (
    <>
      <div className="title">
        <h4>????ng nh???p b???ng email</h4>
        <p>Nh???p email v?? m???t kh???u</p>
      </div>
      <form className="auth__form" onSubmit={handleSubmit(onLoginSubmit)}>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="T??n ng?????i d??ng"
          {...register("username")}
        />
        {errors.username?.message ? (
          <span className="err__input">{errors.username?.message}</span>
        ) : (
          <></>
        )}
        <input
          className="password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="M???t kh???u"
          {...register("password")}
        />
        {errors.password?.message ? (
          <span className="err__input">{errors.password?.message}</span>
        ) : (
          <></>
        )}
        <span
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          style={{
            top: `${topSize}%`,
          }}
          className="statusPassword"
        >
          {!showPassword ? "Hi???n" : "???n"}
        </span>
        <button className="submit" type="submit">
          ????ng nh???p
        </button>
      </form>
      <div className="toggle__method">
        <span>
          <p>Qu??n m???t kh???u</p>
        </span>
        <span>
          Ch??a c?? t??i kho???n?
          <p
            onClick={() => {
              setIsLoginAction(!isLoginAction);
            }}
          >
            T???o t??i kho???n
          </p>
        </span>
      </div>
    </>
  );
};

export const RegisterComponent = (props) => {
  const { showPassword, setShowPassword, isLoginAction, setIsLoginAction } = props;
  const [topSize, setTopSize] = useState(45);
  const dispatch = useDispatch();

  const toggleLoginAction = () => {
    setIsLoginAction(!isLoginAction);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onRegisterSubmit = async (data) => {
    console.log("user: ", data);

    await registerAction(data, dispatch, toggleLoginAction);
  };

  useEffect(() => {
    if (errors.email?.message) setTopSize(45);
    else setTopSize(40);
    if (errors.username?.message) setTopSize(50);
    else setTopSize(45);
    if (errors.password?.message) setTopSize(40);

    if (errors.email?.message && errors.password?.message) setTopSize(45);
    if (errors.email?.message && errors.username?.message && errors.password?.message)
      setTopSize(50);
  }, [errors.username?.message, errors.email?.message, errors.password?.message]);

  return (
    <>
      <div className="title">
        <h4>T???o t??i kho???n</h4>
        <p>Vui l??ng ??i???n ?????y ????? th??ng tin</p>
      </div>
      <form className="auth__form" onSubmit={handleSubmit(onRegisterSubmit)}>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="T??n ng?????i d??ng"
          {...register("username")}
        />
        {errors.username?.message ? (
          <span className="err__input">{errors.username?.message}</span>
        ) : (
          <></>
        )}
        <input
          className="username"
          type="text"
          name="email"
          placeholder="?????a ch??? email, ex: abc@gmail.com"
          {...register("email")}
        />
        {errors.email?.message ? (
          <span className="err__input">{errors.email?.message}</span>
        ) : (
          <></>
        )}
        <input
          className="password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="M???t kh???u"
          {...register("password")}
        />
        {errors.password?.message ? (
          <span className="err__input">{errors.password?.message}</span>
        ) : (
          <></>
        )}
        <span
          style={{
            top: `${topSize}%`,
          }}
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          className="statusPassword"
        >
          {!showPassword ? "Hi???n" : "???n"}
        </span>
        <button className="submit" type="submit">
          ????ng k??
        </button>
      </form>
      <div className="toggle__method">
        <span>
          ???? c?? t??i kho???n?
          <p onClick={toggleLoginAction}> ????ng nh???p ngay</p>
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
                  togglePopup={togglePopup}
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
                <span className="or">Ho???c ti???p t???c b???ng</span>
                <span className="social__list">
                  <span className="fb__icon social__icon">
                    <TfiFacebook />
                  </span>
                  <span className="gg__icon social__icon">
                    <FcGoogle />
                  </span>
                </span>
                <span className="conditional">
                  B???ng vi???c ti???p t???c, b???n ???? ch???p nh???n ??i???u kho???n s??? d???ng
                </span>
              </div>
            </div>
          </div>
          <div className="popup__item__right">
            <div className="right__contents">
              <img
                alt="mua s???m ngay"
                src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
              />
              <p>Mua s???m t???i Agnes Shop</p>
              <span>Si??u ??u ????i m???i ng??y</span>
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
