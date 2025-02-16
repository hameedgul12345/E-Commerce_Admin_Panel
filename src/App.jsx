import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
