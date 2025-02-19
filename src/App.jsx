import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import NotFound from "./Components/NotFound";
import Products from "./Components/Products/index.jsx";
import Welcome from "./Components/Welcome";
import Order from "./Components/Order";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/">
          <Route path="products" element={<Products/>}/>
          <Route path="order" element={<Order/>}/>
          <Route path="products" element={<Order/>}/>
          
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
