import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Layout from './components/layouts/Layout/Layout';
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
