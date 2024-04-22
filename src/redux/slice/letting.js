/** @format */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // property: {
  //   id: "123456",
  //   address: {
  //     street: "123 Main St",
  //     city: "Anytown",
  //     state: "NY",
  //     zip_code: "12345",
  //   },
  //   price: 250000,
  //   bedrooms: 3,
  //   bathrooms: 2,
  //   sq_ft: 1800,
  //   lot_size: "0.25 acres",
  //   description: "Charming family home in a quiet neighborhood.",
  //   features: ["Hardwood floors", "Fireplace", "Backyard patio"],
  //   year_built: 1990,
  //   listing_agent: {
  //     name: "John Doe",
  //     contact: "john.doe@example.com",
  //   },
  // },
  rental_property: {
    id: "789012",
    address: {
      street: "456 Elm St",
      city: "Anytown",
      state: "CA",
      zip_code: "98765",
    },
    image: "",
    price_per_month: 2000,
    bedrooms: 2,
    bathrooms: 1,
    sq_ft: 1000,
    description: "Cozy apartment near downtown.",
    features: ["Hardwood floors", "Balcony", "Pet-friendly"],
    available_date: "2024-05-01",
    listing_agent: {
      name: "Jane Smith",
      contact: "jane.smith@example.com",
    },
  },
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
