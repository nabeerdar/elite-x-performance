import React, { useEffect } from 'react';
import './signin.css'; 
import { Link } from "react-router-dom";
import exampleImage from '../../images/black button.png'; 
import logo from '../../images/logo.png';
import video1 from '../../images/video1.mp4';
import video3 from '../../images/video3.mp4';
import video4 from '../../images/video4.mp4';
import video5 from '../../images/video5.mp4';

const Authenticate = () => {
  useEffect(() => {
    const videoElement = document.getElementById('bg-video');
    const videoSource = videoElement.querySelector('source');

    // List of video sources
    const videos = [video1, video3, video4, video5];

    // Function to get a random video from the list
    function getRandomVideo() {
      const randomIndex = Math.floor(Math.random() * videos.length);
      return videos[randomIndex];
    }

    // Set the source to a random video
    videoSource.src = getRandomVideo();

    // Load the new video source
    videoElement.load();
  }, []);

  return (
    
    <div className='sports'>
        <Link to="/" className="back-button">
        <img src={exampleImage} alt="Back" />
      </Link>
      <video autoPlay muted loop id="bg-video">
        <source type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="login-wrap">
        <div className="login-html">
          <div className="img-wrapper">
            <img className="img" src={logo} alt="Logo" />
          </div>
          <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
          <label htmlFor="tab-1" className="tab">Sign In</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">Sign Up</label>
          <div className="login-form">
            <form id="sign-in-form" className="sign-in-htm">
              <div id="login-message" className="message"></div>
              <div className="group">
                <label htmlFor="login-username" className="label">Username</label>
                <input id="login-username" type="text" className="input" required />
              </div>
              <div className="group">
                <label htmlFor="login-password" className="label">Password</label>
                <input id="login-password" type="password" className="input" required />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" defaultChecked />
                <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
              </div>
              <div className="group">
                <button type="submit" className="button">Sign In</button>
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </form>
            <form id="sign-up-form" className="sign-up-htm">
              <div id="register-message" className="message"></div>
              <div className="group">
                <label htmlFor="register-username" className="label">Username</label>
                <input id="register-username" type="text" className="input" required />
              </div>
              <div className="group">
                <label htmlFor="register-password" className="label">Password</label>
                <input id="register-password" type="password" className="input" required />
              </div>
              <div className="group">
                <label htmlFor="register-repeat-password" className="label">Repeat Password</label>
                <input id="register-repeat-password" type="password" className="input" required />
              </div>
              <div className="group">
                <label htmlFor="register-email" className="label">Email Address</label>
                <input id="register-email" type="email" className="input" required />
              </div>
              <div className="group">
                <button type="submit" className="button">Sign Up</button>
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authenticate;
