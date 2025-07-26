import React, { useRef } from "react";
import "./Collab2.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Collab2 = () => {
  const ref = useRef();
  useGSAP(
    () => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".starsvg",
          start: "50% 50%",
          end: "250% 50%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(
        ".svg",
        {
          maskSize: "200%",
        },
        "a"
      );
      tl.to(
        ".img",
        {
          backgroundSize: "100%",
        },
        "a"
      );

      tl.to(
        ".svg2",
        {
          maskSize: "200%",
        },
        "b"
      );
      tl.to(
        ".img2",
        {
          backgroundSize: "100%",
        },
        "b"
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="w-full min-h-[100vh] ">
      <div className="w-full h-full starsvg">
        <div className="svg">
          <div className="img">
            <div className="svg2">
              <div className="img2">
                <div className="svg3">
                  <div className="img3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collab2;
