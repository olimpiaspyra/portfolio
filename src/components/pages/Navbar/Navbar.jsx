import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 50px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: var(--navy);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  z-index: 1;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.3rem;
`;

const StyledMobile = styled.div`
  display: none;
  color: var(--lightest-slate);

  @media screen and (max-width: 768px) {
    display: block;
    display: flex;
    position: fixed;
    justify-content: space-around;
    flex-flow: column nowrap;
    align-items: center;
    top: 40px;
    right: 30px;
    font-size: 1.3rem;
    cursor: pointer;
    width: 2rem;
    height: 2rem;

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: var(--lightest-slate);
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s linear

      &:nth-child(1) {
        transform: ${({isOpen}) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')}
      }
      &:nth-child(2) {
        transform: ${({isOpen}) => (isOpen ? 'translateX(100%)' : 'translateX(0)')};
        opacity: ${({isOpen}) => (isOpen ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({isOpen}) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')}
      }
    }
  }
`;

const StyledMenu = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledItems = styled.li`
  display: flex;
  height: 100px;
`;

const StyledLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  font-size: 1.3rem;
  color: var(--lightest-slate);

  :hover {
    color: var(--green);
  }
`;

const Navbar = ({toggle, isOpen}) => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogo>Logo</StyledLogo>
        <StyledMobile isOpen={isOpen} onClick={toggle}>
          <div />
          <div />
          <div />
        </StyledMobile>
        <StyledMenu>
          <StyledItems>
            <StyledLinks to='about'>About</StyledLinks>
          </StyledItems>
          <StyledItems>
            <StyledLinks to='projects'>Projects</StyledLinks>
          </StyledItems>
          <StyledItems>
            <StyledLinks to='skills'>Skills</StyledLinks>
          </StyledItems>
          <StyledItems>
            <StyledLinks to='contact'>Contact</StyledLinks>
          </StyledItems>
        </StyledMenu>
      </StyledNav>
    </StyledHeader>
  );
};

Navbar.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Navbar;
