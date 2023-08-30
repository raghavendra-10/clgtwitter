import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebaseConfig';
import { collection } from 'firebase/firestore';
import { getDocs, where, query } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "../assests/BG.jpeg"

const StudentProfile = () => {
  const { user } = UserAuth();

  const [profilePhotoURL, setProfilePhotoURL] = useState(null);
  useEffect(() => {
    async function fetchProfilePhotoURL() {
      if (!user.uid) return;

      const profilesCollection = collection(db, 'profiles');
      const q = query(profilesCollection, where('uid', '==', user.uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const profileData = querySnapshot.docs[0].data();
        setProfilePhotoURL(profileData.profilePhotoURL);
      }
    }

    fetchProfilePhotoURL();
  }, [user.uid]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center "style={{ backgroundImage: `url(${Logo})` }}>
    <div className="bg-white rounded-lg shadow-md w-96 p-6 space-y-6">
      <div className="relative flex items-center justify-center space-x-4">
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faUser} size="lg" className="text-gray-600 absolute top-0 left-0 mt-2 ml-2 cursor-pointer" />
        </Link>
        <div className="w-32 h-32 flex rounded-full overflow-hidden bg-gray-300">
          <img
            src={profilePhotoURL || 'default-profile-image.jpg'} 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 mt-2 mr-2">
          <Link to="/profile">
            <button className="bg-blue-500 text-white px-2 py-1 rounded-md">Edit</button>
          </Link>
        </div>
      </div>
      <div className="text-center">
        <p className="text-gray-500 mt-2">{user.email}</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Bio</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nulla vitae eros aliquet eleifend.
        </p>
      </div>
      {/* Other profile information */}
    </div>
  </div>
  );
};

export default StudentProfile;
