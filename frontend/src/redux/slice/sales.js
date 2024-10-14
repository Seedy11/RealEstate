/** @format */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sales: ["ygfygfytf"],
};

export const Sales = createSlice({
  name: "sales",
  initialState,
  reducers: {
    AddedSales: (state, action) => {
      state.sales.push(action.payload);
    },
  },
});

export const { AddedSales } = Sales.actions;
export default Sales.reducer;
