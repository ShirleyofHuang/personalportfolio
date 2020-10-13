import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faToolbox, faPaperPlane, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./workexp.css";

export const WorkExp = () => {
  return (
    <div className="timeline">
      <h2 className="text-center">MY TIMELINE</h2>
      <hr className="w-50"></hr>
      <div className="vertical"></div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(180, 219, 187)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(180, 219, 187)" }}
          date="2020 SUMMER"
          iconStyle={{ background: "rgb(180, 219, 187)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faToolbox} /> }
        >
          <h3 className="vertical-timeline-element-title">Full Stack Web Dev Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            Over the summer I worked at a Toronto start up called Tudu. This is where I was able to apply my 
            React skills I learnt myself into a professional industry setting and got feedback for it. Everyday
            I learnt something new! Not only that, I was introduced fully to full stack development and got to work
            with databases and Node.js.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(108, 117, 125)", color: "#fff" }}
          date="2020 AUG"
          iconStyle={{ background: "rgb(108, 117, 125)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faPaperPlane} /> }
        >
          <h3 className="vertical-timeline-element-title">UI/UX</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Toronto, ON
          </h4>
          <p>
            This is when my view on UI/UX changed. I took a course on designing good UI/UX and have developed an appreciation to well designed creations.
            Got experience using Figma and JustInMind as well. I researched, prototyped, and presented a complete product by the end of this course and felt like
            I really got to understand the basics of designing.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 MARCH"
          contentStyle={{ background: "rgb(108, 117, 125)", color: "#fff" }}
          iconStyle={{ background: "rgb(108, 117, 125)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faPaperPlane} /> }
        >
          <h3 className="vertical-timeline-element-title">NBSE HACKATHON</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Toronto, ON
          </h4>
          <p>
            Created a resume critiquing tool that would help both recruiters and applicants to filter through
            what they are looking for. Developped with Google Cloud API using their sentiment analysis tool. 
            &nbsp; <a className="external-link" href="https://github.com/ShirleyofHuang/Serein"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 FEB"
          contentStyle={{ background: "rgb(108, 117, 125)", color: "#fff" }}
          iconStyle={{ background: "rgb(108, 117, 125)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faPaperPlane} /> }
        >
          <h3 className="vertical-timeline-element-title">STARTERHACKS</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Waterloo, ON
          </h4>
          <p>Won the 'Future of ATMs' presented by RBC. We developed an application that would allow users to use QR codes
              to deposit/send/transfer money with ATMs.
              My group worked on this project together as strangers, but walked away as friends. This is when I fell in love with hackathons.
              &nbsp; <a className="external-link" href="https://github.com/ShirleyofHuang/QRency"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(180, 219, 187)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(180, 219, 187)" }}
          date="2019 SUMMER"
          iconStyle={{ background: "rgb(180, 219, 187)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faToolbox} /> }
        >
          <h3 className="vertical-timeline-element-title">General Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Shanghai, China</h4>
          <p>
          Worked at an engineering company that designed turbines as an intern where I helped
              with translating official documents into English or Chinese. Although I did not do as much
              coding, I learnt how to be professional and learnt to support my team in other ways.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - Present"
          contentStyle={{ background: "rgb(108, 117, 125)", color: "#fff" }}
          iconStyle={{ background: "rgb(108, 117, 125)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faPaperPlane} /> }
        >
          <h3 className="vertical-timeline-element-title">
            University of Toronto
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>Started university! Entered first year as a scared Computer Science student
            but was able to come out of it a bit less scared!
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
