import React, {Fragment, useState} from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Navbar  />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </Fragment>
  );
};

export default Home;
