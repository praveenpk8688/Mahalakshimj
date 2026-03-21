import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../Styles/MainNavbar.css';

function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`glass-navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <Container>
        <Navbar.Brand className="mainlogo" href="#">Mahalakshmi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="border-0 shadow-none">
          <i className="fa-solid fa-bars" style={{color: 'var(--primary-gold)'}}></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 mainNav"
            style={{ maxHeight: '250px' }}
            navbarScroll
          >
            <Nav.Link className="navLinks" href="#all">Jewellery</Nav.Link>
            <Nav.Link className="navLinks" href="#gold">Gold</Nav.Link>
            <Nav.Link className="navLinks" href="#silver">Silver</Nav.Link>
            <Nav.Link className="navLinks" href="#diamond">Diamond</Nav.Link>
            <Nav.Link className="navLinks" href="#gift">Gifting</Nav.Link>
          </Nav>
          <div className="navIcons">
            <button className="nav-icon-btn" aria-label="Search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="nav-icon-btn" aria-label="Account">
              <i className="fa-regular fa-user"></i>
            </button>
            <button className="nav-icon-btn" aria-label="Wishlist">
              <i className="fa-regular fa-heart"></i>
            </button>
            <button className="nav-icon-btn" aria-label="Cart">
              <i className="fa-solid fa-bag-shopping"></i>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;