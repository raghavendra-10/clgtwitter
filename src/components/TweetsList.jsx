import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, onSnapshot } from "firebase/firestore";
import Tweet from './Tweet';

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
    <div className=''>
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          username={tweet.authorEmail}
          content={tweet.content}
          timestamp={tweet.createdAt.toDate().toLocaleString()}
        />
      ))}
    </div>
  );
};

export default TweetsList;
