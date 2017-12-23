import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    key: PropTypes.number,
    period: PropTypes.object,
    title: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string
}

export default Job;
