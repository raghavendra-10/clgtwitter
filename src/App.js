import { BrowserRouter, Routes, Route } from "react-router-dom";
import React  from "react";
import Register from "./components/Register";
import Home from "./components/Home";

// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Register/>} path="/register"  exact/>
        <Route element={<Home/>} path="/"  exact/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
