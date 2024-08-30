import React from 'react';
import './ActivityPage.css'; 
import IMAGE1 from '../images/image1.jpg';


const ActivityPage = () => {
    return (
        <div className="activity-container">
            <div className='activity-text'>
            <h4 className="activity-heading">We Keep Track of the Details</h4>
            <div className="activity-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum nisl at ligula tristique, sed vulputate lacus mollis. Nam efficitur eros at tellus dignissim, a malesuada urna vestibulum.</p>
            </div>
            </div>
           
            <img src={IMAGE1} alt="Image 1" className="activity-image" />
           
        </div>
    );
}

export default ActivityPage;
