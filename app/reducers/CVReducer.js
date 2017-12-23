export default function CVReducers(state = [], action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return  {...state, loading: true};
        case 'FETCH_SUCCESS':
            return {...state, CV: action.payload, loading: false};
        case 'FETCH_ERROR':
            return  {...state, loading: false};
            return state;
        default:
            return state
    }
}