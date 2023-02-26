import {createGlobalStyle} from 'styled-components';

import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
${fonts};
${variables};

:root {
  width: 100%;
  box-sizing: border-box;
  font-family: var(--font-sans);
  font-size: 10px;
}

*,
::before,
::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

body {
  width: 100%;
  min-height: 100%;
  background-color: var(--navy);
  font-size: 2rem;
  color: var(--slate);
  line-height: 1.3;
}
`;

export default GlobalStyle;
