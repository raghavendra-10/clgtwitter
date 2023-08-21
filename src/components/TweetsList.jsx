import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Make sure the path is correct
import { collection, onSnapshot } from "firebase/firestore";

const TweetsList = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const tweetsCollection = collection(db, 'tweets');
    const unsubscribe = onSnapshot(tweetsCollection, (querySnapshot) => {
      const tweetsData = querySnapshot.docs.map((tweetDoc) => {
        const tweetData = tweetDoc.data();
        return {
          id: tweetDoc.id,
          ...tweetData,
        };
      });

      // Sort tweets by createdAt in descending order
      tweetsData.sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());

      setTweets(tweetsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Tweets</h2>
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <p>{tweet.content}</p>
          <p>Author: {tweet.authorEmail}</p>
          <p>Time: {tweet.createdAt.toDate().toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default TweetsList;
