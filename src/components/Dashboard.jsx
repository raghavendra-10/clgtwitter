import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import TweetsList from './TweetsList';
import TweetForm from './TweetForm';
import { SiPhpmyadmin } from 'react-icons/si';
import { RiProfileLine, RiBookmarkLine } from 'react-icons/ri';
import { db } from '../firebaseConfig';
import { collection } from 'firebase/firestore';
import { getDocs, where, query } from 'firebase/firestore';
import { LuMessagesSquare } from 'react-icons/lu';
import { PiBellRingingDuotone } from 'react-icons/pi';


const Dashboard = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [showTweetForm, setShowTweetForm] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/register');
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    async function fetchProfilePhotoURL() {
      if (!user.uid) return;

      const profilesCollection = collection(db, 'profiles');
      const q = query(profilesCollection, where('uid', '==', user.uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const profileData = querySnapshot.docs[0].data();
        setUsername(profileData.username || '');
      }
    }

    fetchProfilePhotoURL();
  }, [user.uid]);

  return (
    <div className="flex">
      <div className="flex-grow p-4 max-w-screen ">
        <div className="flex justify-between py-2 bg-white sticky top-0 shadow-md">
          <h1 className={`text-white font-medium text-xl sm:text-3xl duration-300 origin-center`}>
            <span className="text-green-600">DI</span>
            <span className="text-blue-500">VULGE</span>
          </h1>
          
            <div className="flex py-2 mx-auto">
              <p className="text-sm font-semibold sm:text-lg">{username}</p>
            </div>
            <div className="flex justify-end">
              <button className="bg-green-400 px-2 py-1 rounded hover:text-white" onClick={handleLogout}>
                Logout
              </button>
        
          </div>
        </div>
        
        <div className="h-screen">
          <TweetsList />
          <div className="text-center mt-4"></div>
        </div>
        
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-around">
          <div className="text-gray-600 hover:text-blue-500">
            <Link to="/studentprofile">
              <RiProfileLine size={24} />
            </Link>
          </div>
          <div className="text-gray-600 hover:text-blue-500">
            <SiPhpmyadmin size={24} />
          </div>
          <div className="text-gray-600 hover:text-blue-500">
            <PiBellRingingDuotone size={24} />
          </div>
          <div className="text-gray-600 hover:text-blue-500">
            <RiBookmarkLine size={24} />
        </div>
        <div className="fixed text-white cursor-pointer text-xl px-3 py-3 bottom-[100px] right-4 transform translate-y-1/2 bg-blue-400 shadow-md rounded-md hover:bg-blue-600" onClick={() => setShowTweetForm(true)}>
            <button className="h-2"><LuMessagesSquare className="ml-1" /></button>
        </div>
      </div>
      </div>
      
      {showTweetForm && (
        <div className="fixed backdrop-blur-md inset-0 flex justify-center items-center bg-gray-800 z-50">
          <div className="bg-white p-4 rounded-md shadow-md w-2/3">
            <TweetForm user={user} onClose={() => setShowTweetForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
