import React from "react";
import { NavLink } from "react-router-dom";
import img from "../Images/Sony.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={img}
        visit="/contact"
        btname="conatct now"
      />
    </>
  );
};

export default About;
