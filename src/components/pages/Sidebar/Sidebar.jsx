import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: var(--navy);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

const StyledCloseIcon = styled.div`
  color: var(--lightest-slate);
`;

const StyledIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const StyledWrapper = styled.div`
  color: var(--lightest-slate);
`;

const StyledMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const StyledLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style:none;
  transition: 0.2s ease-in-out;
  color: var(--lightest-slate);
  cursor: pointer

  :hover {
    color: var(--green);
    transition: 0.2s ease-in-out;
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledIcon>
        icon
        <StyledCloseIcon />
      </StyledIcon>
      <StyledWrapper>
        <StyledMenu>
          <StyledLinks>About</StyledLinks>
          <StyledLinks>Projects</StyledLinks>
          <StyledLinks>Skills</StyledLinks>
          <StyledLinks>Contact</StyledLinks>
        </StyledMenu>
      </StyledWrapper>
    </StyledSidebar>
  );
};

export default Sidebar;
