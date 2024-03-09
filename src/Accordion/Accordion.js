import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./style.scss";

export default function Accordion({ data }) {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}
function AccordionItem({ num, title, currentOpen, onOpen, children }) {
  const isOpen = num === currentOpen;

  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        duration: 0.3,
        "margin-top": "10px",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.3,
        "margin-top": "0",
      });
    }
  }, [isOpen]);

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`accordion--item ${isOpen ? "open" : ""}`}
      onClick={handleToggle}
    >
      <div className="accordion--elements">
        <div className="accordion--elements__child">
          <p className="accordion--number">
            {num < 9 ? `0${num + 1}` : num + 1}
          </p>
          <p className="accordion--title">{title}</p>
        </div>
        <span className="accordion--icon">{isOpen ? "-" : "+"}</span>
      </div>
      <div className="accordion--content-box" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
