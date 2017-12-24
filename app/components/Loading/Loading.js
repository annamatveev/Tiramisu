import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

import './Loading.css';

class Loading extends Component {
    state = { }
    componentDidMount() {
        this.setState({ active: true })
    }

    componentWillUnmount() {
        this.setState({ active: false })
    }
    render() {
        const { active } = this.state

        return (
            <Dimmer.Dimmable as={this.props.Segment} blurring dimmed={active}>
                <Dimmer page={true} active={active}>
                    <Loader>Loading</Loader>
                </Dimmer>
            </Dimmer.Dimmable>
        )
    }
}

export default Loading;
