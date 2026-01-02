/** @format */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Footer from "./Components/Footer/Footer";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import Letting from "./Screen/Letting/Letting";
import Login from "./Screen/Login/Login";
import Register from "./Screen/Register/Register";
import RentalForm from "./Screen/RentalForm/RentalForm";
import AdminPage from "./Screen/AdminPage/AdminPage";
import PropertyDetail from "./Screen/PropertyDetail/PropertyDetail";
import Dashboard from "./Screen/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Sticky header for modern feel */}
      <Header />

      {/* Main content area */}
      <main
        style={{
          minHeight: "80vh",
          padding: "2rem 1rem",
          backgroundColor: "#f8f9fa",
        }}>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<Login />} />
          <Route path='/letting' element={<Letting />} />
          <Route path='/adminPage' element={<AdminPage />} />
          <Route path='/rentalForm' element={<RentalForm />} />
          <Route path='/register' element={<Register />} />
          <Route path='/PropertyDetail/:id' element={<PropertyDetail />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </main>

      {/* Footer with padding and light background */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
