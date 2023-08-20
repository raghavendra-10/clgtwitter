import React, { useState} from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./login.css";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const SlideLogin = ({ setIsAuthenticated }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@vishnu\.edu\.in$/;
  const register = async () => {
    try {
      if (!emailPattern.test(registerEmail)) {
        toast.error("Please use a valid vishnu.edu.in email.");
        return;
      }

      await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);

      toast.success("Registered successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const login = async () => {
    try {
      if (!emailPattern.test(loginEmail)) {
        toast.error("Please use a valid vishnu.edu.in email.");
        return;
      }

      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
   
     
    <div className="body">
      
      <div className={`cont ${isSignup ? "right-panel-active" : ""}`}>
        <div className="form-cont sign-up-cont">
        <div className="font-thin text-sm pl-2 pt-1 "><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></div>
          <div className="form">
        
            <h1 className="h1 text-3xl">Create Account</h1>
            <div className="social-cont">
              <a href="/" className="a social">
                <FaFacebookF />
              </a>
              <a href="/" className="a social">
                <FaGoogle />
              </a>
              <a href="/" className="a social">
                <FaTwitter />
              </a>
            </div>
            <span className="span">or use your email for registration</span>
            {/* <input className="input" type="text" name="name" value={email}  placeholder="Name" /> */}
            <input
              className="input"
              type="email"
              name="email"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
              placeholder="@vishnu.edu.in"
            />
            <input
              className="input"
              type="password"
              name="password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
              placeholder="Password"
            />
            <button className="button" onClick={register}>
              SignUp
            </button>
          </div>
        </div>
        <div className="form-cont sign-in-cont">
        <div className="font-thin text-sm pl-2 pt-1 "><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></div>
          <div className="form">
            <h1 className="h1 text-3xl">Sign In</h1>
            <div className="social-cont">
              <a href="/" className="a social">
                <FaFacebookF />
              </a>
              <a href="/" className="a social">
                <FaGoogle />
              </a>
              <a href="/" className="a social">
                <FaTwitter />
              </a>
            </div>
            <span className="span">or use your account</span>
            <input
              className="input"
              type="email"
              name="email"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
              placeholder="@vishnu.edu.in"
            />
            <input
              className="input"
              type="password"
              name="password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
              placeholder="Password"
            />
            {/* <a href="/" className="a">Forgot Your Password</a> */}
            <button className="button" onClick={login}>
              Sign In
            </button>
          </div>
        </div>
        <div className="overlay-cont">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="h1 text-3xl">Welcome Back!</h1>
              <p className="p">
                To keep connected with us please login with your personal info
              </p>
              <button className="button ghost" onClick={toggleForm}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="h1 text-3xl">Hello, Friend!</h1>
              <p className="p">
                Enter your details and start the journey with us
              </p>
              <button className="button ghost" onClick={toggleForm}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default SlideLogin;
