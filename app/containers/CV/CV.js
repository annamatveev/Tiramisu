import React, { Component } from 'react';

import JobList from "../../components/Experiences/JobList";
import NavBar from "../../components/NavBar/NavBar";
import Details from '../../components/About/About';
import EducationList from "../../components/Education/EducationList";
import ProjectList from "../../components/Portfolio/ProjectList";
import Section from '../../components/Section/Section';

/* Styles */
import "./CV.css"

class CV extends Component {
    render() {
        const DetailsSection = Section(Details);
        const ProjectSection = Section(ProjectList);
        const EducationSection = Section(EducationList);

        return (
            <div className="window-wrapper">
                <NavBar />
                <DetailsSection
                    id="about"
                    name={this.props.name}
                    description={this.props.description}
                    {...this.props.contact}
                />

                <div id="job-list-wrapper">
                    <JobList
                        items={this.props.experiences}
                    />
                </div>

                <ProjectSection
                    id="projects"
                    items={this.props.projects}
                />

                <EducationSection
                    id="education"
                    items={this.props.education}
                />
            </div>
        );
    }
}

export default CV;
