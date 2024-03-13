import { React, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import "./style.scss";

export default function Hero() {
  const contentRef = useRef(null);

  useGSAP(() => {
    const ourText = new SplitType(".anim-text-first", {
      types: "chars",
    });
    const chars = ourText.chars;

    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
      }
    );

    gsap.set(".anim-text-second", { scale: 0 });
    gsap.to(".anim-text-second", { scale: 1, duration: 1, delay: 1.5 });

    gsap.set(contentRef.current, { scale: 0 });

    gsap.to(contentRef.current, {
      scale: 1,
      duration: 1,
      delay: 2,
    });
  });

  return (
    <section className="headline">
      <div className="headline__content">
        <div className="headline__content--text anim-text-first">
          It all started here...
        </div>
        <div class="anim-text-second">
          When I decided to try my hand at coding, it felt like opening a door
          to a whole new universe. It was a journey of discovery, a journey that
          ignited my passion for crafting elegant solutions to complex problems.
          After almost 2 years of work, I'm still very passionate about what I'm
          doing and always trying to learn new things.
        </div>
      </div>
      <div></div>
      <div className="headline__content headline__content--iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4029.051283347133!2d26.11010784617025!3d44.433788178955005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff5164b6054f%3A0x2503af679904f313!2sAtelierele%20ILBAH!5e0!3m2!1sro!2sro!4v1710267928334!5m2!1sro!2sro"
          width="100%"
          height="300"
          style={{ border: "none" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
          ref={contentRef} // Attach the ref here
        ></iframe>
      </div>
    </section>
  );
}
