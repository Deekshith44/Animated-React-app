import React from "react";
import { NavLink } from "react-router-dom";
import img from "../Images/Sony.jpg";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae, natus? Libero at amet minima magni delectus quo ad
              nesciunt, beatae mollitia ut officiis cupiditate tempora, ea
              dolor, eum maxime explicabo.
            </p>
            <NavLink to="/contact" className="btn btn-primary">
              Let's Chat
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
