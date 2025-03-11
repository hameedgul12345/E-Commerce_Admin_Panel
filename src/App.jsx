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
import Payments from "./Components/Payments";
import Customers from "./Components/Customers";
import Dashboard from "./Components/Dashboard";
import Settings from "./Components/Settings";

import Auth from "./Components/Auth";
import Home from "./Components/Website/Home.jsx";
import Category from "./Components/Website/Category.jsx";
import WebProducts from "./Components/Website/WebProducts.jsx";

import Signup from "./Components/Website/Signup.jsx";
import Contactus from "./Components/Website/Contactus.jsx";
import PreCheck from "./Components/Checks/PreCheck.jsx";
import Cart from "./Components/Website/Cart.jsx";
import Profile from "./Components/Website/Profile.jsx";
import AdminChecks from "./Components/Checks/AdminChecks.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Welcome/>}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/webproducts" element={<WebProducts />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>

          <Route element={<PreCheck />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          {/* <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} /> */}
          <Route element={<AdminChecks/>}>
          <Route path="/admin">
            <Route path="products" element={<Products />} />
            <Route path="order" element={<Order />} />
            <Route path="products" element={<Order />} />
            <Route path="payments" element={<Payments />} />
            <Route path="customers" element={<Customers />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="auth" element={<Auth />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
