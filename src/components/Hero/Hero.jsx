import "aos/dist/aos.css";
import React, { useEffect, useRef } from "react";
import TypeAnimation from "react-type-animation";
import HeroSvg from "../../assets/images/hero.svg";
import GFG from "../../assets/images/socials/gfg.png";
import LeetCode from "../../assets/images/socials/leet.png";
import GitHub from "../../assets/images/socials/git.png";
import "./Hero.scss";

const Hero = () => {
  const heroRef = useRef(null);
  const svgObjectRef = useRef(null);

  useEffect(() => {
    const objectEl = svgObjectRef.current;
    if (!objectEl) return;

    const applyAnimationClass = () => {
      const svgDoc = objectEl.contentDocument;
      const svgRoot = svgDoc?.querySelector("svg#freepik_stories-working-from-anywhere");
      if (svgRoot) {
        svgRoot.classList.add("animated");
      }
    };

    const handleLoad = () => applyAnimationClass();
    objectEl.addEventListener("load", handleLoad);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const svgDoc = objectEl.contentDocument;
        const svgRoot = svgDoc?.querySelector("svg#freepik_stories-working-from-anywhere");
        if (!svgRoot) return;
        if (entry.isIntersecting) {
          svgRoot.classList.add("animated");
        } else {
          svgRoot.classList.remove("animated");
        }
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      objectEl.removeEventListener("load", handleLoad);
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <main
      className="app__hero"
      id="home"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__hero-container">
        <div className="app__hero-container_text">
          <TypeAnimation
            cursor={false}
            sequence={["Hi, my name is"]}
            wrapper="p"
            repeat={1}
            className="app__hero-title"
          />
          <TypeAnimation
            cursor={false}
            sequence={[2000, "Manoj Bachhav"]}
            wrapper="h1"
            repeat={1}
            className="app__hero-container_text-name"
          />
          <TypeAnimation
            cursor={false}
            sequence={[4000, "I build scalable and impactful applications."]}
            wrapper="h2"
            repeat={1}
            className="app__hero-container_text-title"
          />
          <TypeAnimation
            cursor={false}
            sequence={[
              6500,
              "I am a Full Stack Developer",
              4000,
              "Let's build something impactful together.",
            ]}
            wrapper="h3"
            repeat={Infinity}
            className="app__hero-container_text-subtitle"
          />

          {/* Social Links */}
          <div className="app__hero-container_text-socials">
            <a
              href="https://www.geeksforgeeks.org/profile/manojbaca5ab?tab=activity"
              target="_blank"
              rel="noreferrer"
              title="GeeksforGeeks"
            >
              <img src={GFG} alt="GeeksforGeeks" />
            </a>
            <a
              href="https://leetcode.com/u/manoz_bachhav/"
              target="_blank"
              rel="noreferrer"
              title="LeetCode"
            >
              <img src={LeetCode} alt="LeetCode" />
            </a>
            <a
              href="https://github.com/ManozBachhav"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <img src={GitHub} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="app__hero-container_image" ref={heroRef}>
          <object
            ref={svgObjectRef}
            type="image/svg+xml"
            data={HeroSvg}
            aria-label="Developer Illustration"
            className="app__hero-svg-object"
          >
            <img src={HeroSvg} alt="Developer Illustration" />
          </object>
        </div>
      </div>
    </main>
  );
};

export default Hero;