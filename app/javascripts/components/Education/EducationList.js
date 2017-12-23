import React, { Component } from 'react';
import Education from './Education';

class EducationList extends React.Component {
    // ...
    render() {
        return (
            <div>
                <h1>Education List</h1>
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
