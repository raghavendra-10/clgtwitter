import React, { useState, useEffect } from "react";
import { db, storage } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDocs, where, query } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa"; // Import the spinner icon
import Logo from "../assests/BG.jpeg";

const Profile = () => {
  
  const { user } = UserAuth();
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profilePhotoURL, setProfilePhotoURL] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [isUploading, setIsUploading] = useState(false); // New state for upload status

  useEffect(() => {
    async function fetchProfilePhotoURL() {
      if (!user.uid) return;

      const profilesCollection = collection(db, "profiles");
      const q = query(profilesCollection, where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const profileData = querySnapshot.docs[0].data();
        setProfilePhotoURL(profileData.profilePhotoURL);
      }
    }

    fetchProfilePhotoURL();
  }, [user.uid]);

  const handlePhotoUpload = async () => {
    if (!profilePhoto || !user?.uid) return;

    try {
      setIsUploading(true); // Set upload status to true

      const storageRef = ref(storage, `profile-photos/${user.uid}`);
      await uploadBytes(storageRef, profilePhoto);

      const photoURL = await getDownloadURL(storageRef);
      setProfilePhotoURL(photoURL);
      setSelectedFileName("");
      setIsUploading(false); // Set upload status to false after successful upload

      const profilesCollection = collection(db, "profiles");
      await addDoc(profilesCollection, {
        uid: user.uid,
        profilePhotoURL: photoURL,
      });
      toast.success("Successfully uploaded");
    } catch (error) {
      setIsUploading(false); // Set upload status to false on error

      console.error("Error adding data to Firestore:", error);
      toast.error(error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
      setSelectedFileName(file.name);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 "style={{ backgroundImage: `url(${Logo})` }}>
      <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        <div className="mb-6">
          {profilePhotoURL ? (
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                <img
                  src={profilePhotoURL}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>

              <label
                htmlFor="profile-photo-input"
                className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 mt-2"
              >
                Change Profile Photo
              </label>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
                id="profile-photo-input"
              />
              {selectedFileName && (
                <div className="flex items-center mt-2">
                  <p className="text-gray-500 mr-2">
                    Selected File: {selectedFileName}
                  </p>
                  <button
                    className="bg-blue-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg"
                    onClick={handlePhotoUpload}
                    disabled={isUploading} // Disable the button when uploading
                  >
                    {isUploading ? (
                      <>
                        Uploading <FaSpinner className="animate-spin ml-1" />
                      </>
                    ) : (
                      "Upload"
                    )}
                  </button>
                </div>
              )}
            </div>
          ) : (
          
              <div className="flex flex-col items-center ">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                <img
                  src={profilePhotoURL||"https://via.placeholder.com/50"}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
                id="profile-photo-input"
              />
              <label
                htmlFor="profile-photo-input"
                className="cursor-pointer  bg-blue-500 text-white px-1 rounded-lg hover:bg-green-400"
              >
                Add Profile Photo
              </label>
              
              {selectedFileName && (
                <div className="flex items-center mt-2">
                  <p className="text-gray-500 mr-2">
                    Selected File: {selectedFileName}
                  </p>
                  <button
                    className="bg-blue-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg"
                    onClick={handlePhotoUpload}
                    disabled={isUploading} // Disable the button when uploading
                  >
                    {isUploading ? (
                      <>
                        Uploading <FaSpinner className="animate-spin ml-1" />
                      </>
                    
                    ) : (
                      "Upload"
                    )}
                  </button>
                </div>
                
              )}
              </div>

          )}
        </div>

        <Link to="/studentprofile">
          <button className="bg-blue-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg self-end">
            Save
          </button>
        </Link>
        {/* Additional form fields for other details */}
      </div>
    </div>
  );
};

export default Profile;
