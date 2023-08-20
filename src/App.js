import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import SlideLogin from "./components/SlideLogin";
import Dashboard from "./components/Dashboard";

// import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
   
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={<SlideLogin setIsAuthenticated={setIsAuthenticated}/>}
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard handleLogout={handleLogout}/> : <Navigate to="/register" />}
          />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
