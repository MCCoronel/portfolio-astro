import { h } from "preact";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Freelancer",
          "PERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypewriterComponent;


