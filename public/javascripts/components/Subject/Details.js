import React, { Component } from 'react';

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

Job.propTypes = {
    name: React.PropTypes.string,
    phone: React.PropTypes.string,
    email: React.PropTypes.string,
    linkedin: React.PropTypes.string,
    github: React.PropTypes.string

}

export default Details;
