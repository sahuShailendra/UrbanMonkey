import React from "react";
import founder from '../assets/founder.jpg'

const Section7 = () => {
  return (
    <div className="w-full  ">
      <div className="w-full px-10 py-6">
        <div className="w-full ">
          <h1 className=" text-center font-Fgrotesk text-[4vw] text-[#8f8e8e]">
            About
          </h1>
        </div>
        <div className="w-full flex ">
          <div className="w-[60%] ">
            <p className="text-2xl font-bebas tracking-wider px-4 font-light text-gray-400">
              What started in 2013, with a simple goal of increasing awareness
              about the skate culture in Mumbai, has now evolved into a deep
              rooted passion towards accelerating the growth of our community.
              <br />
              Just like the community we represent, we are unorthodox in our
              methods, eccentric in our style, and determined in our approach.
              We strive to keep our work unique and smart, with room for a
              little magic.
              <br />
              We aspire to create designs that are a blend of passion and love
              for our culture. We aim to help our community express and explore
              their inner street artist. We strive to encourage and uplift
              everyday artists by giving them the tools to overcome their
              challenges, and build a community of like-minded people. By
              helping one another, we believe our community has the power to
              change the world.
            </p>
          </div>
          <div className="founder w-[40%] flex flex-col gap-5 justify-center items-center ">
            <img src={founder} style={{width: '250px', height:"250px"}} className="rounded-full object-cover"/>
            <h1 className="text-2xl font-Fgrotesk text-gray-400"> FOUNDER - <span className="text-3xl text-white"> Yash Gangwal</span></h1>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Section7;
