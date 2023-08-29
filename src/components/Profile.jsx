import React, { useState ,useEffect} from 'react';
import { db, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {  getDocs, where, query } from 'firebase/firestore';
import { UserAuth } from '../context/AuthContext';
const Profile = () => {
  const {user}=UserAuth();
  const [profilePhoto, setProfilePhoto] = useState(null);
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
  const handlePhotoUpload = async () => {
    console.log('handlePhotoUpload function called');
    console.log(user.uid)
    if (!profilePhoto || !user?.uid) return;
  
    try {
      const storageRef = ref(storage, `profile-photos/${user.uid}`);
      await uploadBytes(storageRef, profilePhoto);
  
      const photoURL = await getDownloadURL(storageRef);
      console.log('Generated photoURL:', photoURL);
  
      setProfilePhotoURL(photoURL);
  
      // Assuming you have a 'profiles' collection in Firestore
      const profilesCollection = collection(db, 'profiles');
      await addDoc(profilesCollection, {
        uid: user.uid,
        profilePhotoURL: photoURL,
      });
      console.log('Data added to Firestore');
    } catch (error) {
      console.error('Error adding data to Firestore:', error);
    }
  };
  

  return (
    <div>
      <h2>Edit Profile</h2>
      {profilePhotoURL && (
        <img src={profilePhotoURL} alt="Profile" className="w-20 h-20 rounded-full mb-2" />
      )}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setProfilePhoto(e.target.files[0])}
      />
      <button onClick={handlePhotoUpload}>Upload Profile Photo</button>
      {/* Additional form fields for other details */}
    </div>
  );
};

export default Profile;
