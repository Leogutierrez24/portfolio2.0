import React from 'react';
import { Link } from 'react-router-dom';
import './projects.scss';

const Projects = () => {
    return(
        <div className="projects">
            <div className="projects-container">
                <h3 className="projects-title">My <span>Projects</span></h3>
                <div className="projects-list">
                    <div className="project01">
                        <a href="https://github.com/Leogutierrez24/pasokon-ecommerce" className="projects-links" target="_blank" rel="noreferrer">See project</a>
                    </div>
                    <div className="project02">
                        <a href="https://github.com/Leogutierrez24/calculator" className="projects-links" target="_blank" rel="noreferrer">See project</a>
                    </div>
                    <div className="project03">
                        <Link to="/" className="projects-links">See project</Link>
                    </div>
                </div>
            </div>
        </div>
    );
;}

export default Projects;