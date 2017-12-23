import React, { Component } from 'react';
import Job from './Job';

class JobList extends React.Component {
    // ...
    render() {
        return (
            <div>
                <h1>Job's List</h1>
                <ul>
                    {this.props.items.map((item, index) => (
                        <Job
                            key={index}
                            {...item}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default JobList;
