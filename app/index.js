import React from 'react';
import ReactDOM from 'react-dom';
import CV from './components/CV';

let CV_JSON = {
    name: "Anna",
    description: "This is my description",
    contact: {
        phone: "052235226",
        email: "abra.kadabra@gmail.com",
        linkedin: "http://abc.com",
        github: "def.com"
    },
    experiences: [
        {
            title: "IBM",
            period: {
                start: 'August 2011',
                end: 'August 2017'
            },
            location: "New York",
            description: "Did some stuff"
        }
    ],
    projects: [
        {
            title: "Social Network Platform",
            location: "IBM",
            description: "Did some stuff too"
        }
    ],
    education: [
        {
            date: "July 2011",
            specialty: "B.Sc in Rocket Science",
            institute: "MIT"
        }
    ]
}

ReactDOM.render(
    <CV {...CV_JSON}/>, document.getElementById('root')
);
