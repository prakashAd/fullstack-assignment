import React from "react";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

const Myroutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Myroutes;
