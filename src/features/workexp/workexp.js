import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faToolbox, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./workexp.css";

export const WorkExp = () => {
  return (
    <div className="timeline">
      <h2 className="text-center">MY TIMELINE</h2>
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
            Worked at Tudu as a full stack web developer using React/Bootstrap and Node.js.
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
            Took a course on designing good UI/UX and have developed an appreciation to well designed creations.
            Got experience using Figma and JustInMind.
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
              with translating official documents into English or Chinese.           </p>
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
          <p>Started university!</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
