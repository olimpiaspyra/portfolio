import React from 'react';
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
    align-items: center;
    top: 0;
    right: 0;
    font-size: 1.3rem;
    cursor: pointer;
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

const StyledLinks = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  font-size: 1.3rem;

  :hover {
    color: var(--green);
  }
`;

const Nav = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogo>Logo</StyledLogo>
        <StyledMobile>icon</StyledMobile>
        <StyledMenu>
          <StyledItems>
            <StyledLinks>About</StyledLinks>
          </StyledItems>
          <StyledItems>
            <StyledLinks>Projects</StyledLinks>
          </StyledItems>
          <StyledItems>
            <StyledLinks>Skills</StyledLinks>
          </StyledItems>
          <StyledItems>
            <StyledLinks>Contact</StyledLinks>
          </StyledItems>
        </StyledMenu>
      </StyledNav>
    </StyledHeader>
  );
};
export default Nav;
