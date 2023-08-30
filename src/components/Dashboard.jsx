import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import TweetsList from './TweetsList';
import TweetForm from './TweetForm';
import { SiPhpmyadmin } from 'react-icons/si';
import { RiProfileLine, RiBookmarkLine } from 'react-icons/ri';

const Dashboard = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [showTweetForm, setShowTweetForm] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/register');
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="flex">
      <div className="flex-grow p-4 max-w-screen ">
        <div className="flex justify-between py-2">
          <h1 className={`text-white font-medium text-3xl duration-300 origin-center`}>
            <span className="text-green-600">DI</span>
            <span className="text-blue-500">VULGE</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <p className="text-md">{user && user.email}</p>
            
          </div>
          <div className="align-middle"><button className="bg-green-400 px-2 py-1 rounded hover:text-white" onClick={handleLogout}>
              Logout
            </button></div>
        </div>
        <div className="h-screen overflow-y-auto">
          <TweetsList />
          <div className="text-center mt-4"></div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-around">
          <div className="text-gray-600 hover:text-blue-500">
            <Link to="/studentprofile">
              <RiProfileLine  size={24} />
            </Link>
          </div>
          <div className="text-gray-600 hover:text-blue-500">
            <SiPhpmyadmin size={24} />
          </div>
          <div className="text-gray-600 hover:text-blue-500">
            <RiBookmarkLine size={24} />
          </div>
          <div className="text-gray-600 hover:text-blue-500 cursor-pointer" onClick={() => setShowTweetForm(true)}>
            Go
          </div>
        </div>
      </div>
      {showTweetForm && (
        <div className="fixed backdrop-blur-md inset-0 flex justify-center items-center  bg-gray-800 z-50">
          <div className="bg-white p-4 rounded-md shadow-md w-1/2">
            <TweetForm user={user} onClose={() => setShowTweetForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
