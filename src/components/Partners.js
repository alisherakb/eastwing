import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  flex-direction: column;
  display: flex;
  background-color: white;
`;

const Partners = () => {
  return (
    <Section id="partners">
      <div class="Partners-header">
        <span>Our quality is assured by heighest standarts.</span>
        <div />
        <img alt="" src={require('../assets/img/partners.jpg')} />
        <div />
      </div>
    </Section>
  );
};

export default Partners;
