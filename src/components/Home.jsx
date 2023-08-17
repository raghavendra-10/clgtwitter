import React from "react";
import Navbar from "./Navbar";
import Logo from "../assests/newlogo.png"; 

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="flex min-h-screen">
      
        <div className="w-1/2 bg-green-400 flex flex-col items-center justify-center px-12">
        {/* <div className="text-5xl font-bold text-gray-800 mb-4">DIVULGE</div> */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-5xl font-bold text-gray-800 mb-4"><span className="text-green-400">DI</span>VULGE</div>
            <div className="text-xl text-gray-600 mb-8">
              It's time to communicate
            </div>
            <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
              Get Started
            </button>
          </div>
        </div>
        <div
          className="bg-cover bg-center w-1/2"
          style={{ backgroundImage: `url(${Logo})` }}
        />
      </div>
    </div>
  );
};

export default Home;
