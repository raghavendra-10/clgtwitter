import React from "react";
import Navbar from "./Navbar";

import Lottie from "react-lottie";
import home from ".././components/lottiefile/home.json"
const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: home,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return (
    <div>
      <Navbar />
      <div className="bg-cover bg-center w-full flex justify-center  min-h-screen">
        
        <div className=" flex flex-col items-center justify-center ">
        <Lottie options={defaultOptions} size={24}/>
          {/* <div className="text-5xl font-bold text-gray-800 mb-4">DIVULGE</div> */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="sm:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-green-400">DI</span>VULGE
            </div>
            <div className="sm:text-xl text-gray-600 mb-8">
              It's time to communicate
            </div>
            <button className="sm:px-6 sm:py-3 px-1 py-1 sm:text-lg font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
              Get Started
            </button>
          </div>
        
        </div>
        {/* <div
          className="bg-cover bg-center w-full  "
          style={{ backgroundImage: `url(${Logo})` }}
        /> */}
      </div>
    </div>
  );
};

export default Home;
