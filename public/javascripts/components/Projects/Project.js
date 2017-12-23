import React, { Component } from 'react';

class Project extends React.Component {
    // ...
    render() {
        return (
            <div id={this.props.key}>
                <h2>Projects List:</h2>
                <div>Project Name: {this.props.title}</div>
                <div>Project Location: {this.props.location}</div>
                <div>Project description: {this.props.description}</div>
            </div>
        );
    }
}

Project.propTypes = {
    title: React.PropTypes.string,
    location: React.PropTypes.string,
    description: React.PropTypes.string
}

export default Project;
