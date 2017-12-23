import { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'


import './Loading.css';

class Loading extends Component {

    // ...
    render() {
        return (
            <Segment>
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
            </Segment>
        )
    }
}

export default Loading;
