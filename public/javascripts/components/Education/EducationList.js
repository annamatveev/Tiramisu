import React, { Component } from 'react';
import '../../../stylesheets/App.css';
import Education from './Education';

class EducationList extends React.Component {
    // ...
    render() {
        return (
            <div>
                <h1>Projects List</h1>
                <ul>
                    {this.props.items.map((item, index) => (
                        <Education
                            key={index}
                            {...item}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default EducationList;
