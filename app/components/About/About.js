import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react'
import profilePhoto from '../../assets/photo.jpg'

import './About.css';

class Details extends Component {

    render() {

        return (
            <div className="about-content">
                <img src={profilePhoto} alt="" />
                <h1>{this.props.name} </h1>
                <h2 id="short">{this.props.short} </h2>
                <article id="description">{this.props.description} </article>

                <a href="../../assets/AnnaMatveevCV.pdf" download><Button size='medium' color='teal'>DOWNLOAD CV</Button></a>
                <Button size='medium' color='green'>CONTACT ME</Button>
            </div>
        );
    }
}

Details.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    short: PropTypes.string,
    description: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string

}

export default Details;
