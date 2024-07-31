/** @format */

import { ReactDOM } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/header/Header";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import Letting from "./Screen/Letting/Letting";
import Login from "./Screen/Login/Login";
import Register from "./Screen/Register/Register";
import Footer from "./Components/Footer/Footer";
import Mortgage from "./Screen/Mortgage/Mortgage";
import RentalForm from "./Screen/RentalForm/RentalForm";
import PropertyDetail from "./Screen/PropertyDetail/PropertyDetail";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        {/* <HomeScreen/> */}
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='login' element={<Login />} />
          <Route path='letting' element={<Letting />} />
          <Route path='mortgage' element={<Mortgage />} />
          <Route path='rentalForm' element={<RentalForm />} />
          <Route path='login/register' element={<Register />} />
          <Route path='PropertyDetail' element={<PropertyDetail />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
