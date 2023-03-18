import React, {Fragment, useState} from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import MainContainer from '../../layouts/MainContainer/MainContainer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Navbar />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Contact />
      <MainContainer/>
    </Fragment>
  );
};

export default Home;
