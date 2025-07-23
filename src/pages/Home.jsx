import React from 'react'
import Navbar from '../Components/Navbar';
import Section1 from '../Components/Section1';
import Section4 from '../Components/Section4';
import Section3 from '../Components/section3';

const Home = () => {
  return (
    <div className='w-full bg-[#1e1d1d]'>
      <Navbar/>
      <Section1 />
      <Section3 />
      <Section4 />
    </div>
  )
}

export default Home