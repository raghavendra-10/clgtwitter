import React from 'react';
import Logo from "../assests/985381.jpg"
const ProjectForm = () => {
 
 

  return (
    <div className="min-h-screen py-40" style={{ backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)' }}>
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${Logo})`}}>
                <h1 className="text-white text-3xl mb-3">Welcome</h1>
                <div>
                  <p className="text-white">Exploration knows no bounds. It's the journey of discovery that fuels innovation and brings dreams to life <a href="njcd" className="text-purple-500 font-semibold">Learn more</a></p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 py-16 px-12">
                <h2 className="text-3xl mb-4">EXPLORE THINGS</h2>
                <p className="mb-4">
                  It’s free and only takes a minute
                </p>
                <form action="#">
                <label htmlFor="projectName" className="block text-gray-700 text-sm font-bold mb-2">
                    Project Name
                </label>
                  <div className="mt-5">
                    <input type="text" placeholder="Project Name" className="border border-gray-400 py-1 px-2 w-full" />
                  </div>
                  <label htmlFor="projectName" className="block text-gray-700 text-sm font-bold mb-2">
                    Description
                </label>
                  <div className="mt-5">
                    <input type="text" placeholder="Project Description" className="border border-gray-400 py-1 px-2 w-full" />
                  </div>
                  <label htmlFor="projectName" className="block text-gray-700 text-sm font-bold mb-2">
                    Project Link
                </label>
                  <div className="mt-5">
                    <input type="text" placeholder="Project link" className="border border-gray-400 py-1 px-2 w-full" />
                  </div>
                  <label htmlFor="projectName" className="block text-gray-700 text-sm font-bold mb-2">
                    LinkedIn
                </label>
                  <div className="mt-5">
                    <input type="text" placeholder="LindedIn" className="border border-gray-400 py-1 px-2 w-full" />
                  </div>
                  
                  
                  <div className="mt-5">
                    <button className="w-full bg-blue-500 py-3 text-center text-white hover:bg-green-400">GO</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
  );
};

export default ProjectForm;
