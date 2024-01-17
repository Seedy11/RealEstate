/** @format */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lettings: ["tyfytfyt"],
};

export const Letting = createSlice({
  name: "letting",
  initialState,
  reducers: {
    addedLetting: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export const { addedLetting } = Letting.actions;
export default Letting.reducer;
