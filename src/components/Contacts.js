import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  flex-direction: column;
  display: flex;
  background-color: black;
`;

const Contacts = () => {
  return (
    <Section id="contacts">
      <div className="Contacts-header">
        <div className="Contacts-header-content">
          <span>Get in touch with us:</span>
          <div />
          <div className="Contacts-header-contactContainer">
            <div className="Contacts-header-contactContainer-contact">
              <img src={require('../assets/img/contacts-pin.svg')} />
              <div className="Contacts-header-contactContainer-contact-text">
                <span className="Contacts-header-contactContainer-contact-text-1">
                  Tashkent, Uzbekistan
                </span>
                <div className="Contacts-header-contactContainer-contact-text-2-container">
                  <span>Tashkent International Airport Terminal 2</span>
                  <span>E-mail: info@eastwing.aero ops@eastwing.aero</span>
                  <span>Phone: +998976710000</span>
                </div>
              </div>
            </div>
            <div className="Contacts-header-contactContainer-contact">
              <img src={require('../assets/img/contacts-pin.svg')} />
              <div className="Contacts-header-contactContainer-contact-text">
                <span className="Contacts-header-contactContainer-contact-text-1">
                  Dubai, UAE
                </span>
                <div className="Contacts-header-contactContainer-contact-text-2-container">
                  <span>P.O. Box 94172 Dubai, United Arab Emirates</span>
                  <span>E-mail: info@eastwing.aero</span>
                  <span>Phone: +97155148 2579</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
