/** @format */

import React, { ReactDOM } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/header/Header";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import Letting from "./Screen/Letting/Letting";
import Login from "./Screen/Login/Login";
import Register from "./Screen/Register/Register";
import Footer from "./Components/Footer/Footer";
import RentalForm from "./Screen/RentalForm/RentalForm";
import AdminPage from "./Screen/AdminPage/AdminPage";
import PropertyDetail from "./Screen/PropertyDetail/PropertyDetail";
import axios from "axios";
import Dashboard from "./Screen/Dashboard/Dashboard";
// require("dotenv").config();

function App() {
  console.log("hgbvhb", process.env.REACT_APP_USER_SQL);
  // React.useEffect(() => {
  //   async function AddressData() {
  //     try {
  //       const propertiesData = await axios.get(
  //         `http://realestate-6.onrender.com/rentalProperties/propertyList`
  //       );

  //       // console.log(propertiesData.data);
  //     } catch (error) {
  //       return error;
  //     }
  //   }
  //   console.log("apitest", AddressData());
  // }, []);

  return (
    <BrowserRouter>
      <Header />
      <br /> <br />
      {/* <HomeScreen/> */}
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='login' element={<Login />} />
        <Route path='letting' element={<Letting />} />
        <Route path='adminPage' element={<AdminPage />} />
        <Route path='adminPage/rentalForm' element={<RentalForm />} />
        <Route path='register' element={<Register />} />
        <Route path='PropertyDetail/:id' element={<PropertyDetail />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
