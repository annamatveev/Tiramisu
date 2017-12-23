import React, { Component } from 'react';
import '../../../stylesheets/App.css';

class Education extends React.Component {
    // ...
    render() {
        return (
            <div id={this.props.key}>
                <h2>Education List:</h2>
                <div>Graduation Date: {this.props.date}</div>
                <div>Specialty: {this.props.specialty}</div>
                <div>Institute: {this.props.institute}</div>
            </div>
        );
    }
}

export default Education;
