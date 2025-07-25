import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import capCard from '../assets/capss.jpg';
import eyewearCard from '../assets/eyewear.jpg'
import tshirtCard from '../assets/tshirt.jpg'
import jacketCard from '../assets/jacket.jpg'
import accessCard from '../assets/accessories.jpg'
import './Section3.css';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const cardsRef = useRef([]);
  const countContainerRef = useRef(null);
  const sectionRef = useRef(null);

  const cards = [
    {
      img: capCard,
      content: "LATEST CAPS"
    },
    {
      img: eyewearCard,
      content: "EYEWEAR"
    },
    {
      img: tshirtCard,
      content: "NEW T-SHIRT"
    },
    {
      img: jacketCard,
      content: "JACKET COLLECTION"
    },
    {
      img: accessCard,
      content: "ACCESSORIES"
    }
  ]
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const stickyHeight = window.innerHeight * 7;
    const totalCards = cardsRef.current.length;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        positionCards(self.progress);
      },
    });

    function getRadius() {
      return window.innerWidth < 900
        ? window.innerWidth * 7.5
        : window.innerWidth * 2.5;
    }

    function positionCards(progress = 0) {
      const radius = getRadius();
      const totalTravel = 1 + totalCards / 7.5;
      const adjustedProgress = (progress * totalTravel - 1) * 0.75;
      const arcAngle = Math.PI * 0.4;
      const startAngle = Math.PI / 2 - arcAngle / 2;

      cardsRef.current.forEach((card, index) => {
        const normalizedProgress = (totalCards - index - 1) / totalCards;
        const cardProgress = adjustedProgress + normalizedProgress;
        const angle = startAngle + cardProgress * arcAngle;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

        gsap.set(card, {
          x: x,
          y: -y + radius,
          rotation: -rotation,
          transformOrigin: "center center",
        });
      });
    }

    positionCards(0);

    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardIndex = cardsRef.current.indexOf(entry.target);
          const targetY = 150 - cardIndex * 150;
          gsap.to(countContainerRef.current, {
            y: targetY,
            duration: 0.3,
            ease: "power1.out",
          });
        }
      });
    }, options);

    cardsRef.current.forEach((card) => {
      observer.observe(card);
    });

    const handleResize = () => {
      positionCards(0);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container w-full min-h-[100vh]">
      <section className="steps" ref={sectionRef}>
        <div className="step-counter">
          <div className="counter-title">
            <h1>NEW DROP</h1>
          </div>
          <div className="count">
            <div className="count-container" ref={countContainerRef}>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <h1 key={num}>0{num}</h1>
              ))}
            </div>
          </div>
        </div>

        <div className="cards">
          {cards.map((card, i) => (
            <div
              key={i}
              className="card"
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div className="card-img">
                <img src={card.img} />
              </div>
              <div className="card-content">
                <p>
                 {card.content}
                </p>
              </div>
            </div>
          ))}
          <div className="card Empty"></div>
          <div className="card Empty"></div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
