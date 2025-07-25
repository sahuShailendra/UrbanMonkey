import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
    const sectionRef = useRef(null);

    useEffect(() => {

    gsap.to(".stiky", {
        scrollTrigger: {
            trigger: ".stiky",
            start: "top top",
            end: "+=500",
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    })

    const h1Elements = gsap.utils.toArray(".slide h1"); // Get all h1 inside .slide

    h1Elements.forEach((el, index) => {
      gsap.to(el, {
        y: 220,
        scrollTrigger: {
          trigger: el,         // Trigger each h1 individually
          start: "top 20%",
          scrub: 2,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div  className="w-full min-h-[100vh] p-2">
      <div ref={sectionRef} className="w-full h-full flex flex-col">
        <div className="stiky overflow-hidden">
          <h1 className=" text-center font-Fgrotesk text-[4vw] text-[#8f8e8e]">OUR VISION</h1>
        </div>
        <div  className="slide overflow-hidden w-full ">
          <h1 className="slide2 font-bebas text-[8vw] text-center leading-40">
            To build the biggest
          </h1>
        </div>
        <div  className="slide overflow-hidden w-full">
          <h1 className="slide3 font-playwrite text-[8vw] text-center font-bold leading-40">
            self sustaining community
          </h1>
        </div>
        <div className="slide overflow-hidden w-full">
          <h1 className="slide4 font-bebas text-[8vw] text-center leading-40">
            by empowering vari0.us
          </h1>
        </div>
        <div  className="slide overflow-hidden w-full">
          <h1 className="slide5 font-bebas text-[8vw] text-center text leading-40">
            artists & athletes
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section6;
