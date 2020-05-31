import React from 'react';

import styled from 'styled-components';

const Section = styled.section`
  position: relative;

  &:after,
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    border-bottom: 10px solid #fff;
    z-index: 1;
  }

  .container {
    z-index: 1;
    user-select: none;
    cursor: default;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    align-self: center;
  }
`;

const BgOverlay = styled.div`
  height: 100%;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;

  @media (max-width: 992px) {
    background-image: linear-gradient(62deg, #8400ff, #413bff);
  }
`;

const AboutTitle = styled.h1`
  font-weight: 300;
  text-align: center;
  color: #fff;
  margin-top: 0px;
  font-size: 16px;
  line-height: 1.5;
  font-family: 'GilroyMedium';
  margin-bottom: 23px;

  @media (min-width: 992px) {
    font-size: 24px;
    line-height: 1.39;
    max-width: 1100px;
    margin-left: auto;
    width: 700px;
    margin-right: auto;
    margin-bottom: 0;
  }
`;

const SubTitle = styled.h5`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
  text-align: center;
  color: #ffffff;
  z-index: 5;
  font-family: 'GilroyRegular';
  @media (min-width: 992px) {
    max-width: 700px;
    margin-left: auto;
    z-index: 5;
    margin-right: auto;
    margin-bottom: 49px;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
  }
`;

const About = () => {
  return (
    <Section id="about">
      <div class="About-header">
        <div class="About-header-content">
          <span>About</span>
          <div />
        </div>
      </div>
      <BgOverlay>
        {/* <div className="About-overlay" /> */}
        <video autoPlay="autoplay" loop="loop" muted className="About-video">
          <source
            src={require('../../src/assets/video/BG_2.mp4')}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </BgOverlay>
      <div className="container">
        <AboutTitle data-aos="zoom-in">
          At East Wing, we strive to be the most reliable and trusted partner
          for Uzbekistan’s growing Business Aviation industry.
          <SubTitle>
            Through our wide network of trusted international partners all
            around the world, and our wide array of services such as ground
            handling, direct-sale fueling, charter bookings and VIP travel
            arrangements, our team of highly experienced aviation specialists
            are your single point of contact for all your local and foreign
            business aviation needs.
          </SubTitle>
        </AboutTitle>
      </div>
    </Section>
  );
};

export default About;
