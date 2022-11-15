import axios from "axios";
import jwt_decode from "jwt-decode";
import { loginFulfilled } from "../redux/userSlice";
import userApi from "./userApi";
//https://agnes-shop-api.herokuapp.com/
// http://localhost:5000
let axiosClient = axios.create({
  baseURL:
    "https://agnes-shop-api.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Interceptors
// Add a request interceptor

export const axiosRequestInterceptor = async (
  payload,
  dispatch,
) => {
  await axiosClient.interceptors.request.use(
    async (config) => {
      console.log(
        "this is a axiosRequestInterceptor ",
      );
      const user = payload;

      const decoded = jwt_decode(
        user?.info?.accessToken,
      );

      if (
        decoded?.exp * 1000 <
        new Date().getTime()
      ) {
        console.log("token exprired");
        // CALL REQUEST TOKEN
        const res = await userApi.refreshToken();
        console.log("refreshToken: ", res);
        const requestUser = {
          ...user?.info,
          accessToken: res.accessToken,
        };
        // CALL LOGIN FULFILLED TO UPDATE INFO OF USER IN STORE
        dispatch(loginFulfilled(requestUser));

        // SET TOKEN TO HEADERS
        config.headers["token"] =
          requestUser.accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    },
  );
  return axiosClient;
};

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  },
);

export default axiosClient;
