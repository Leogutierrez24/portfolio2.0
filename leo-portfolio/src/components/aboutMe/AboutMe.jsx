import React from "react";
import './aboutMe.scss';
import profilePic from "../assets/images/padding-img-2.avif";
import reactLogo from "../assets/images/tech-logos/react-logo.png";
import htmlLogo from "../assets/images/tech-logos/html-logo.png";
import jsLogo from "../assets/images/tech-logos/js-logo.png";
import nodeLogo from "../assets/images/tech-logos/nodejs-logo.png";
import fbLogo from "../assets/images/tech-logos/firebase-logo.png";
import cssLogo from "../assets/images/tech-logos/css-logo.svg";

const AboutMe = () => {
    return(
        <div className="aboutMe">
            <div className="aboutMe-container">
                <div className="about-leftSide">
                    <h3 className="aboutMe-title">About <span>me</span></h3>
                    <p className="aboutMe-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magni mollitia inventore ullam explicabo molestias, reiciendis itaque minima, corrupti modi eaque similique beatae dolores blanditiis animi quibusdam accusamus adipisci laborum!</p>
                    <p className="aboutMe-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore corrupti nam. Soluta ratione illum id dignissimos eaque deleniti sed expedita, explicabo obcaecati! Quis dicta sint beatae. Veniam, neque autem?</p>
                </div>
                <div className="about-rightSide">
                    <figure>
                        <img src={profilePic} alt="profile-img" className="profile-img" />
                    </figure>
                </div>
            </div>
            <div className="skill-container">
                <h3 className="skills-title">My <span>skills</span></h3>
                <div className="techs-container">
                    <div className="techs-box-a">
                        <div>
                            <img className="techs-logo" src={cssLogo} alt="" />
                        </div>
                        <div>
                            <img className="techs-logo" src={htmlLogo} alt="" />
                        </div>
                        <div>
                            <img className="techs-logo" src={jsLogo} alt="" />
                        </div>
                    </div>
                    <div className="techs-box-b">
                        <div>
                            <img className="techs-logo" src={reactLogo} alt="" />
                        </div>
                        <div>
                            <img className="techs-logo" src={fbLogo} alt="" />
                        </div>
                        <div>
                            <img className="techs-logo" src={nodeLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;