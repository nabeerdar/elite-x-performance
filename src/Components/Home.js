import React from 'react';
import { useNavigate } from 'react-router-dom';
import MembershipPlans from './MembershipPlans';

import './Home.css'; 
import dummyImage from '../images/dummy.png';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/signin');
  };

  return (
    <>
      <div className="home-container">
        <div className="main-text">
          <h1 className='top-text'>IT'S ALL ABOUT WHAT YOU CAN ACHIEVE</h1>
          <p>Empower yourself to make the changes you need to make</p>
          <button className="cta-button" onClick={handleGetStartedClick}>LET'S GET STARTED</button>
        </div>
        <div className="image-container">
          <img src={dummyImage} alt="Fitness" />
        </div>
      </div>
      <MembershipPlans />
    </>
  );
};

export default Home;
