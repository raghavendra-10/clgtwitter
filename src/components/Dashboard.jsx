import React, { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';
import { IoBookmarksSharp } from 'react-icons/io5';
import { BiSolidBell, BiSolidHelpCircle, BiLogOutCircle } from 'react-icons/bi';
import { IoSettings } from 'react-icons/io5';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import TweetsList from './TweetsList';
import TweetForm from './TweetForm';

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const {user,logout}=UserAuth();
  const navigate = useNavigate();

  const handleLogout=async () => {
    try{
      await logout();
      navigate('/register');
    }catch(e){
      console.log(e.message);
    }
  }


  return (
    <div className="flex ">
      <div
        className={`bg-blue-400 min-h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <HiMenuAlt1
          className={`text-black text-3xl absolute -right-0.5 top-9 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex ">
          <h1
            className={`text-white font-medium text-3xl duration-300 origin-center ${
              !open && "scale-0"
            }`}

          > 
            <span className="text-green-500">DI</span>VULGE

          </h1>
          
        </div>
        <div className='pt-2'>
        <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
            <p className='text-sm'>User : {user && user.email}</p>
            </span>
        </div>
        
        <ul className="pt-2">
          <li
            className="text-gray-800 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md mt-2"
          >
            <span className="text-2xl block"><CgProfile /></span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Profile
            </span>
          </li>
          <li
            className="text-gray-800 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md mt-2"
          >
            <span className="text-2xl block"><IoBookmarksSharp /></span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Bookmarks
            </span>
          </li>
          <li
            className="text-gray-800 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md mt-2"
          >
            <span className="text-2xl block"><BiSolidBell /></span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Remainders
            </span>
          </li>
          <li
            className="text-gray-800 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md mt-2"
          >
            <span className="text-2xl block"><IoSettings/></span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Settings
            </span>
          </li>
          <li
            className="text-gray-800 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md mt-2"
          >
            <span className="text-2xl block"><BiSolidHelpCircle /></span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Help Center
            </span>
          </li>
          <li
            className="text-gray-800 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md mt-2"
          >
            <span className="text-2xl block"><BiLogOutCircle /></span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
              onClick={handleLogout}
            >
              Logout
            </span>
          </li>
          
        </ul>
      </div>
      
      <div className="flex-grow p-4 max-w-screen-xl mx-auto">
      <TweetForm user={user} />
      <div className='h-screen overflow-y-auto'>
        <TweetsList/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
