// TweetsList.jsx
import React, { useEffect, useState,useCallback } from 'react';
import { db } from '../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import { getDocs, where, query } from 'firebase/firestore';

import Tweet from './Tweet';

const TweetsList = () => {
  const [tweets, setTweets] = useState([]);

  const showNotification = useCallback((newTweetsCount) => {
    if (Notification.permission === 'granted') {
      const options = {
        body: `${newTweetsCount} new tweets added.`,
        icon: '/path/to/notification-icon.png', // Replace with your notification icon
      };
      new Notification('New Tweets', options);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          showNotification(newTweetsCount);
        }
      });
    }
  }, []);

  useEffect(() => {
    const tweetsCollection = collection(db, 'tweets');
    const unsubscribe = onSnapshot(tweetsCollection, async (querySnapshot) => {
      const tweetsData = await Promise.all(
        querySnapshot.docs.map(async (tweetDoc) => {
          const tweetData = tweetDoc.data();
          const authorUid = tweetData.authorId;
          console.log(tweetData)
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
      const newTweetsCount = tweetsData.length - tweets.length;
      setTweets(tweetsData);
      if (newTweetsCount > 0) {
        showNotification(newTweetsCount);
      }
    }, (error) => {
      console.error('Error fetching tweets:', error); // Handle error
    });

    return () => unsubscribe();
  }, [tweets.length, showNotification]);

  return (
    <div className='pt-2'>
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          id={tweet.id}
          username={tweet.authorEmail}
          content={tweet.content}
          profilePhotoURL={tweet.profilePhotoURL}
          authorId={tweet.authorId}
          tweetPhotoURL={tweet.tweetPhotoURL}
          timestamp={tweet.createdAt?.toDate().toLocaleString()} // Adding optional chaining
        />
      ))}
    </div>
  );
};

export default TweetsList;