import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from '../../../styles/global';

const Layout = ({children}) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
