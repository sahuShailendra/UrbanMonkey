import React from 'react'
import Navbar from '../Components/Navbar';
import Landingpage from '../Components/Landingpage';
import Collab from '../Components/Collab';
import Cardro from '../Components/Cardro';
import Collab2 from '../Components/Collab2';
import Vsion from '../Components/Vsion';
import About from '../Components/About';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';

const Home = () => {
  return (
    <div className='w-full bg-[#1e1d1d]'>
      <Navbar/>
      <Landingpage />
      <Collab />
      <Collab2 />
      <Cardro />
      <Vsion />
      <About />
      <Slider />
      <Footer />
    </div>
  )
}

export default Home