/* Libs */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import React from 'react';

/* Modules */
import configureStore from './store/configureStore.js'

/* Components */
import CV from './components/CV/CV';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <CV />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
