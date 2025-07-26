import React from "react";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "lenis"; // 

gsap.registerPlugin(ScrollTrigger);

const Collab = () => {
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
    <div className="w-full min-h-[60vh] ">
      <div className=" text-white px-24 py-10 ">
        <p ref={textRef} className="text-3xl leading-snug fade-text tracking-wide">
          Welcome to our <span>Urban Minkey</span> is an <span>Indian  </span>
          streetwear brand based out of <span>Mumbai</span>. We love street culture and have
          created a  <span>collection</span> of clothing inspired by our favorite subcultures <br />
          Explore the <span>Royal Enfield X Urban Monkey</span> or <span>MTV X Urban Monkey</span> collection!!!!<br />
          Collaborations <span>Royal Enfield X UM</span>, <span>MTV X UM</span>, <span>PlayBoy X UM</span>, <span>Gully-Gang X UM</span><br /> 
          <span>Urban Monkey</span> collaborated with celebrities such as <span>Bhuvan Bam</span>, <span>Raftaar</span>, <span>Gully-Gang</span> <span>Ranvijay Singh</span>.
          Experience the <span>beauty</span> of modern design
        </p>
      </div>
    </div>
  );
};

export default Collab;
