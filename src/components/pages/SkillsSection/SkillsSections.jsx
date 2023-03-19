import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;
  min-height: 100vh;

  @media screen and (max-width: 1200px) {
    padding: 0;
  }

  h2 {
    display: flex;
    align-items: center;
    margin: 10px 0 40px;
    font-size: 2.6rem;
    color: var(--green);

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      margin-left: 20px;
      height: 1px;
      width: 30%;
      background-color: var(--lightest-navy);
    }
  }
`;

const StyledSection = styled.div`
  h3 {
    margin: 60px 0;
    font-family: var(--font-mono);
    color: var(--lightest-slate);
    font-weight: 600;
    text-align: center;
  }
`;

const StyledSkills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  p {
    display: inline-block;
    margin: 10px;
    padding: 8px 16px;
    border: 1px solid var(--slate);
    border-radius: 5px;
  }
`;

const SkillsSection = () => {
  return (
    <StyledContainer>
      <h2>Skills</h2>
      <StyledSection>
        <h3>Programming</h3>
        <StyledSkills>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>SASS</p>
          <p>BEM</p>
          <p>Bootstrap</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Redux</p>
          <p>Hooks</p>
          <p>Styled-Components</p>
        </StyledSkills>
        <h3>Tools & Others</h3>
        <StyledSkills>
          <p>Webpack</p>
          <p>Git & GitHub</p>
          <p>NPM</p>
          <p>ESLint</p>
          <p>Prettier</p>
          <p>Jira</p>
          <p>Trello</p>
        </StyledSkills>
      </StyledSection>
    </StyledContainer>
  );
};

export default SkillsSection;
