import React from "react";
import Tilt from "react-parallax-tilt";
import "./style.scss";

export default function TiltCard({ data }) {
  return (
    <div className="tilt">
      {data.map((card, index) => (
        <Tilt
          key={index}
          glareEnable={true}
          perspective={1000}
          tiltMaxAngleX={40}
          tiltMaxAngley={40}
          glareMaxOpacity={0.3}
          glareColor={"white"}
          className="tilt__container"
        >
          <div className="tilt__card">
            <div
              className="tilt__card--bg"
              style={{ backgroundImage: `url(${card.bg})` }}
            ></div>
            <div className="tilt__card--info">
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  );
}
