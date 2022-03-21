import React from "react";
import "./experiences.css";
import Typewriter from 'typewriter-effect';
const Experiences = () => {
  return (
    <div>
       <h1 style={{ borderBottom: "2px solid", paddingBottom: 15 }}>
       <Typewriter
  onInit={(typewriter) => {
    typewriter.pauseFor(3500).typeString('Experiences')
     
      .start();
  }}
/>
      </h1> 
     

      <div>
        <p>
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English.
        </p>
      </div>
    </div>
  );
};

export default Experiences;
