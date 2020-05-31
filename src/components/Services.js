import React, { useEffect } from 'react';

import styled from 'styled-components';

const Section = styled.section`
  flex-direction: column;
  display: flex;
  background-color: white;
  margin-top: -8px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  margin-bottom: 30px;
  background: #ffffff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  &:hover {
    transform: translateY(-5px) !important;
  }
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 200px;
  max-height: 200px;
  border: solid 1px #eff2f9;
  background-color: #f8faff;
  position: relative;
  > img {
    transition: all 0.3s ease-in;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }
`;

const BoxTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  color: #0e1b2c;
  padding-top: 16px;
  padding-right: 30px;
  padding-left: 30px;
  margin: 0px;
  margin-block-end: 0px;
  font-family: 'GraphikMedium';
  letter-spacing: 0.5px;
  margin-block-start: 0px;
  > div {
    width: 32px;
    height: 4px;
    margin-top: 12px;
    margin-bottom: 8px;
    background-color: #3283e6;
  }
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: normal;
  margin: 0px;
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 24px;
  line-height: 1.58;
  color: #334357;
  opacity: 0.8;
  margin-bottom: 0;
  font-family: 'GraphikLight';
  max-width: 350px;
  @media (max-width: 992px) {
    max-width: 600px;
  }
`;

const Services = () => {
  const width = window.innerWidth;
  return (
    <Section id="services">
      <div className="Services-header">
        <div className="Services-header-content">
          <span>Services</span>
          <div />
        </div>
      </div>
      <div className="Services-rowWrapper">
        <div className="row">
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? 'fade-right' : 'fade-up'}>
              <ImageWrap>
                <img alt="" src={require('../assets/img/fueling.jpg')} />
              </ImageWrap>
              <BoxTitle>
                <span>Fueling</span>
                <div />
              </BoxTitle>
              <Text>
                We pride ourselves on being the direct fuel seller in
                Uzbekistan. By eliminating any intermediaries, we ensure you
                always receive the best price for all your Business Aircraft
                fueling requirements.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos="fade-up">
              <ImageWrap>
                <img alt="" src={require('../assets/img/permits.jpg')} />
              </ImageWrap>
              <BoxTitle>
                <span>Permits</span>
                <div />
              </BoxTitle>
              <Text>
                Short notice overflight permits and landing requests will be
                handled at the utmost accurate and quickest speeds to ensure
                your flight happens according to your requested schedule and
                without any delays. In any location worldwide it is essential
                that you can rely on our dedicated operations team.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? 'fade-left' : 'fade-up'}>
              <ImageWrap>
                <img
                  alt=""
                  src={require('../assets/img/ground_handling.jpeg')}
                />
              </ImageWrap>
              <BoxTitle>
                <span>Ground H</span>
                <div />
              </BoxTitle>
              <Text>
                Our dedicated ground handling professionals in Uzbekistan are at
                your service 24/7 to accommodate all your flight requests for
                all type of aircraft and ensure the highest standard and swift
                VIP aircraft handling, ground servicing and cargo.
              </Text>
            </Box>
          </div>
        </div>
      </div>
      <div className="Services-rowWrapper">
        <div className="row">
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? 'fade-right' : 'fade-up'}>
              <ImageWrap>
                <img alt="" src={require('../assets/img/dispatch.jpg')} />
              </ImageWrap>
              <BoxTitle>
                <span>Dispatch</span>
                <div />
              </BoxTitle>
              <Text>
                By carefully analyzing all your flight details, our dedicated
                team will provide you a full dispatch package including flight
                plans, Navigation, NOTAMS and weather analysis, airports in use
                and ATC route filling.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos="fade-up">
              <ImageWrap>
                <img alt="" src={require('../assets/img/travel.jpg')} />
              </ImageWrap>
              <BoxTitle>
                <span>Travel</span>
                <div />
              </BoxTitle>
              <Text>
                We offer a wide range of bespoke travel services, such as luxury
                hotel arrangements, VIP transfer and helicopter charters. In any
                part of the world, whether it’s a holiday or business travel,
                our travel experts have the best recommendations and will ensure
                a memorable experience.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? 'fade-left' : 'fade-up'}>
              <ImageWrap>
                <img
                  alt=""
                  src={require('../assets/img/charter_services.jpeg')}
                />
              </ImageWrap>
              <BoxTitle>
                <span>Charter Services</span>
                <div />
              </BoxTitle>
              <Text>
                We understand the importance of creating the most bespoke flight
                experience for our highly valued customers. From light jets to
                ultra-long range aircraft, our dedicated team of highly skilled
                charter sales executives liaise with operators and aircraft
                owners around the world to secure the most suitable aircraft for
                your travel requirements, as well as ensure you always get the
                most competitive quotes.
              </Text>
            </Box>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
