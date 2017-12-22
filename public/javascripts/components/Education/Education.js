import React, { Component } from 'react';
import '../../../stylesheets/App.css';

class Education extends React.Component {
    // ...
    render() {
        return (
            <div id={this.props.key}>
                <h2>Projects List:</h2>
                <div>Project Name: {this.props.name}</div>
                <div>Project Location: {this.props.location}</div>
                <div>Project description: {this.props.description}</div>
            </div>
        );
    }
}

export default Education;
