import React from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = () => {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    scroll.scrollTo({
      duration: 1500,
      delay: 100,
      smooth: 'easeInOutQuint',
      containerId: id,
    });
  };

  return (
    <header>
      <div className="navbar-overlay" />
      <Navbar bg="none" expand="lg" fixed="top">
        <Container>
          <div />
          <Navbar.Brand
            href="#home"
            onClick={scrollTo('home')}
            aria-label="Logo"
          >
            <div className="navbar-logoContainer">
              <div className="navbar-logoContainer-logo" />
              <span>eastwing</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span />
            <span />
            <span />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                Home
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                About
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                Services
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="partners"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                Partners
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="careers"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                Careers
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
