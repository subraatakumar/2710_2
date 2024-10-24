import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => true,
    logout: (state, action) => false,
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
