import React from "react";
import flotman from "../assets/cap1.png";
import { FaRegRegistered } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Section1 = () => {
  const urbanRef = useRef(null);
  const monkeyRef = useRef(null);
  const paraRef = useRef(null);
  const [urbanText, setUrbanText] = useState("URBAN");
  const [monkeyText, setMonkeyText] = useState("MONKEY");

  useEffect(() => {
    const animateText = (ref, newText) => {
    const splitOut = new SplitText(ref.current, { type: "chars" });
    
    gsap.fromTo(
      paraRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  

    gsap.to(splitOut.chars, {
      y: -100,
      opacity: 0,
      duration: 0.075,
      ease: "power4.out",
      stagger: {
        each: 0.075,
        from: "center",
      },
      onComplete: () => {
        ref.current.textContent = newText;
        const splitIn = new SplitText(ref.current, { type: "chars" });
        gsap.set(splitIn.chars, { y: 100, opacity: 0 });
        gsap.to(splitIn.chars, {
          y: 0,
          opacity: 1,
          duration: 0.075,
          ease: "power4.out",
          stagger: {
            each: 0.075,
            from: "center",
          },
        });
      },
    });
  };

   const runAnimation = () => {
    let isHindi = true;

    const swap = () => {
      const newUrban = isHindi ? "अर्बन" : "URBAN";
      const newMonkey = isHindi ? "मंकी" : "MONKEY";

      animateText(urbanRef, newUrban);
      animateText(monkeyRef, newMonkey);

      isHindi = !isHindi;
    };

    // Initial animation
    swap();

    const interval = setInterval(swap, 3000);
    return () => clearInterval(interval);
  };

  if (document.fonts.status === "loaded") {
    runAnimation();
  } else {
    document.fonts.ready.then(runAnimation);
  }

}, []);

  return (
    <div className=" w-screen h-screen py-2 px-6 bg-[#1e1d1d] text-white ">
      {/* tabs */}
      <div className="textstructure  mt-50 px-20 ">
        <div className="mark">
          <h1
            ref={urbanRef}
            className="text-[10rem] text-[#ECDFCC] font-Fgrotesk font-bold tracking-tighter leading-[5vw] "
          >
            
          </h1>
        </div>
        <div className="mark flex relative">
          <h1
            ref={monkeyRef}
            className="text-[10rem] text-[#ECDFCC] font-Fgrotesk font-bold tracking-tighter leading-[6vw] mt-8 p-2"
          >
            
          </h1>
          <FaRegRegistered className="text-red-800 text-7xl absolute left-[42%] top-[-35%] " />
        </div>
        <div  className="mark3 relative w-[50%] ">
          <h1 ref={paraRef} className="text-2xl text-[#bdb5a9] font-Fgrotesk tracking-wide leading-[2vw] p-4">
            WE DIDN'T JUST REVIVE OUR ARCHIVES-WE REBUILT THEM. LEGACY PIECES,
            REIMAGINED WITH TODAY'S FITS, FABRICS, AND FINESSE.
          </h1>
        </div>
        <div className="mark ml-4">
          <button className="py-2.5 px-15 me-2 mb-2 text-sm font-medium text-[#ECDFCC] bg-black rounded-full shadow-2xl hover:bg-gray-700">SHOP NOW</button>
        </div>
      </div>

      <div className="w-[35%]  bg-gradient-to-b from-[#8f8e8e] to-[#181C14] absolute left-[55%] top-0 bottom-[10%] shadow-2xl rounded-b-2xl">
        <img
          className="w-[100%] h-[100%] absolute rounded-bl-2xl "
          src={flotman}
          alt="flotman"
        />

        <div className="poster absolute bottom-20 ml-5">
          <h1 ref={paraRef} className="text-[4vw] font-bebas text-[#ECDFCC] leading-[3vw]">
            STREET
          </h1>
          <h1 ref={paraRef} className="text-[4vw] font-bebas text-[#ECDFCC] leading-[3vw]">
            STYLE
          </h1>
          <h1 ref={paraRef} className="text-[4vw] font-bebas text-[#ECDFCC] leading-[3vw]">
            EVOLUTION
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section1;
