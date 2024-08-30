import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className="header">
                <div className="logo-name">
                    <img src={logo} alt="Logo" />
                </div>

                {/* Navigation Tabs */}
                <div className="nav-tabs">
                    <div className="tab">
                        Training <FontAwesomeIcon icon={faCaretDown} />
                        <div className="dropdown-menu">
                            <Link to="/Cardiac" className="dropdown-item">Cardiac</Link>
                            <Link to="/Flexibility" className="dropdown-item">Flexibility</Link>
                        </div>
                    </div>
                    <Link to="/AboutUs" className="tab">About Us</Link>
                    <Link to="/ContactUs" className="tab">Contact Us</Link>
                    <Link to="/signin" className="tab">Join Now</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="menu-toggle" onClick={toggleMenu}>
                    {showMenu ? (
                        <FontAwesomeIcon icon={faTimes} size="1.3x" />
                    ) : (
                        <FontAwesomeIcon icon={faBars} size="1.6x" />
                    )}
                </div>
            </div>

            {/* Responsive Menu */}
            {showMenu && (
                <div className="responsive-menu">
                    <div className="tab1" style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ flex: 1 }}>Training</span>
                        <FontAwesomeIcon className="mobile-caret" icon={faCaretDown} />
                        <div className="dropdown-menu">
                            <Link to="/Cardiac" className="dropdown-item tab1-dropdown">Cardiac</Link>
                            <Link to="/Flexibility" className="dropdown-item tab1-dropdown">Flexibility</Link>
                        </div>
                    </div>
                    <Link to="/AboutUs" className="tab1">About Us</Link>
                    <Link to="/ContactUs" className="tab1">Contact Us</Link>
                    <Link to="/signin" className="tab1">Join Now</Link>
                </div>
            )}
        </>
    );
};

export default Navbar;
