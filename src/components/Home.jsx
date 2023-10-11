import React from "react";
import Navbar from "./Navbar";
import Logo from "../assests/Landing.png";
import L1 from "../assests/landing1.png";
import L2 from "../assests/landing2.png";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* First Section (Left) */}
      <div className="py-8 flex items-center justify-center bg-gray-100">
        <div className="max-w-7xl bg-white shadow-lg rounded-lg p-5 md:flex border-2">
          <div className="md:w-1/2">
            <img src={L1} alt="Description" className="rounded-l-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 px-4 py-6 border-l md:border-t-0 flex justify-center my-auto border-gray-200">
            <p className="text-navy-900 mb-4 items-center text-justify text-3xl font-semibold uppercase">DIVULGE a platform for Institutions <br />
            All the students, departments, proffessors and higher authorities are connected here !!  
            
            </p>
          </div>
        </div>
      </div>

      {/* Second Section (Right) */}
      <div className="py-8 flex items-center justify-center bg-gray-100">
        <div className="max-w-8xl bg-white shadow-lg rounded-lg p-5 md:flex border-2 flex-row-reverse">
          <div className="md:w-1/2">
            <img src={L2} alt="Description" className="rounded-r-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 px-4 py-6 border-r md:border-t-0 my-auto border-gray-200">
            <p className="text-navy-900 mb-4 items-center text-justify  text-3xl font-semibold uppercase">Students to student interaction, can show case their projects and talent</p>
          </div>
        </div>
      </div>

      {/* Third Section (Left) */}
      <div className="py-8 flex items-center justify-center bg-gray-100">
        <div className="max-w-8xl bg-white shadow-lg rounded-lg p-5 md:flex border-2">
          <div className="md:w-1/2">
            <img src={Logo} alt="Description" className="rounded-l-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 px-4 py-6 border-l md:border-t-0 my-auto border-gray-200">
            <p className="text-navy-900 mb-4 items-center text-justify  text-3xl font-semibold uppercase">Teachers to student interaction, where teachers can post the news about the college and also manage the placements.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;