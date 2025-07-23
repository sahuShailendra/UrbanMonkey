import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full px-20 py-8 flex justify-between items-center font-Fgrotesk fixed z-999 text-white'>
      <div className='logo'>
          <h1>URBAN MONKEY</h1>
      </div>
      <div className='links flex gap-10'>
          {["ABOUT", "SALE", "BRAND", "LETEST", "UPCOMING"].map((M, i)=>(
            <a key={i} className='text-md font-light'>{M}</a>
          ))}
      </div>
      <div className='categroy'>
          <a>OUR PRODUCT</a>
      </div>
    </div>
  )
}

export default Navbar