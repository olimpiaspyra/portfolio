import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    text-align: center;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: 1.6rem;
    font-weight: 400;
  }

  h2 {
    margin: 0 0 20px 4px;
    color: var(--lightest-slate);
    font-size: 8rem;
    font-weight: 600;
    line-height: 1.1;

    @media screen and (max-width: 1200px) {
      font-size: 5rem;
    }


    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 3rem;
    }
  }

  h3 {
    margin: 0 0 5px 4px;
    color: var(--slate);
    line-height: 0.9;
    font-size: 7rem;

    @media screen and (max-width: 1200px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }

  p {
    margin: 20px 0 0 4px;
    max-width: 650px;
    font-size: 3rem;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
}
`;

const HeroSection = () => {
  return (
    <StyledContainer>
      <h1>Hi, my name is</h1>
      <h2>Olimpia Spyra.</h2>
      <h3>I build a modern website.</h3>
      <p>I am a junior front end developer and I am constantly improving my skills.</p>
    </StyledContainer>
  );
};

export default HeroSection;
