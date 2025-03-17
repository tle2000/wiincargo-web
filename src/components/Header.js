import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const toggleMoreMenu = () => {
    setShowMoreMenu(!showMoreMenu);
  };

  return (
    <header>
      <div className="header-left">
        <h2>B E T A C A R G O</h2>
      </div>
      <div className="header-right">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <div className="more-menu" onMouseEnter={toggleMoreMenu} onMouseLeave={toggleMoreMenu}>
            <span>More</span>
            {showMoreMenu && (
              <div className="more-dropdown">
                <Link to="/services">Services</Link>
                <Link to="/tracking">Tracking</Link>
                <Link to="/support">Support</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;