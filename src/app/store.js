import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from "../features/mobile/mobileSlice";
export default configureStore({
  reducer: {
    mobile: mobileReducer,
  },
});
