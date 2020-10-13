import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './footer.css'


export const Footer = () => {
    return (
        <div className="footer">
            <h2>I'd Love To Connect</h2>

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
                  url="mailto: shirley.huang2000@outlook.com"
                  network="email"
                  label="Email"
                ></SocialIcon>
              </span>

        </div>
    )
}