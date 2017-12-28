import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'

import './Section.css';

const Section = WrappedComponent => class HOC extends Component {

    render() {
        return (
            <section id={this.props.id + "-section-wrapper"}>
                <Segment raised>
                    <WrappedComponent {...this.props}/>
                </Segment>
            </section>

        );
    }
}

export default Section;