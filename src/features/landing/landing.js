import React from "react";
import { Row, Col } from "react-bootstrap";
import './landing.css'

export const LandingPage = () => {
  return (
    <div>
      <main class="wrapper">
        <section class="section parallax bg1">
          <div class="boxed">
            <h1>WELCOME,</h1>
            <h3 class="introduction">I'm Shirley Huang.</h3>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
