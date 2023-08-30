import React, { useState } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { db } from '../firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';
import { UserAuth } from '../context/AuthContext';

const Tweet = ({ id, username, content, timestamp, profilePhotoURL, authorId }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { user } = UserAuth();

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  const handleDelete = async () => {
    try {
      if (user.uid === authorId) {
        const tweetRef = doc(db, 'tweets', id);
        await deleteDoc(tweetRef);
        // Perform any additional cleanup or actions after deletion
      } else {
        // Handle unauthorized delete attempt
      }
    } catch (error) {
      console.error('Error deleting tweet:', error);
    }
  };

  const handleInfo = async () => {
    console.log('info');
  };

  return (
    <div className="bg-white p-4 border rounded-lg shadow-md transition duration-50 ease-out hover:ease-in hover:border-navy-300 hover:border-2 mb-4">
      <div className="flex items-start">
        <img
          className="w-20 h-20 object-cover rounded-full mr-7"
          src={profilePhotoURL || 'https://via.placeholder.com/50'}
          alt="User Avatar"
        />
        
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <p className="text-gray-800 font-semibold">{username}</p>
            <div className="relative">
              {user.uid === authorId ? (
                <div>
                  <button className="text-gray-600 hover:text-gray-800" onClick={handleOptionsClick}>
                    <AiOutlineEllipsis size={25} />
                  </button>

                  {showOptions && (
                    <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg">
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <button className="text-gray-600 hover:text-gray-800" onClick={handleOptionsClick}>
                    <AiOutlineEllipsis size={25} />
                  </button>
                  {showOptions && (
                    <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg">
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={handleInfo}
                      >
                        info
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <p className="text-gray-700 mt-1">{content}</p>
          <p className="text-gray-600 text-sm mt-2">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
