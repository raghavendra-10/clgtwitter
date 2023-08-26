import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import TweetsList from './TweetsList';
import TweetForm from './TweetForm';
import "react-toastify/dist/ReactToastify.css";
import { RiProfileLine, RiBookmarkLine, RiSettingsLine } from 'react-icons/ri';

const Dashboard = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/register');
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <div className="flex">
      <div className="flex-grow p-4 max-w-screen ">
        <div className='flex justify-between py-2'>
        <h1 className={`text-white font-medium text-3xl duration-300 origin-center`}>
          <span className="text-green-600">DI</span><span className="text-blue-500">VULGE</span>
        </h1>
          <p className='text-sm'>User: {user && user.email}</p>
          <button className='bg-green-400 px-2 py-1 rounded' onClick={handleLogout}>
            Logout
          </button>
        </div>

        <TweetForm user={user} />

        <div className='h-screen overflow-y-auto'>
          <TweetsList />
          <div className="text-center mt-4">
            
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-around">
        <div className="text-gray-600 hover:text-blue-500">
          <RiProfileLine size={24} />
        </div>
        <div className="text-gray-600 hover:text-blue-500">
          <RiBookmarkLine size={24} />
        </div>
        <div className="text-gray-600 hover:text-blue-500">
          <RiSettingsLine size={24} />
        </div>
      </div>

      </div>
    </div>
    
  );
};

export default Dashboard;
