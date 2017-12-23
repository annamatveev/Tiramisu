import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CVReducer from '../reducers/CVReducer'

export default function configureStore(initialState) {
    return createStore(
        CVReducer,
        initialState,
        applyMiddleware(thunk)
    );
}