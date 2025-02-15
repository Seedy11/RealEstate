/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postcodeInfo = createAsyncThunk(
  "postcode/data",
  async (postcode, thunkAPI) => {
    try {
      const postcodeData = await axios.get(
        `https://api.postcodes.io/postcodes/${postcode}`
      );
      return postcodeData.data.result;
      // console.log(postcodeData.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("wrong info ");
    }
  }
);
const initialState = {
  postcodeDetail: [],
};
export const postcodeSlide = createSlice({
  name: "postcode",
  initialState,
  status: "idle",
  reducers: {
    postcodeDisplay: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postcodeInfo.pending, (state) => {
        state.status = "idle";
      })
      .addCase(postcodeInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.postcodeDetail = action.payload;
      })
      .addCase(postcodeInfo.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
      });
  },
});

export const { postcodeDisplay } = postcodeSlide.actions;
export default postcodeSlide.reducer;
