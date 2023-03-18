import React from 'react';
import styled from 'styled-components';

import HeroSection from '../../pages/HeroSection/HeroSection';
import AboutSection from '../../pages/AboutSection/AboutSection';

const StyledMainContainer = styled.main`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 150px;
`;

const MainContainer = () => {
  return (
    <StyledMainContainer>
      <HeroSection/>
      <AboutSection/>
    </StyledMainContainer>
  );
};

export default MainContainer;
