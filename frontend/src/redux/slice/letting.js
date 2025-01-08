/** @format */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Property = createAsyncThunk("property/data", async (thunkAPI) => {
  try {
    const propertiesData = await axios.get(
      `https://realestate-heruko-5c11eac23d0e.herokuapp.com/rentalProperties/propertyList/`
    );
    return propertiesData.data;
    // console.log(propertiesData.data);
  } catch (error) {
    return thunkAPI.rejectWithValue("wrong info ");
  }
});
const initialState = {
  PropertyItems: [
    {
      Address: "66 ",
      Available_date: "24/06/1998",
      Bathrooms: 4,
      Bedrooms: 1,
      City: "Banjul ",
      Country: "The Gambia",
      Descriptions:
        "This charming ${propertyType} is nestled in the heart of ${location}, offering a perfect blend of modern convenience and timeless appeal. Featuring ${bedrooms} bedrooms and ${bathrooms} bathrooms, it spans ${area} square feet, making it an ideal choice for ${targetAudience}.**Key Features**   **Location:** Situated in a prime neighborhood close to ${nearbyAmenities.join(', ')}.   **Interior:** Spacious open-plan living areas with ${interiorFeatures.join(', ')}, a modern kitchen with ${kitchenDetails}, and a luxurious master suite with ${masterSuiteFeatures}.",
      Email: "seedydarbo11@gmail.com",
      First_name: "Seedy",
      Last_name: "Darbo",
      Phone_number: "07388052195",
      Postcode: "bs5 6sh",
      Price: 450.0,
      PropertyID: 231,
      State: "west Yorkshire ",
    },
    {
      Address: "51 ",
      Available_date: null,
      Bathrooms: 4,
      Bedrooms: 1,
      City: "bristol ",
      Country: "united kingdom",
      Descriptions:
        "gvbkus uyhgbkuy cvbv\n h,jhsdchjsd\njhbhjbvsfd\nhjbnlshdf\nhbsdfkuvgbfsdv\nfvdhbjhbfdv",
      Email: "seedydarbo11@gmail.com",
      First_name: "Seedy",
      Last_name: "Darbo",
      Phone_number: "07388052195",
      Postcode: "bs5 6sh",
      Price: "",
      PropertyID: 231,
      State: "west Yorkshire ",
    },
    {
      Address: "51 ",
      Available_date: null,
      Bathrooms: 4,
      Bedrooms: 1,
      City: "bristol ",
      Country: "united kingdom",
      Descriptions:
        "gvbkus uyhgbkuy cvbv\n h,jhsdchjsd\njhbhjbvsfd\nhjbnlshdf\nhbsdfkuvgbfsdv\nfvdhbjhbfdv",
      Email: "seedydarbo11@gmail.com",
      First_name: "Seedy",
      Last_name: "Darbo",
      Phone_number: "07388052195",
      Postcode: "bs5 6sh",
      Price: "",
      PropertyID: 231,
      State: "west Yorkshire ",
    },
  ],
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
