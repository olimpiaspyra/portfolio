import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './components/pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Home />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
