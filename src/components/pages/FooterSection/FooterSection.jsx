import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
max-width: 1000px;
width: 100%;
height: auto;
margin 0 auto;
padding: 20px 50px;
text-align: center;
font-family: var(--font-mono);
font-size: 1.4rem;


  @media screen and (max-width: 1200px) {
  padding: 20px 0;
  }
}
`;

const FooterSection = () => {
  return (
    <StyledContainer>
      &copy; Copyright {new Date().getFullYear()} Olimpia Spyra
    </StyledContainer>
  );
};

export default FooterSection;
