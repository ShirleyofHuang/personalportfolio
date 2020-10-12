import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faPenAlt } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
import { Progress, Button } from "reactstrap";
import "./moreabout.css";

export const Skills = () => {

    const courses = ['Software Design', 'Computer Systems', 'Operating Systems', 'Data Structures and Algorithms',
            'Algorithm Design and Analysis', 'Design of Interactive Computational Media', 'Machine Learning',
            'Artificial Intelligence', 'Databases']
  return (
    <div className="more-about">
      <Fade bottom>
        <div className="row skills m-0 mb-4 mt-4 justify-content-center">
          <div className="col-md-3 mr-3">
            <h3>Main Tech Stack</h3>
            <span>
              <FontAwesomeIcon className="turn_green" icon={faTree} />{" "}
              Javascript
              <Progress color="secondary" value={90} />
            </span>
            <br></br>
            <span>
              <FontAwesomeIcon className="turn_green" icon={faTree} />{" "}
              React/Bootstrap <Progress color="secondary" value={90} />
            </span>
            <br></br>
            <span>
              <FontAwesomeIcon className="turn_green" icon={faTree} /> Node.js{" "}
              <Progress color="secondary" value={70} />
            </span>
            <br></br>
            <span>
              <FontAwesomeIcon className="turn_green" icon={faTree} /> mySQL/SQL{" "}
              <Progress color="secondary" value={70} />
            </span>
            <br></br>
            <span>
              <FontAwesomeIcon className="turn_green" icon={faTree} /> Java{" "}
              <Progress color="secondary" value={65} />
            </span>
            <br></br>
            <span>
              <FontAwesomeIcon className="turn_green" icon={faTree} /> Python{" "}
              <Progress color="secondary" value={65} />
            </span>
            <br></br>
          </div>
          <div className="col-md-3 ml-3">
            <h3>Relevant Courses</h3>
            <ul className="ul-courses">
            {courses.map((course) => <li className="mb-3">
              <FontAwesomeIcon className="turn_green" icon={faPenAlt} />
              {course}
            </li>)}
            </ul>
          </div>
        </div>
        <Button color="secondary">
          <a className="button-styling" href="https://drive.google.com/file/d/1mS88BXmTReip-zx6LC1oMCE6ZacNhaYJ/view?usp=sharing">Get Resume</a>
          </Button>
      </Fade>
    </div>
  );
};
