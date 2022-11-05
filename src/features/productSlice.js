import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const login = createAsyncThunk('user/login', )

const userSlice = createSlice({
  name: "user",
  initialState: {
    info: {
      id: undefined,
      name: undefined,
      isAdmin: false,
    },
    isLoading: false,
  },

});

export default userSlice;
