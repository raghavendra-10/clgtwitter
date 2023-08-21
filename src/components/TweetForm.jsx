import React, { useState } from 'react';
import { db } from '../firebaseConfig'; // Import your Firebase instance
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TweetForm = ({ user }) => {
  const [tweet, setTweet] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'tweets'), {
        content: tweet,
        authorId: user.uid, // Store the UID of the logged-in user
        authorEmail: user.email, // Store the email of the logged-in user
        createdAt: new Date(),
      });
      setTweet('');
      toast.success("Tweeted Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          placeholder="What's on your mind?"
          rows={4}
        />
        <button type="submit">Tweet</button>
      </form>
    </div>
  );
};

export default TweetForm;
