import React, { useState } from 'react';
import { db, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

const Profile = ({ user }) => {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePhotoUpload = async () => {
    if (!profilePhoto) return;

    const storageRef = ref(storage, `profile-photos/${user.uid}`);
    await uploadBytes(storageRef, profilePhoto);

    // Assuming you have a 'profiles' collection in Firestore
    const profilesCollection = collection(db, 'profiles');
    await addDoc(profilesCollection, {
      uid: user.uid,
      profilePhotoURL: await storageRef.getDownloadURL(),
    });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
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
