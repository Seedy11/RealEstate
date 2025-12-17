/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const propertyDelete = createAsyncThunk(
  "propertyDetail/delete",
  async (PropertyID, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/rentalProperties/delete/${PropertyID}`
      );
      alert("deleted");
      return PropertyID; // Return the ID to filter out
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to delete property");
    }
  }
);

const initialState = {
  PropertyDetailItems: [],
  status: "idle",
};

export const propertySlice = createSlice({
  name: "propertyDetail",
  initialState,
  reducers: {
    ItemDelete: (state, PropertyID) => {
      state.PropertyDetailItems = state.PropertyDetailItems.filter(
        (item) => item.PropertyID !== PropertyID
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(propertyDelete.pending, (state) => {
        state.status = "loading";
      })
      .addCase(propertyDelete.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.PropertyDetailItems = state.PropertyDetailItems.filter(
          (item) => item.PropertyID !== action.payload
        );
      })
      .addCase(propertyDelete.rejected, (state, action) => {
        console.error(action);
        state.status = "failed";
      });
  },
});

export const { ItemDelete } = propertySlice.actions;
export default propertySlice.reducer;
