import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './header.css';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* Top Bar / Brand Container */}
      <div className="header-top-bar">
        {/* Left-Aligned Logo & Name (Stacked) */}
        <div className="header-logo-wrapper">
          <a href="/" className="logo-link" onClick={closeMobileMenu}>
            <img 
              src={logo} 
              alt="PAREKH JEWELERS" 
              className="header-logo"
            />
            <span className="logo-title">PAREKH JEWELERS</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-hamburger-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="header-nav desktop-nav">
        <ul className="nav-list">
          <li className="nav-item active">
            <a href="/">HOME</a>
          </li>

          {/* Repair Services Dropdown */}
          <li 
            className={`nav-item dropdown-parent ${isDropdownOpen ? 'active' : ''}`}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a href="repair" className="nav-item active">
              REPAIR SERVICES
            </a>

            {/* 3-Column Dropdown Panel (Aligned Right) */}
            <div className={`mega-menu ${isDropdownOpen ? 'show' : ''}`}>
              <div className="mega-menu-content">
                <div className="menu-column">
                  <a href="Jewellery">RING REPAIRS</a>
                  <a href="ring_size">RING RESIZING</a>
                  <a href="chain">NECKLACE CHAIN REPAIRS</a>
                </div>

                <div className="menu-column">
                  <a href="pendant">PENDANT REPAIRS</a>
                  <a href="bracelet">BRACELET REPAIRS</a>
                  <a href="earring">EARRING REPAIRS</a>
                </div>

                <div className="menu-column">
                  <a href="catchess">CATCHES REPLACED</a>
                  <a href="neckles">NECKLACE RESIZING</a>
                  <a href="rodhium">RHODIUM &amp; GOLD PLATING</a>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a href="work">HOW IT WORKS</a>
          </li>
          <li className="nav-item">
            <a href="example">REPAIR EXAMPLES</a>
          </li>
          <li className="nav-item">
            <a href="request">REQUEST A QUOTE</a>
          </li>
          <li className="nav-item">
            <a href="contact">CONTACT</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Backdrop */}
      <div 
        className={`mobile-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Slide-Out Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <button 
          className="drawer-close-btn" 
          onClick={closeMobileMenu} 
          aria-label="Close menu"
        >
          &#10005;
        </button>

        <ul className="mobile-menu-list">
          <li><a href="/" className="gold-active" onClick={closeMobileMenu}>HOME</a></li>
          <li><a href="work" onClick={closeMobileMenu}>HOW IT WORKS</a></li>
          <li><a href="example" onClick={closeMobileMenu}>REPAIR EXAMPLES</a></li>
          <li><a href="request" onClick={closeMobileMenu}>REQUEST A QUOTE</a></li>
          <li><a href="Jewellery" onClick={closeMobileMenu}>RING REPAIRS</a></li>
          <li><a href="ring_size" className="gold-active" onClick={closeMobileMenu}>RING RESIZING</a></li>
          <li><a href="chain" onClick={closeMobileMenu}>NECKLACE CHAIN REPAIRS</a></li>
          <li><a href="earring" onClick={closeMobileMenu}>PENDANT REPAIRS</a></li>
          <li><a href="earring" onClick={closeMobileMenu}>BRACELET REPAIRS</a></li>
          <li><a href="earring" onClick={closeMobileMenu}>EARRING REPAIRS</a></li>
          <li><a href="catchess" onClick={closeMobileMenu}>CATCHES REPLACED</a></li>
          <li><a href="neckles" onClick={closeMobileMenu}>NECKLACE RESIZING</a></li>
          <li><a href="rodhium" onClick={closeMobileMenu}>RHODIUM &amp; GOLD PLATING</a></li>
          <li><a href="contact" onClick={closeMobileMenu}>CONTACT</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;