import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebaseConfig';
import { collection } from 'firebase/firestore';
import { getDocs, where, query } from 'firebase/firestore';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

import Logo from '../assests/BG.jpeg';

const StudentProfile = () => {
  const { user } = UserAuth();
  const { authorId } = useParams(); // Get authorId from route parameters
  const [profilePhotoURL, setProfilePhotoURL] = useState(null);
  const [bio, setBio] = useState('');
  const [username, setUsername] = useState('');
  const isCurrentUser = user.uid === authorId; // Check if the current user is the profile owner

  useEffect(() => {
    async function fetchProfileData() {
      if (!authorId) return; // Handle case where authorId is not provided

      const profilesCollection = collection(db, 'profiles');
      const q = query(profilesCollection, where('uid', '==', authorId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const profileData = querySnapshot.docs[0].data();
        setProfilePhotoURL(profileData.profilePhotoURL);
        setUsername(profileData.username || '');
        setBio(profileData.bio || '');
      }
    }

    fetchProfileData();
  }, [authorId]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center " style={{ backgroundImage: `url(${Logo})` }}>
      <div className="bg-white rounded-lg shadow-md w-96 p-6 space-y-6">
        <div className="relative flex items-center justify-center space-x-4">
          <Link to="/dashboard">
            <p className="text-gray-600 absolute top-0 left-0 cursor-pointer">
              <IoMdArrowRoundBack size={24} />
            </p>
          </Link>
          <div className="w-32 h-32 flex rounded-full overflow-hidden bg-gray-300">
            <img
              src={profilePhotoURL || 'default-profile-image.jpg'}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 mt-2 mr-2">
            {isCurrentUser && (
              <Link to="/profile">
                <button className="bg-blue-500 text-white px-2 py-1 rounded-md">Edit</button>
              </Link>
            )}
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Username</h2>
          <p className="text-gray-600">{username}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Bio</h2>
          <p className="text-gray-600">{bio}</p>
        </div>
        {/* Other profile information */}
      </div>
    </div>
  );
};

export default StudentProfile;
