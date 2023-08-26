import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
    if (userCredential.user) {
      // Store the user data temporarily
      setUser({
        ...user,
        email: userCredential.user.email,
        password, // You might not want to store the password here in a real-world scenario
        emailVerified: userCredential.user.emailVerified,
      });

      // Send email verification
      await sendEmailVerification(userCredential.user);
    }
  };
  const sendPasswordResetEmail = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent. Please check your inbox.");
    } catch (error) {
      toast.error("Error sending password reset email.");
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
    <UserContext.Provider value={{ createUser, user, logout, signIn, sendPasswordResetEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
