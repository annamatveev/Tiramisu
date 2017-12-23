import { Component } from 'react';
import { Card } from 'semantic-ui-react'
import './EducationList.css'

class EducationList extends Component {
    // ...
    render() {

        const canonizedArray = this.props.items.map((item, index) => {
            return {
                key: index,
                header : item.specialty + " @ " + item.institute,
                description: item.description,
                meta: item.date
            }
        });

        return (
            <div id="education-list">
                <h1>Education</h1>
                <Card.Group items={canonizedArray}/>
            </div>
        );
    }
}

export default EducationList;
