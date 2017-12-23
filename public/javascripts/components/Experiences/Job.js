import React, { Component } from 'react';

import Period from '../Period'

class Job extends React.Component {

    render() {
        return (
            <div id={this.props.key}>
                <h2>Job Details:</h2>
                <Period {...this.props.period}/>
                <div>Job title: {this.props.title}</div>
                <div>Job location: {this.props.location}</div>
                <div>Job description: {this.props.description}</div>
            </div>
        );
    }
}

Job.propTypes = {
    period: React.PropTypes.element,
    title: React.PropTypes.string,
    location: React.PropTypes.string,
    description: React.PropTypes.string
}

export default Job;
