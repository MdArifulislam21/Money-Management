import { createSlice } from "@reduxjs/toolkit";

const activeStatusSlice = createSlice({
  name: "activeStatus",
  initialState: { value: "Report" }, // default active
  reducers: {
    setActiveStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setActiveStatus } = activeStatusSlice.actions;
export default activeStatusSlice.reducer;
