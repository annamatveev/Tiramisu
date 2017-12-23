import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'


import './Loading.css';

class Loading extends Component {

    // ...
    render() {
        return (
            <div className='loader'>
                <Segment>
                    <Dimmer active inverted>
                        <Loader  size='large' inverted>Loading</Loader>
                    </Dimmer>
                </Segment>
            </div>
        )
    }
}

export default Loading;
