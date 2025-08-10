import { configureStore } from "@reduxjs/toolkit";
import activeStatusReducer from "./activeStatusSlice";
import authReducer from "./authSlice";


const store = configureStore({
  reducer: {
    activeStatus: activeStatusReducer,
    auth: authReducer,
    
  },
});
export default store;
