import React from "react";
import { Tilt } from "react-tilt";
import "./style.scss";

export default function TiltCard({ data }) {
  return (
    <div class="tilt">
      {data.map((card, index) => (
        <Tilt
          key={index}
          className="tilt__container"
          options={{ max: 45, scale: 1 }}
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
