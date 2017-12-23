import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

import './Loading.css';

class Loading extends Component {

    render() {
        return (
            <Dimmer.Dimmable as={Segment} blurring dimmed={this.props.loading}>
                <Dimmer active={this.props.loading}>
                    <Loader>Loading</Loader>
                </Dimmer>
            </Dimmer.Dimmable>
        )
    }
}

export default Loading;
