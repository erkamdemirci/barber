import React from 'react';

import Navbar from './navbar';
import Footer from './footer';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
