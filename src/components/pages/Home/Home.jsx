import React, {Fragment, useState} from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import MainContainer from '../../layouts/MainContainer/MainContainer';
import ContactSection from '../ContactSection/ContactSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Navbar />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ContactSection />
      <MainContainer />
    </Fragment>
  );
};

export default Home;
