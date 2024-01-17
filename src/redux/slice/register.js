/** @format */

import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  user: ["uyhuih"],
};

export const User = createSlice({
  name: "user",
  initialState,
  reducers: {
    addedUser: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export const { addedUser } = User.actions;
export default User.reducer;
