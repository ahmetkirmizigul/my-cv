import React from "react";
import Typewriter from "typewriter-effect";
import "./contact.css";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
const Contact = () => {
  return (
    <div>
      <h1 style={{ borderBottom: "2px solid", paddingBottom: 15 }}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(3500)
              .typeString("Contact")

              .start();
          }}
        />
      </h1>
      <div className="icon_container">
        <h4
          className="grow"
          style={{
            fontSize: 24,
            cursor: "pointer",
            fontWeight: 100,
            fontFamily: "cursive",
          }}
        >
          <a href="tel:905316157907">
            <PhoneIcon style={{ fontSize: 35 }} htmlColor="black" />
          </a>
        </h4>
        <h4
          className="grow"
          style={{
            fontSize: 24,
            cursor: "pointer",
            fontWeight: 100,
            fontFamily: "cursive",
          }}
        >
          <a href="https://www.instagram.com/ahmetkrmzgll">
            <InstagramIcon style={{ fontSize: 35 }} htmlColor="purple" />
          </a>
        </h4>
        <h4
          className="grow"
          style={{
            fontSize: 24,
            cursor: "pointer",
            fontWeight: 100,
            fontFamily: "cursive",
          }}
        >
          <a href="https://www.github.com/ahmetkirmizigul">
            <GitHubIcon style={{ fontSize: 35 }} htmlColor="yellow" />
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Contact;
