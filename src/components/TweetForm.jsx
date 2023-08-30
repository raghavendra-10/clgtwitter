import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TweetForm = ({ user, profilePhotoURL, onClose }) => {
  const [tweet, setTweet] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'tweets'), {
        content: tweet,
        authorId: user.uid,
        authorEmail: user.email,
        createdAt: new Date(),
      });
      setTweet('');
      toast.success('Tweeted Successfully');
      onClose(); // Close the modal after successful tweet
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        {profilePhotoURL && (
          <img src={profilePhotoURL} alt="Profile" className="w-12 h-12 rounded-full mr-3" />
        )}
        <textarea
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          placeholder="What's on your mind?"
          rows={6}
          className="w-full h-58 p-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
          required
        />
        <div className="flex justify-end mt-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            Close
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-600 ml-2"
          >
            Go
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;
