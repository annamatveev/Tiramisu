import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends React.Component {
    // ...
    render() {
        return (
            <div id={this.props.key}>
                <h2>Projects Details:</h2>
                <div>Project Name: {this.props.title}</div>
                <div>Project Location: {this.props.location}</div>
                <div>Project description: {this.props.description}</div>
            </div>
        );
    }
}

Project.propTypes = {
    title: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string
}

export default Project;
