import React from "react";
import './aboutMe.scss';
import profilePic from "../assets/images/padding-img-2.avif";

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
        </div>
    );
};

export default AboutMe;