import React from 'react';
import './MembershipPlans.css';

import Mobile from '../images/mobile.png';


const MembershipPlans = () => {
  return (
    <div className="membership-plans-container">
      <h1 className="choose-plan-heading">CHOSSE A PLAN THAT WORKS FOR YOU 
      </h1>
      <div className="plans-wrapper">
        <div className="left-container">
          <img src={Mobile} alt="Small Mobile Image" className="small-mobile-image" />
        </div>
        <div className="right-container">
          <div className="card">
            <div className="green-chip">Best Value</div>
            <h3 className="subheading">24 Month Membership</h3>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et lacus condimentum fermentum.
            </p>
            <div className="price">$199</div>
          </div>
          <div className="card">
            <div className="green-chip">Most Popular</div>
            <h3 className="subheading">Annual Membership</h3>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et lacus condimentum fermentum.
            </p>
            <div className="price">$99</div>
          </div>
          <div className="card black-background">
            <div className="free-trial-chip">Free Trial</div>
            <h3 className="subheading">1 Month Free Trial</h3>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et lacus condimentum fermentum.
            </p>
            <div className="price">$0</div>
          </div>
        </div>
      </div>

    </div>
  
  );
}

export default MembershipPlans;
