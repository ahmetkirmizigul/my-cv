import React from "react";
import "./aboutMe.css";
import Typewriter from 'typewriter-effect';
const AboutMe = () => {
  return (
    <div className="aboutme_container">
      <h1 style={{ borderBottom: "2px solid", paddingBottom: 15 }}>  <Typewriter
  onInit={(typewriter) => {
    typewriter.pauseFor(1500).typeString('About Me')
     
      .start();
  }}
/></h1>
      <div
        style={{
          paddingRight: 350,
          display: "flex",
          gap: 150,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <img
          src="https://icon-library.com/images/about-me-icon/about-me-icon-28.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutMe;
