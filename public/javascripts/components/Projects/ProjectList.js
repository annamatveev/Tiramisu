import React, { Component } from 'react';
import '../../../stylesheets/App.css';
import Project from './Project';

class Projects extends React.Component {
    // ...
    render() {
        return (
            <div>
                <h1>Projects List</h1>
                <ul>
                    {this.props.items.map((item, index) => (
                        <Project
                            key={index}
                            {...item}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Projects;
