import React, { Component } from 'react';
import JobList from "../Experiences/JobList";
import NavBar from "../NavBar/NavBar";
import Details from '../About/About';
import EducationList from "../Education/EducationList";
import ProjectList from "../Portfolio/ProjectList";
import ContactPage from "../Contact/ContactPage";
import Section from '../Section/Section';

/* Styles */
import "./CV.css";

class CV extends Component {

  render() {
      const DetailsSection = Section(Details);
      const ProjectSection = Section(ProjectList);
      const EducationSection = Section(EducationList);
      const ContactSection = Section(ContactPage);
      
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
              
              <ContactSection
                id="contact-form"
              />
            
          </div>
      );
  }
}

export default CV;
