import { createSlice } from "@reduxjs/toolkit";

export const mobileSlice = createSlice({
  name: "mobile",
  initialState: {
    visibile: false,
  },
  reducers: {
    setVisible: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { setVisible } = mobileSlice.actions;

export const isVisible = (state) => state.mobile.visible;
export default mobileSlice.reducer;
