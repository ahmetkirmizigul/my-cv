import Header from "./components/Header/Header";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Experiences from "./components/Experiences/Experiences";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Fade>
        <Header />
      </Fade>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: 40,
          paddingLeft: 70,
          gap: 100,
        }}
      >
        <Slide direction="left">
          <AboutMe />
        </Slide>
        <Slide direction="right">
          <Experiences />
        </Slide>

        <Education />

        <Zoom>
          <Contact />
        </Zoom>
      </div>
    </div>
  );
}

export default App;
