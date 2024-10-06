/** @format */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Property = createAsyncThunk("property/data", async (thunkAPI) => {
  try {
    const propertiesData = await axios.get(
      `http://localhost:3001/rentalProperties/propertyList`
    );
    return propertiesData.data;
    // console.log(propertiesData.data);
  } catch (error) {
    return thunkAPI.rejectWithValue("wrong info ");
  }
});
const initialState = {
  PropertyItems: [],
};
export const propertySlide = createSlice({
  name: "property",
  initialState,
  status: "idle",
  reducers: {
    PropertyDisplay: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Property.pending, (state) => {
        state.status = "idle";
      })
      .addCase(Property.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.PropertyItems = action.payload;
      })
      .addCase(Property.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
      });
  },
});

export const { PropertyDisplay } = propertySlide.actions;
export default propertySlide.reducer;
