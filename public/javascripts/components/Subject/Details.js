import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Details extends React.Component {
    // ...
    render() {
        return (
            <div>
                <h1>Details</h1>
                <div>Name: {this.props.name} </div>
                <div>Phone number: {this.props.phone} </div>
                <div>Email: {this.props.email} </div>
                <div>Linked-in: {this.props.linkedin} </div>
                <div>Github: {this.props.github} </div>
            </div>
        );
    }
}

Details.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string

}

export default Details;
