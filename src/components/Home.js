import React from 'react';

import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  padding-top: 138px;
  padding-bottom: 288px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &:after,
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    border-bottom: 10px solid #fff;
    z-index: 2;
  }

  &:before {
  }

  &:after {
  }

  @media (min-width: 992px) {
    padding-left: 110px;
    padding-right: 110px;
    padding-top: 279px;
  }

  .container {
    z-index: 10;
    height: 100%;
  }
`;

const BgOverlay = styled.div`
  background: linear-gradient(33deg, #8400ff, #413bff);
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;

  @media (min-width: 992px) {
    background-image: linear-gradient(62deg, #8400ff, #413bff);
  }
`;

const HomeTitle = styled.h1`
  font-weight: 300;
  text-align: center;
  color: #fff;
  font-size: 36px;
  z-index: 5;
  position: relative;
  line-height: 1.55;
  top: 56px;
  margin-bottom: 23px;
  font-family: 'GilroySemiBold';

  @media (min-width: 992px) {
    font-size: 56px;
    top: 0px;
    z-index: 5;
    line-height: 1.39;
    max-width: 1100px;
    margin-left: auto;
    width: 600px;
    margin-right: auto;
    margin-bottom: 0;
  }
`;

const SubTitle = styled.h5`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.83;
  text-align: center;
  color: #ffffff;

  @media (min-width: 992px) {
    max-width: 385px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 49px;
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <BgOverlay>
        <div className="Home-overlay" />
        <video autoPlay="autoplay" loop="loop" muted className="Home-video">
          <source
            src={require('../../src/assets/video/BG_1.mp4')}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </BgOverlay>
      <div className="container">
        <HomeTitle data-aos="zoom-in">
          Your next successful flight begins with us.
        </HomeTitle>
      </div>
    </Section>
  );
};

export default Home;
