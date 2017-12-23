import React, { Component } from 'react';

class Education extends React.Component {
    // ...
    render() {
        return (
            <div id={this.props.key}>
                <h2>Education Details:</h2>
                <div>Graduation Date: {this.props.date}</div>
                <div>Specialty: {this.props.specialty}</div>
                <div>Institute: {this.props.institute}</div>
            </div>
        );
    }
}

Education.propTypes = {
    date: React.PropTypes.string,
    specialty: React.PropTypes.string,
    institute: React.PropTypes.string
}

export default Education;
