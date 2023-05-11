import React from 'react';
import styled from 'styled-components';

import photo from '../../../assets/images/me.jpg';

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

  h2 {
    display: flex;
    align-items: center;
    margin: 10px 0 40px;
    font-size: 2.6rem;
    color: var(--green);
    font-weight: 600;

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
  justify-content: space-between;
`;

const StyledText = styled.div`
  flex-basis: 60%;

  @media screen and (max-width: 1200px) {
    flex-basis: 100%;
  }

  p {
    padding: 10px 0;
  }

  .strong {
    color: var(--green);
  }
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 30%;
  position: relative;
  margin-top: 20px;

  &:hover:after {
    top: 0;
    right: 32px;
    width: 76%;
    height: 50%;
  }

  &:after {
    border: 2px solid var(--green);
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 15px;
    right: 0;
    width: 80%;
    height: 53%;
    transition: all 0.3s linear;
    border-radius: 5px;

    @media screen and (max-width: 1200px) {
      display: none;
      }
  }

  img {
    width: 75%;
    height: 50%;
    border-radius: 5px;
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0);
    }

    @media screen and (max-width: 1200px) {
    display: none;
    }
  }
}
`;

const AboutSection = () => {
  return (
    <StyledContainer id='about'>
      <h2>About Me</h2>
      <StyledSection>
        <StyledText>
          <p>
            Hello! My name is Olimpia and I enjoy creating things that live on the
            Internet. My interest in web development start in 2021 when I decided to
            sign up in programming course.
          </p>
          <p>
            In November 2021, I graduated from Bootcamp Web Developer Plus. During the
            course, I learnt <strong className='strong'>HTML</strong>,{' '}
            <strong className='strong'>CSS</strong> and{' '}
            <strong className='strong'>JavaScript</strong>, which enable construction of
            websites and interfaces of web applications. I knew one of the most popular
            frameworks - <strong className='strong'>React</strong> (including component
            lifecycle, event handlers and Redux). Together with other students, I took{' '}
            <strong className='strong'>part in a group project</strong> under Project
            Manager the supervisions. I learnt to use the basic tools of a modern
            frontend developer, such as <strong className='strong'>Bootstrap</strong>,{' '}
            <strong className='strong'>Sass</strong>,{' '}
            <strong className='strong'>Git</strong>. I have expanded my backend
            knowledge through the practical use of{' '}
            <strong className='strong'>Node.js</strong> and{' '}
            <strong className='strong'>Express.js</strong> technologies.
          </p>
          <p>
            I also regularly deepen my knowledge on a online courses. I got to know{' '}
            <strong className='strong'>React Hooks</strong> and I am going to learn{' '}
            <strong className='strong'>TypeScript</strong> in the near future. I have a
            great desire and motivation to pick up new technologies.
          </p>
        </StyledText>
        <StyledImage>
          <img src={photo} alt='image' />
        </StyledImage>
      </StyledSection>
    </StyledContainer>
  );
};

export default AboutSection;
