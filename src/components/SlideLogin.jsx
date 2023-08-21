import React, { useState } from "react";
// import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../context/AuthContext";


// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
import "./login.css";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const SlideLogin = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(email, password);
      toast.success("Registered Successfully");
    } catch (e) {
      toast.error(e.message);
    }
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      await signIn(loginEmail, loginPassword);
      navigate("/dashboard");
    } catch (e) {
      toast.error(e.message);
    }
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="body">
      <div className={`cont ${isSignup ? "right-panel-active" : ""}`}>
        <div className="form-cont sign-up-cont">
          <div className="font-thin text-sm pl-2 pt-1 ">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </div>
          <form className="form" onSubmit={handleSubmit}>
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
                setEmail(event.target.value);
              }}
              placeholder="@vishnu.edu.in"
            />
            <input
              className="input"
              type="password"
              name="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="Password"
            />
            <button className="button" type="submit">
              SignUp
            </button>
          </form>
        </div>
        <div className="form-cont sign-in-cont">
          <div className="font-thin text-sm pl-2 pt-1 ">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </div>
          <form onSubmit={handleLoginSubmit} className="form">
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
            <button className="button" type="submit">
              Sign In
            </button>
          </form>
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
