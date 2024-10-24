import { createSlice } from "@reduxjs/toolkit";
const initialState = 0;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc: (state, action) => state + parseInt(action.payload),
    dec: (state, action) => state - parseInt(action.payload),
    reset: (state) => 0,
  },
});

export default counterSlice.reducer;
export const { inc, dec, reset } = counterSlice.actions;
