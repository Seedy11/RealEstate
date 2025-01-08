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
  PropertyDetailItems: [
    // {
    //   Address: "66 ",
    //   Available_date: "24/06/1998",
    //   Bathrooms: 4,
    //   Bedrooms: 1,
    //   City: "Banjul ",
    //   Country: "The Gambia",
    //   Descriptions: `
    //   **Property Overview**
    //   This charming is nestled in the heart of Banjul offering a perfect blend of modern convenience and timeless appeal. Featuring 4 bedrooms and1 bathrooms, it spans 300 square feet, making it an ideal choice for professional.
    //   **Key Features**
    //   - **Location:** Situated in a prime neighborhood close to city center
    //   - **Interior:** Spacious open-plan living areas
    //    a modern kitchen, and a luxurious master suite
    //   **Additional Highlights**
    //   - Year Built: 2019
    //   - Recent Upgrades: 2023
    //   **Pricing and Contact Information**
    //   Priced at 450, this property is a fantastic investment opportunity. For more information or to schedule a viewing, please contact 075858558.
    // `,
    //   Email: "seedydarbo11@gmail.com",
    //   First_name: "Seedy",
    //   Last_name: "Darbo",
    //   Phone_number: "07388052195",
    //   Postcode: "bs5 6sh",
    //   Price: 450.0,
    //   PropertyID: 231,
    //   State: "west Yorkshire ",
    // },
  ],
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
