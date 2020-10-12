import React from "react";
import './projectsquare.css'

export const ProjectSquare = ( {img, description, link} ) => {
  return (
    <div className="snippet">
            <a href={link}>
      <div class="card">
        <img class="card-img-top h-75" src={img} alt="Card image cap" />
        <div class="card-body pt-0">
          <p class="card-text">
            {description}
          </p>
        </div>
      </div>
      </a>
    </div>
  );
};
