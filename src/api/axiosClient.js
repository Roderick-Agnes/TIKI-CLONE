import axios from "axios";
import jwt_decode from "jwt-decode";
import { loginFulfilled } from "../redux/userSlice";
import userApi from "./userApi";

let axiosClient = axios.create({
  baseURL: "https://agnes-shop-api.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors
// Add a request interceptor

export const axiosRequestInterceptor = (payload, dispatch) => {
  axiosClient.interceptors.request.use(
    async (config) => {
      console.log("this is a axiosRequestInterceptor ");
      let date = new Date();
      const user = payload;

      const decoded = jwt_decode(user?.info?.accessToken);

      if (decoded && decoded?.exp < date.getTime() / 1000) {
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
        config.headers["token"] = requestUser.accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
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
  }
);

export default axiosClient;
