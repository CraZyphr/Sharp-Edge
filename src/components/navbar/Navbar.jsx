import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleNavbarVisibility = () => {
      const currentScrollPos = window.scrollY;
      const scrollingUp = currentScrollPos < prevScrollPos;

      setNavbarVisible(scrollingUp || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    handleNavbarVisibility();

    window.addEventListener('scroll', handleNavbarVisibility);

    return () => {
      window.removeEventListener('scroll', handleNavbarVisibility);
    };
  }, [prevScrollPos]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={`navbar navbar-expand-md navbar-dark fixed-top ${navbarVisible ? '' : 'navbar-hidden'} ${navbarVisible && window.scrollY === 0 ? 'at-top' : ''}`} id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top" onClick={scrollToTop}>
          <img src="https://i.postimg.cc/Pxp36qLq/white-logo.png" alt="Logo" style={{ height: '40px', marginBottom: '5px', marginLeft: '20px' }} />
          <span style={{ color: 'white' }}> The </span>
          <span>Sharp Edge</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-5 py-4 py-sm-0">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            {/* Add other list items as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
