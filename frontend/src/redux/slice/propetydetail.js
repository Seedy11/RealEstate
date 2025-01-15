/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const PropertyInfo = createAsyncThunk(
  "propertyDetail/data",
  async (property_id, thunkAPI) => {
    try {
      const propertiesData = await axios.get(
        `https://realestate-heruko-5c11eac23d0e.herokuapp.com/rentalProperties/propertyList/${property_id}`
      );
      return propertiesData.data;
      // console.log(propertiesData.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("wrong info ");
    }
  }
);
const initialState = {
  PropertyDetailItems: [],
};
export const propertySlide = createSlice({
  name: "propertyDetail",
  initialState,
  status: "idle",
  reducers: {
    PropertyDisplay: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(PropertyInfo.pending, (state) => {
        state.status = "idle";
      })
      .addCase(PropertyInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.PropertyDetailItems = action.payload;
      })
      .addCase(PropertyInfo.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
      });
  },
});

export const { PropertyDisplay } = propertySlide.actions;
export default propertySlide.reducer;
