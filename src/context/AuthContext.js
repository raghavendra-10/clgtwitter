import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = async (email, password) => { // Mark the function as async
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
    if (userCredential.user) {
      // Send email verification
      await sendEmailVerification(userCredential.user);
    }
  };

  const signIn = (loginEmail, loginPassword) => {
    return signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubcribe();
    };
  });

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
