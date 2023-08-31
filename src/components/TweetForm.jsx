import React, { useState, useRef } from 'react';
import { db, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { BsImage } from 'react-icons/bs';

const TweetForm = ({ user, profilePhotoURL, onClose }) => {
  const [tweet, setTweet] = useState('');
  const [tweetPhoto, setTweetPhoto] = useState(null);
  const inputFileRef = useRef(null); // Reference to the input element

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let tweetPhotoURL = '';
      if (tweetPhoto) {
        const storageRef = ref(storage, `tweet-photos/${user.uid}_${Date.now()}`);
        await uploadBytes(storageRef, tweetPhoto);
        tweetPhotoURL = await getDownloadURL(storageRef);
      }
      await addDoc(collection(db, 'tweets'), {
        content: tweet,
        authorId: user.uid,
        authorEmail: user.email,
        createdAt: new Date(),
        tweetPhotoURL: tweetPhotoURL,
      });

      setTweet('');
      setTweetPhoto(null);
      toast.success('Tweeted Successfully');
      onClose(); // Close the modal after successful tweet
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleIconClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click(); // Trigger the file input's click event
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
        <div className="flex justify-between w-full">
          <div className="relative flex items-center">
            <div className="icon-container cursor-pointer px-4 py-3 bg-blue-300 rounded-md hover:bg-pink-400" onClick={handleIconClick}>
              <BsImage className="upload-icon text-xl" />
            </div>
            {tweetPhoto && (
              <span className="ml-2 text-sm">{tweetPhoto.name}</span>
            )}
            <input
              type="file"
              accept="image/*"
              ref={inputFileRef}
              style={{ display: 'none' }}
              onChange={(e) => setTweetPhoto(e.target.files[0])}
            />
          </div>
          <div className="flex gap-2">
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
        </div>

          
        
      </form>
    </div>
  );
};

export default TweetForm;
