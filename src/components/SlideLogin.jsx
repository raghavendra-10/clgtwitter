import React, { useState } from "react";
import "./login.css";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const SlideLogin = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="body">
    <div className={`cont ${isSignup ? "right-panel-active" : ""}`}>
      <div className="form-cont sign-up-cont">
        <form className="form" action="">
          <h1 className="h1 text-3xl">Create Account</h1>
          <div className="social-cont">
            <a href="#" className="a social">
              <FaFacebookF />
            </a>
            <a href="#" className="a social">
              <FaGoogle />
            </a>
            <a href="#" className="a social">
              <FaTwitter />
            </a>
          </div>
          <span className="span">or use your email for registration</span>
          <input className="input" type="text" name="name" placeholder="Name" />
          <input className="input" type="email" name="email" placeholder="Email" />
          <input className="input" type="password" name="password" placeholder="Password" />
          <button className="button">SignUp</button>
        </form>
      </div>
      <div className="form-cont sign-in-cont">
        <form className="form" action="#">
          <h1 className="h1 text-3xl">Sign In</h1>
          <div className="social-cont">
            <a href="#" className="a social">
              <FaFacebookF />
            </a>
            <a href="#" className="a social">
              <FaGoogle />
            </a>
            <a href="#" className="a social">
              <FaTwitter />
            </a>
          </div>
          <span className="span">or use your account</span>
          <input className="input" type="email" name="email" placeholder="Email" />
          <input className="input" type="password" name="password" placeholder="Password" />
          <a href="#" className="a">Forgot Your Password</a>
          <button className="button">Sign In</button>
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
            <p className="p">Enter your details and start the journey with us</p>
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
