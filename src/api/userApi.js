import axiosClient from "./axiosClient";

const userApi = {
  register(data) {
    const url = "/auth/register";
    console.log("user in userApi file: ", data);
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },
  refreshToken() {
    // send accessToken to server
    const url = "/auth/refresh";
    return axiosClient.post(url);
  },
  async logout(data) {
    console.log("logout data in userApi file: ", data);
    // send accessToken to server
    const url = "/auth/logout";
    const res = await axiosClient.post(url, {}, data);
    console.log("response data in userApi file: ", res);
    return res;
  },
};

export default userApi;
