import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: var(--navy);
  display: grid;
  align-items: center;
  font-family: var(--font-mono);
  top: 0;
  left: 0;
  transition: 0.6s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
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
      transition: all 0.2s linear;

      &:nth-child(1) {
        transform: ${({isOpen}) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
      }
      &:nth-child(2) {
        transform: ${({isOpen}) => (isOpen ? 'translateX(100%)' : 'translateX(0)')};
        opacity: ${({isOpen}) => (isOpen ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({isOpen}) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;

const StyledWrapper = styled.div`
  color: var(--lightest-slate);
`;

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  list-style: none;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const StyledLinks = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: var(--lightest-slate);
  cursor: pointer;

  :hover {
    color: var(--green);
    transition: 0.2s ease-in-out;
  }
`;

const Sidebar = ({toggle, isOpen}) => {
  return (
    <StyledSidebar isOpen={isOpen}>
      <StyledMobile isOpen={isOpen} onClick={toggle}>
        <div />
        <div />
        <div />
      </StyledMobile>
      <StyledWrapper>
        <StyledMenu>
          <li>
            <StyledLinks to='about' onClick={toggle}>
              About
            </StyledLinks>
          </li>
          <li>
            <StyledLinks to='projects' onClick={toggle}>
              Projects
            </StyledLinks>
          </li>
          <li>
            <StyledLinks to='skills' onClick={toggle}>
              Skills
            </StyledLinks>
          </li>
          <li>
            <StyledLinks to='contact' onClick={toggle}>Contact</StyledLinks>
          </li>
        </StyledMenu>
      </StyledWrapper>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Sidebar;
