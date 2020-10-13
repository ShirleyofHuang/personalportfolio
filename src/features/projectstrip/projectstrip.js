import React from "react";
import { ProjectSquare } from "./projectsquare";
import Fade from "react-reveal/Fade";
import './projectsquare.css';

export const ProjectStrip = () => {
  const projects = [
    { img: "https://i.ibb.co/Bnf5JsG/bossforest.png", description: "Java android rpg game developped in a group of 6.", link: "https://github.com/g0569/g0569" },
    { img: "https://i.ibb.co/pw5BBs4/qrency.png", description: "A proposal for the future of ATMs written in Javascript", link: "https://devpost.com/software/qrency"},
    { img: "https://i.ibb.co/921z9Fb/pythontreemap.png", description: "Python tree map created to have a visual view of a computer's filing system", link: "#" },
    { img: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/71468201_118083049595422_8948924799166447616_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=IvBJElnz6JIAX97hAgW&_nc_ht=scontent.fyyc2-1.fna&oh=e9883a2a3d2bc56aed1a586423697cba&oe=5FA8BAD8", description: "Toronto start up where I interned as a full stack web dev.", link: "https://www.whatstudu.com/" },
    { img: "https://i.ibb.co/mzWTQY3/ec8bb5a88b06c3fb2ed6eac8a386576b.jpg", description: "My personal website made from React", link: "https://shirleyhuang.com/"},
    { img: "https://i.ibb.co/gtkYmBM/simonsays.jpg", description: "A Simon Says game made with Veriolog and an FPGA board.", link: "https://github.com/ShirleyofHuang/FPGA_SimonSays"}
  ];

  return (
    // <div className="row">
    <Fade bottom>
      <div className="projectstrip____horizontal-scroll">
        <div className="projectstrip____scroll-row row-fluid">
            {projects.map((project) => <div className="col-s-4-lg-11 projectstrip____card-cont align-self-center pl-0 pr-0"><ProjectSquare img={project.img} description={project.description} link={project.link}/></div>)}
      </div>
      </div>
      </Fade>
    //  </div>
  );
};
