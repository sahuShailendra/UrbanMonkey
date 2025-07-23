import React from "react";
import "./Section4.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "lenis"; // 

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    const textElement = textRef.current;

    const split = new SplitType(textElement, { types: "chars" });

    //  Character fade-in on scroll
    gsap.fromTo(
      split.chars,
      { opacity: 0.4 },
      {
        opacity: 1,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: textElement,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          toggleActions: "play play reverse reverse",
        },
      }
    );

    //  Highlight span chars
    gsap.fromTo(
      textElement.querySelectorAll("span .char"),
      { color: "#000000" },
      {
        color: "#ff0000",
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: textElement,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          toggleActions: "play play reverse reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.kill();
      lenis.destroy(); // ✅ clean up Lenis
    };
  }, []);

  return (
    <div className="w-full min-h-[100vh]">
      <div className=" text-white px-24 py-10">
        <p ref={textRef} className="text-5xl leading-snug fade-text">
          Welcome to our interactive experience <br />
          Discover the <span>power</span> of web animations <br />
          Scroll down to see the <span>magic</span> unfold <br />
          Watch as the <span>colors</span> transform before you <br />
          Let the <span>creativity</span> flow through each scroll <br />
          Experience the <span>beauty</span> of modern web design
        </p>
      </div>
      
    </div>
  );
};

export default Section4;
