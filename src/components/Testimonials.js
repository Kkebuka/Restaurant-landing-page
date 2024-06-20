import React from "react";
import { AiFillStar } from "react-icons/ai";
import ProfilePic from "../Assets/john-doe-image.png";

function Testimonials() {
  return (
    <div className="work-section-wrapper ">
      <div className="work-section-top">
        <p className="primary-suheading">Testimonials</p>
        <h1 className="primary-heading">What Are They Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          similique. Exercitationem.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum sectetur. similique. Ea.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Modi, similique. Exercitationem, ipsa.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Okeke Ebuka</h2>
      </div>
    </div>
  );
}

export default Testimonials;
