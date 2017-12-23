import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import ScrollAnimation from 'react-animate-on-scroll';


import './Section.css';

const Section = WrappedComponent => class extends Component {

    render() {
        return (
            <ScrollAnimation animateIn="fadeIn">
                <section id={this.props.id}>
                    <Segment raised>
                        <WrappedComponent {...this.props}/>
                    </Segment>
                </section>
            </ScrollAnimation>

        );
    }
}

export default Section;