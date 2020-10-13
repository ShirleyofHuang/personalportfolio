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
     <>My name is Shirley, an aspiring software developer hoping to gain more experience in the industry! <br />I like problem solving and creating which is why I chose to go into computer science for university. After completing two full years of academia, I am ready to take on bigger projects to practice the skills I gained either through classes or internships. <br></br>Currently, I would consider myself more of a <b>web developer</b> with some experience in <b>UI/UX</b>, but I also have interests in <b>Computer Systems, ML, and AI </b>. Check out my tech stack and courses below!</>
    );
  };
  return (
    <div id="about-me" className="mt-3 mb-3">
      <Fade bottom>
        <h2>WHO AM I?</h2>
        <hr className="w-50"></hr>
        <div className="row mr-0 ml-0">
          <div className="col-md-6 col-sm-12">
            <div className="about-me____text-section">{introduction()}</div>
            {/* Scroll right to check out some of the stuff I've done <br></br>
            <FontAwesomeIcon icon={faChevronDown} /> */}
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="about-me____image-bg" />
          </div>
          <div className="col-md-3 col-sm-6">
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
                  url="mailto:shirley.huang2000@outlook.com"
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
