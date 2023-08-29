// TweetsList.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import { getDocs, where, query } from 'firebase/firestore';

import Tweet from './Tweet';

const TweetsList = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const tweetsCollection = collection(db, 'tweets');
    const unsubscribe = onSnapshot(tweetsCollection, async (querySnapshot) => {
      const tweetsData = await Promise.all(
        querySnapshot.docs.map(async (tweetDoc) => {
          const tweetData = tweetDoc.data();
          const authorUid = tweetData.authorId;

          // Fetch the profile photo URL for the user based on UID
          const profilesCollection = collection(db, 'profiles');
          const q = query(profilesCollection, where('uid', '==', authorUid));
          const profileQuerySnapshot = await getDocs(q);

          let profilePhotoURL = null;
          if (!profileQuerySnapshot.empty) {
            const profileData = profileQuerySnapshot.docs[0].data();
            profilePhotoURL = profileData.profilePhotoURL;
          }

          return {
            id: tweetDoc.id,
            ...tweetData,
            profilePhotoURL,
          };
        })
      );

      // Sort tweets by createdAt in descending order
      tweetsData.sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis());

      setTweets(tweetsData);
    }, (error) => {
      console.error('Error fetching tweets:', error); // Handle error
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='pt-2'>
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          username={tweet.authorEmail}
          content={tweet.content}
          profilePhotoURL={tweet.profilePhotoURL}
          timestamp={tweet.createdAt?.toDate().toLocaleString()} // Adding optional chaining
        />
      ))}
    </div>
  );
};

export default TweetsList;