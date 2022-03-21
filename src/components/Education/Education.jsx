import React from "react";
import Typewriter from "typewriter-effect";
const Education = () => {
  return (
    <div>
      <h1 style={{ borderBottom: "2px solid", paddingBottom: 15 }}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(3500)
              .typeString("Education")

              .start();
          }}
        />
      </h1>
      <div>
        <p>
          Where can I get some? There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered alteration in some
          form, by injected humour, or randomised words which don't look even
          slightly believable. If you are going to use a passage of Lorem Ipsum,
          you need to be sure there isn't anything embarrassing hidden in the
          middle of text. All the Lorem Ipsum generators on the Internet tend to
          repeat predefined
        </p>
      </div>
    </div>
  );
};

export default Education;
