import React from 'react';
import { Link } from 'react-router-dom';
import './projects.scss';

const Projects = () => {
    return(
        <div className="projects">
            <div className="projects-container">
                <h3 className="projects-title">My <span>Projects</span></h3>
                <div className="projects-list">
                    <div className="project">
                        <Link to="/" className="projects-links">See project</Link>
                    </div>
                    <div className="project">
                        <Link to="/" className="projects-links">See project</Link>
                    </div>
                    <div className="project">
                        <Link to="/" className="projects-links">See project</Link>
                    </div>
                </div>
            </div>
        </div>
    );
;}

export default Projects;