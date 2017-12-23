import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'

import './Section.css';

const Section = WrappedComponent => class extends Component {

    render() {
        return (
                <section id={this.props.id}>
                    <Segment raised>
                        <WrappedComponent {...this.props}/>
                    </Segment>
                </section>
        );
    }
}

export default Section;