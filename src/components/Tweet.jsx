import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineShareAlt } from 'react-icons/ai';

const Tweet = ({ username, content, timestamp }) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="bg-white p-4 border rounded-lg shadow-md transition duration-50 ease-out hover:ease-in hover:border-navy-300 hover:border-2 mb-4">
      <div className="flex items-start">
        <img
          className="w-12 h-12 rounded-full mr-3"
          src="https://via.placeholder.com/50"
          alt="User Avatar"
        />
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <p className="text-gray-800 font-semibold">{username}</p>
            <p className="text-gray-600 text-sm">{timestamp}</p>
          </div>
          <p className="text-gray-700 mt-1">{content}</p>
          <div className="mt-2">
            <button className="text-blue-500 hover:underline text-sm" onClick={handleLike}>
              <AiOutlineLike /> Like ({likeCount})
            </button>

            <button className="text-gray-500 hover:underline text-sm ml-4">
              <AiOutlineShareAlt /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
