import { useState } from "react";
import { AuthContext } from "./AuthContext";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../fireBase/firebase.config";
const AuthProvider = ({ children }) => {
  const [user, setUSer] = useState();
  // ----------------------------------------
  // registration-----------
  const createWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signIn-----------------------
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Google SignIn-----------
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // ✅ Forgot Password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authData = {
    user,
    setUSer,
    createWithEmail,
    signInWithEmail,
    signInWithGoogle,
    resetPassword,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
