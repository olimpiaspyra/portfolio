import React from 'react';
import styled from 'styled-components';

import HeroSection from '../../pages/HeroSection/HeroSection';
import AboutSection from '../../pages/AboutSection/AboutSection';
import ProjectsSection from '../../pages/ProjectsSection/ProjectsSection';
import SkillsSection from '../../pages/SkillsSection/SkillsSections';
import FormSection from '../../pages/FormSection/FormSection';
import FooterSection from '../../pages/FooterSection/FooterSection';

const StyledMainContainer = styled.main`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 150px;
`;

const MainContainer = () => {
  return (
    <StyledMainContainer>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <FormSection/>
      <FooterSection />
    </StyledMainContainer>
  );
};

export default MainContainer;
