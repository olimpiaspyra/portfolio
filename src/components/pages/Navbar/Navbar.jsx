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

const StyledLinks = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;

    li {
      font-size: 1.3rem;

      a {
        padding: 10px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledLogo>Logo</StyledLogo>
          <StyledLinks>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </StyledLinks>
        </StyledNav>
      </StyledHeader>
    </>
  );
};
export default Nav;
