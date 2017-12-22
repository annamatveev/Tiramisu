import React, { Component } from 'react';
import '../../../stylesheets/App.css';

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

export default Details;
