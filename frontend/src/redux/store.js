/** @format */

import { configureStore } from "@reduxjs/toolkit";

import User from "./slice/register";
import Letting from "./slice/letting";
import Sales from "./slice/sales";
import PropertyInfo from "./slice/propetydetail";
import postcodeInfo from "./slice/postcode";
import propertyDelete from "./slice/deleteProperty";

export const store = configureStore({
  reducer: {
    register: User,
    lettings: Letting,
    sales: Sales,
    PropertyInfo: PropertyInfo,
    postcodeInfo: postcodeInfo,
    deleteProperty: propertyDelete,
  },
});
