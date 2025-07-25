import React from 'react'
import Navbar from '../Components/Navbar';
import Section1 from '../Components/Section1';
import Section4 from '../Components/Section4';
import Section3 from '../Components/Section3';
import Section5 from '../Components/Section5';
import Section6 from '../Components/Section6';
import Section7 from '../Components/Section7';

const Home = () => {
  return (
    <div className='w-full bg-[#1e1d1d]'>
      <Navbar/>
      <Section1 />
      <Section4 />
      <Section5 />
      <Section3 />
      <Section6 />
      <Section7 />
    </div>
  )
}

export default Home