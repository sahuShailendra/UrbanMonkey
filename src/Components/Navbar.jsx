import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
 const navbarRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Animate navbar on load
  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  // Hide/show on scroll
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scroll down -> hide
      gsap.to(navbarRef.current, { y: -100, duration: 0.4, ease: "power2.out" });
    } else {
      // Scroll up -> show
      gsap.to(navbarRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div ref={navbarRef}
      className="w-full px-20 py-8 flex justify-between items-center font-Fgrotesk fixed z-999 text-white top-0 left-0"
    >
      <div className="logo bg-white/20 backdrop-blur-md py-3 px-5 rounded-full">
        <h1>URBAN MONKEY</h1>
      </div>
      <div className="links flex gap-10 bg-white/10 backdrop-blur-md py-3 px-10 rounded-full ">
        {["ABOUT", "SALE", "BRAND", "LETEST", "UPCOMING"].map((M, i) => (
          <a key={i} className="text-md font-light cursor-pointer  rounded-full">
            {M}
          </a>
        ))}
      </div>
      <div className="categroy bg-white/20 backdrop-blur-md py-3 px-5 rounded-full">
        <a>OUR PRODUCT</a>
      </div>
    </div>
  );
};

export default Navbar;
