import React, { Component } from 'react';
import '../../stylesheets/App.css';

import ProjectList from "./Projects/ProjectList";
import JobList from "./Experiences/JobList";
import Details from './Subject/Details';

class CV extends React.Component {

    render() {
        return (
            <div>
                <Details
                    name={this.props.name}
                    description={this.props.description}
                    {...this.props.contact}
                />
                <JobList items={this.props.experiences}/>
                <ProjectList items={this.props.projects}/>
            </div>
        );
    }
}

export default CV;
