import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../api/userApi";

// First, create the thunk
export const register = createAsyncThunk("user/register", async (payload, thunkAPI) => {
  const newUser = await userApi.register(payload);

  // save data to local storage
  localStorage.setItem("USER_INFO", JSON.stringify(newUser));

  return newUser;
});

export const login = createAsyncThunk("user/login", async (payload, thunkApi) => {
  const response = await userApi.login(payload);

  const { accessToken, ...info } = response;
  console.log("typeof info: ", typeof info);

  // SAVE USER INFO TO LOCAL STORAGE
  localStorage.setItem("USER_INFO", JSON.stringify(response));

  return response;
});
export const logout = createAsyncThunk("user/logout", async (payload, thunkApi) => {
  await userApi.logout();

  // REMOVE USER INFO FROM LOCAL STORAGE
  localStorage.removeItem("USER_INFO");
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    info: null,
    isLoading: false,
    error: {
      status: false,
      message: "",
    },
  },
  reducers: {},
  extraReducers: {
    [register.pending]: async (state, action) => {
      state.isLoading = true;
    },
    [register.fulfilled]: async (state, action) => {
      state.info = action.payload;
      state.isLoading = false;
      state.error.status = false;
      state.error.message = "";
    },
    [register.rejected]: async (state, action) => {
      state.info = null;
      state.isLoading = false;
      state.error.status = true;
      state.error.message = action.payload?.message || "Failed to register";
    },
    [login.pending]: async (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: async (state, action) => {
      state.info = action.payload;
      state.isLoading = false;
      state.error.status = false;
      state.error.message = "";
    },
    [login.rejected]: async (state, action) => {
      state.info = null;
      state.isLoading = false;
      state.error.status = true;
      state.error.message = action.payload?.message || "Failed to login";
    },
    [logout.fulfilled]: async (state, action) => {
      state.info = null;
    },
  },
});
const { actions, reducer } = userSlice;
export default reducer;
