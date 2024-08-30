

import React from 'react';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import image11 from '../images/Aboutusbg.jpg';
import image2 from '../images/image2.png';
import image3 from '../images/john.png';
import image4 from '../images/jane.png';
import gym1 from '../images/gym1.png';
import gym2 from '../images/gym2.png';
import gym3 from '../images/gym3.png';
import Navbar from './Navbar'; // Import Navbar
import Footer from './Footer'; // Import Footer
const AboutUs = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEnrollNowClick = () => {
    navigate('/signin'); // Navigate to /signin
  };
  return (
    <div className="AboutUs-container">
      {/* Top Section with Background Image */}
      <Navbar/>
      <div className="AboutUs-top-section" style={{ backgroundImage: `url(${image11})` }}>
        <div className="AboutUs-top-content">
          <h1 className="AboutUs-top-heading">Health, Fitness and Motivation</h1>
          <h2 className="AboutUs-top-subheading">Plan Your Health & Fitness Success</h2>
          <p className="AboutUs-top-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          {/* <button className="AboutUs-enroll-btn">Enroll Now</button> */}
          <button className="AboutUs-enroll-btn" onClick={handleEnrollNowClick}>Enroll Now</button> {/* Add onClick handler */}
        </div>
      </div>

      {/* Cards Section */}
      <div className="AboutUs-cards-section">
        <div className="AboutUs-card">
          <div className="AboutUs-card-icon" style={{ backgroundImage: `url(${gym1})` }}></div>
          <h3 className="AboutUs-card-heading">Analyse Your Goal</h3>
          <p className="AboutUs-card-paragraph">All the Lorem Ipsum generators on the internet All the Lorem Ipsum generators on the internet</p>
          <button className="AboutUs-read-more-btn">Read More</button>
        </div>
        <div className="AboutUs-card">
          <div className="AboutUs-card-icon" style={{ backgroundImage: `url(${gym2})` }}></div>
          <h3 className="AboutUs-card-heading">Work Hard on It</h3>
          <p className="AboutUs-card-paragraph">All the Lorem Ipsum generators on the internet All the Lorem Ipsum generators on the internet</p>
          <button className="AboutUs-read-more-btn">Read More</button>
        </div>
        <div className="AboutUs-card">
          <div className="AboutUs-card-icon" style={{ backgroundImage: `url(${gym3})` }}></div>
          <h3 className="AboutUs-card-heading">Achieve Your Destiny</h3>
          <p className="AboutUs-card-paragraph">All the Lorem Ipsum generators on the internet All the Lorem Ipsum generators on the internet</p>
          <button className="AboutUs-read-more-btn">Read More</button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="AboutUs-why-choose-us">
        <div className="AboutUs-left-content">
          <h2>Why Choose Us?</h2>
          <h3 className="AboutUs-subheading">Lorem Ipsum is Dummy Text of the Printing</h3>
          <p className="AboutUs-paragraph">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour 
          </p>
        </div>
        <div className="AboutUs-right-content">
          <img src={image2} alt="Why Choose Us" className="AboutUs-choose-us-img" />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="AboutUs-testimonials-section">
        <h2 className="AboutUs-customer-heading">Customer</h2>
        <h3 className="AboutUs-testimonials-heading">Testimonials</h3>
        <div className="AboutUs-testimonial-cards">
          <div className="AboutUs-testimonial-card">
            <div className="AboutUs-testimonial-icon">
              <img src={image4} alt="Customer 1" className="AboutUs-testimonial-img" />
              <div className="AboutUs-testimonial-quote">“</div>
            </div>
            <h4 className="AboutUs-testimonial-name">David White</h4>
            <p className="AboutUs-testimonial-paragraph">
              I really like the dresses from the Borcelle Boutique. Nice design, feminine color, soft and comfortable material...
            </p>
          </div>
          <div className="AboutUs-testimonial-card">
            <div className="AboutUs-testimonial-icon">
              <img src={image3} alt="Customer 1" className="AboutUs-testimonial-img" />
              <div className="AboutUs-testimonial-quote">“</div>
            </div>
            <h4 className="AboutUs-testimonial-name">David White</h4>
            <p className="AboutUs-testimonial-paragraph">
              I really like the dresses from the Borcelle Boutique. Nice design, feminine color, soft and comfortable material...
            </p>
          </div>
          <div className="AboutUs-testimonial-card">
            <div className="AboutUs-testimonial-icon">
              <img src={image4} alt="Customer 1" className="AboutUs-testimonial-img" />
              <div className="AboutUs-testimonial-quote">“</div>
            </div>
            <h4 className="AboutUs-testimonial-name">David White</h4>
            <p className="AboutUs-testimonial-paragraph">
              I really like the dresses from the Borcelle Boutique. Nice design, feminine color, soft and comfortable material...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
