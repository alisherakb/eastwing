import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

const Section = styled.section`
  flex-direction: column;
  display: flex;
  background-color: black;
`;

const Footer = () => {
  return (
    <Section id="footer">
      <div className="Footer">
        <div className="Footer-logo">
          <img src={require('../assets/img/logo-white.svg')} />
          <span>Eastwing</span>
        </div>
        <div className="Footer-links">
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
        </div>
        <div className="Footer-social">
          <button>
            <img src={require('../assets/img/instagram.svg')} />
          </button>
          <button>
            <img src={require('../assets/img/facebook.svg')} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
