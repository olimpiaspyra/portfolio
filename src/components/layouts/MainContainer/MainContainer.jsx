import React from 'react';
import styled from 'styled-components';

const StyledMainContainer = styled.main`
width: 100%;
max-width: 1600px;
margin: 0 auto;
padding: 200px 150px;

  p {
  text-align: center;
}
`;

const MainContainer = () => {
  return (
    <StyledMainContainer>
      <p>text</p>
    </StyledMainContainer>
  );
};

export default MainContainer;
