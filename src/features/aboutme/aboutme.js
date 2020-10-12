import React from "react";
import { Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from 'react-social-icons';
import "./aboutme.css";

export const AboutMe = () => {
  const introduction = () => {
    return (
      "Hi! I'm Shirley and I'm currently a third year computer science student at UofT." +
      "I embarked on a journey to study cs after my ninth grade teacher introduced me to this bootcamp" +
      "and since then I've been busy with expanding my knowledge of computers, whether it be through" +
      "classes and lectures, or even real industry experience \n I'm hoping to become a full stack developper!"
    );
  };
  return (
    <div id="about-me" className="mt-3 mb-3">
      <Fade bottom>
        <h2>WHO AM I?</h2>
        <hr className="w-50"></hr>
        <div className="row mr-0 ml-0">
          <div className="col-md-6">
            <div className="about-me____text-section">{introduction()}</div>
            {/* Scroll right to check out some of the stuff I've done <br></br>
            <FontAwesomeIcon icon={faChevronDown} /> */}
          </div>
          <div className="col-md-3">
            <div className="about-me____image-bg" />
          </div>
          <div className="col-md-3">
            <div className="about-me____details">
              <h4>Details</h4>
              <p>
                <b>School</b> <br></br>
                UofT third year cs <br></br>
                <b>Location</b> <br></br>
                Toronto, Calgary
              </p>
              <span>
                <SocialIcon
                  class="icons"
                  url="https://linkedin.com/in/yunqing-shirley-huang"
                  network="linkedin"
                  label="LinkedIn"
                ></SocialIcon>
                &nbsp;
                <SocialIcon
                  class="icons"
                  url="https://github.com/ShirleyofHuang"
                  network="github"
                  label="GitHub"
                ></SocialIcon>
                &nbsp;
                <SocialIcon
                  class="icons"
                  url="#"
                  network="email"
                  label="Email"
                ></SocialIcon>
              </span>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AboutMe;
