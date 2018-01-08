export default function CVReducers(state = [], action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return  {...state, loading: true};
        case 'FETCH_SUCCESS':
            return {...state, info: action.payload, loading: false};
        case 'FETCH_ERROR':
            return  {...state, loading: false};
        default:
            return state
    }
}