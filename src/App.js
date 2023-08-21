import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import SlideLogin from "./components/SlideLogin";
import Dashboard from "./components/Dashboard";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import MessageDisplay from "./components/MessageDisplay";


function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<SlideLogin />} />
            <Route path="/aboutus" element={<MessageDisplay />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutes>
                  <Dashboard />
                </ProtectedRoutes>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
