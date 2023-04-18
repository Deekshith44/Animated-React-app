import React from "react";
import { NavLink } from "react-router-dom";
import img from "../Images/home.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your Business"
        imgsrc={img}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
