import React from 'react';
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from 'react-component-bytesize-icons';

import './JobList.css';

class JobList extends React.Component {
    // ...
    render() {
        return (
            <div className="experience">
                <h1>Experience</h1>
                <VerticalTimeline>
                    {this.props.items.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            date={item.period.start + " - " + item.period.end}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<Icon name="work" thickness="bold" size="small" />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {item.title}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
                            <p>
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        );
    }
}

export default JobList;
