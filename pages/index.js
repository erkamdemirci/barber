import Head from 'next/head';

import Header from '../components/sections/header';
import About from '../components/sections/about';
import Services from '../components/sections/services';
import Gallery from '../components/sections/gallery';
import Team from '../components/sections/team';
import Discount from '../components/sections/discount';
import Contact from '../components/sections/contact';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Gallery />
      <Team />
      <Discount />
      <Contact />
    </>
  );
}
