import React from 'react';
import styled from 'styled-components';

import IconGitHub from '../../../assets/icons/github';
import IconLinkedin from '../../../assets/icons/linkedin';

const StyledLeftSide = styled.aside`
  position: fixed;
  bottom: 0;
  width: 50px;
  color: var(--lightest-slate);
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
`;

const Contact = () => {
  return (
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
  );
};

export default Contact;
