import React, {Fragment} from 'react';
import styled from 'styled-components';

import IconGitHub from '../../../assets/icons/github';
import IconLinkedin from '../../../assets/icons/linkedin';

const StyledLeftSide = styled.aside`
  position: fixed;
  bottom: 0;
  width: 50px;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
`;

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 80px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    &:last-of-type {
      margin-bottom: 20px;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: var(--lightest-slate);
    text-decoration: none;

    &:hover {
      transform: translateY(-3px);
      color: var(--green);
    }
  }
  .mail {
    writing-mode: vertical-rl;
    letter-spacing: 2px;
    font-size: 1.2rem;
  }
`;

const StyledRightSide = styled.aside`
  position: fixed;
  bottom: 0;
  width: 50px;
  color: var(--lightest-slate);
  right: 0;
  font-family: var(--font-mono);
`;

const ContactSection = () => {
  return (
    <Fragment>
      <StyledLeftSide>
        <StyledSocialList>
          <li>
            <a href='https://github.com/olimpiaspyra' target='_blank' rel='noreferrer'>
              <IconGitHub />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/olimpia-spyra/'
              target='_blank'
              rel='noreferrer'
            >
              <IconLinkedin />
            </a>
          </li>
        </StyledSocialList>
      </StyledLeftSide>
      <StyledRightSide>
        <StyledSocialList>
          <li>
            <a
              className='mail'
              href='mailto: olimpia.spyra@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              olimpia.spyra@gmail.com
            </a>
          </li>
        </StyledSocialList>
      </StyledRightSide>
    </Fragment>
  );
};

export default ContactSection;
