/** @format */

import { configureStore } from "@reduxjs/toolkit";

import User from "./slice/register";
import Letting from "./slice/letting";
import Sales from "./slice/sales";
import PropertyInfo from "./slice/propetydetail";

export const store = configureStore({
  reducer: {
    register: User,
    lettings: Letting,
    sales: Sales,
    PropertyInfo: PropertyInfo,
  },
});
