import { BrowserRouter, Routes, Route } from "react-router-dom";
import React  from "react";

import Home from "./components/Home";
import SlideLogin from "./components/SlideLogin";
import Dashboard from "./components/Dashboard";

// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      
        <Route element={<SlideLogin/>} path="/register"  exact/>
        <Route element={<Home/>} path="/"  exact/>
        <Route element={<Dashboard/>} path="/dashboard"  exact/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
