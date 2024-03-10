import React, { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "./style.scss";
import arrowDownIcon from "./assets/icon-arrow-down.svg"; // Adjust the path to your arrow down icon

export default function Hero() {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const words = [
      "Hi!",
      "I'm a junior developer.",
      "This is my website!",
      "Here, you will see a bunch of components that I made.",
    ];
    const cursor = gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });

    const masterTL = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(".text", { duration: 1.5, text: word, x: 0 });
      masterTL.add(tl);
    });

    const tl = gsap.timeline();
    tl.to(".hero--arrow-down", {
      y: 10,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
    });

    return () => {
      // Clean up on unmount
      cursor.kill();
      masterTL.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero--container-typing">
        <span className="text hero--neon-text"></span>
        <span className="cursor">|</span>
      </div>
      <div className="hero--arrow-down">
        <img className="w-30 h-20" src={arrowDownIcon} alt="" />
      </div>
    </section>
  );
}
