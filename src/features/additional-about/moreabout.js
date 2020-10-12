import React from 'react';
import {Button} from 'reactstrap';
import './moreabout.css';

export const MoreAbout = () => {

    return (
        <div className="more-about mt-4 pt-4">
            <h2>Just a little more about me </h2>
            <hr className="w-50"></hr>
            <div className="row m-0">
                <div className="col-md-4">
                    <h3>Skills</h3>
                    I have experience with Java, Python, C, Javascript among many other languages. I have worked with designing UI/UX! <br></br>
                    <Button className="learnmore" color="secondary" id="toggler1" style={{ marginBottom: '1rem' }}>
                        Learn More
                    </Button>
                </div>
                <div className="col-md-4">
                    <h3>Experience</h3>
                    I have not only been applying myself academically, but also have been making an effort outside of academia as well by participating in clubs or working at internships, or travelling around the world. <br></br>
                    <Button className="learnmore" color="secondary" id="toggler1" style={{ marginBottom: '1rem' }}>
                        Learn More
                    </Button>
                </div>
                <div className="col-md-4">
                    <h3>Courses</h3>
                    I am currently attending the University of Toronto as a third year student, and have completed many courses from theory to practicals. I have also been able to maintain a GPA of 3.75. <br></br>
                    <Button className="learnmore" color="secondary" id="toggler1" style={{ marginBottom: '1rem' }}>
                        Learn More
                    </Button>
                </div>
            </div>

            <a href="https://drive.google.com/file/d/1mS88BXmTReip-zx6LC1oMCE6ZacNhaYJ/view?usp=sharing" class = "btn btn-dark" role ="button">Get Resume</a>

        </div>
    )
}