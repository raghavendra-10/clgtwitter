import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/newlogo.png"; 

const Navbar = () => {
  return (
    <div className="bg-blue-500 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Divulge Logo" className="h-9 rounded-full w-9 mr-2" />
          <h1 className="text-white text-3xl font-semibold">DIVULGE</h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/register"
              className="text-white text-xl hover:text-blue-200 transition duration-300"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-white text-xl hover:text-blue-200 transition duration-300"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
