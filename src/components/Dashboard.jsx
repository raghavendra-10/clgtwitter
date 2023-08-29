import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import TweetsList from './TweetsList';
import TweetForm from './TweetForm';
import "react-toastify/dist/ReactToastify.css";
const Dashboard = ({profilePhotoURL}) => {
 
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

        
          
        
        <div className="flex-grow p-4 max-w-screen">
          <div className='flex justify-between py-2'>
        <p className='text-sm'>User : {user && user.email}</p>
        <button className='bg-green-400 px-2 py-1 rounded' onClick={handleLogout}>
          Logout
        </button>
        </div>
        <TweetForm user={user} profilePhotoURL={profilePhotoURL}/>
        <div className='h-screen overflow-y-auto'>
          <TweetsList/>
          <div className="text-center mt-4">
  
    </div>
          
          </div>
        </div>
      </div>
    
  );
};

export default Dashboard;
