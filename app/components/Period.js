import React, { Component } from 'react';

class Name extends React.Component {
    // ...
    render() {
        return (
            <div>
                <div>Start: {this.props.start}</div>
                <div>End: {this.props.end}</div>
            </div>
        );
    }
}

export default Name;
