import React, { Component } from 'react';
import '../../stylesheets/App.css';

class Name extends React.Component {
    // ...
    render() {
        return <div>Hello {this.props.name}!</div>;
    }
}

export default Name;
