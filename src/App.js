import React, { useState } from "react";
import Home from "./Pages/Home";
import { Route,  Routes } from 'react-router-dom'
 import './App.css'
import SignIn from "./Pages/SignIn";
import MarketPlace from "./Pages/MarketPlace";
import Market from "./Pages/Market";

function App() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-mainColor" >
        <Routes>
        <Route path= '/' element={<Home/>} /> 
        <Route path= '/signin' element={<SignIn/>} /> 
        <Route path= '/marketplace' element={<MarketPlace/>} /> 
        <Route path= '/market' element={<Market/>} /> 
        </Routes>
    </div>
  );
}

export default App;
