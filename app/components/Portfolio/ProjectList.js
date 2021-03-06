import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import './ProjectList.css'

class Projects extends Component {
    // ...
    render() {
        const canonizedArray = this.props.items.map((item, index) => {
            return {
                key: index,
                header : item.title,
                description: item.description,
                meta: item.date
            }
        });

        return (
            <div className="portfolio-content">
                <h1>Portfolio</h1>
                <Card.Group items={canonizedArray} className={"centered"}/>
            </div>
        );
    }
}

export default Projects;
