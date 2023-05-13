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
  display: flex;
  justify-content-center;
`;

const StyledDescription = styled.div`
  display: flex
  flex-direction: column;
  flex-basis: 50%;

  h3 {
    margin-bottom: 20px;
    font-family: var(--font-mono);
    color: var(--lightest-slate);
    font-weight: 600;
    text-align: center;
  }

  p {
    text-align: center;
  }
`;

const StyledTechnologies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px 0;
  padding: 5px 5px;

  p {
    width: 80px;
    margin: 5px 5px;
    padding: 6px 12px;
    border: 1px solid var(--slate);
    color: var(--slate);
    border-radius: 5px;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;

  a {
    display: block;
    width: 100px;
    margin: 0 20px;
    padding: 6px 12px;
    border: 1px solid var(--green);
    border-radius: 5px;
    color: var(--green);
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.2;

    &:hover {
      background-color: var(--green-tint);
    }
  }
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ProjectsSection = () => {

  return (
    <StyledContainer id='projects'>
      <h2>Projects</h2>
      <StyledSection>
        <StyledDescription>
          <h3>Shop</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ullam
            sapiente quas odit esse obcaecati velit repudiandae ratione quis aspernatur
            incidunt et quibusdam impedit ea eius mollitia libero, quam voluptate.
          </p>
          <StyledTechnologies>
            <p>React</p>
            <p>SASS</p>
            <p>BEM</p>
            <p>Redux</p>
          </StyledTechnologies>
          <StyledLinks>
            <a href=''>Live</a>
            <a href=''>GitHub</a>
          </StyledLinks>
        </StyledDescription>
        <StyledImage>
          <img src='' alt='image' />
        </StyledImage>
      </StyledSection>
    </StyledContainer>
  );
};

export default ProjectsSection;
