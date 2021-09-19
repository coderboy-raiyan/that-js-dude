import React from "react";
import "./style.css";
const Hero = () => {
  return (
    <div className="main-hero">
      <h1>
        Exclusive React Workshop for <br />
        beginners!
      </h1>
      <p>
        Once in a year opportunity to learn and build your{" "}
        <a href="#react"> first React app</a>
      </p>
      <button>Learn more</button>
    </div>
  );
};

export default Hero;
