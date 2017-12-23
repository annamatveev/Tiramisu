export function fetchRequest(){
    return {
        type: "FETCH_REQUEST"
    }
}

export function fetchSuccess(payload) {
    return {
        type: "FETCH_SUCCESS",
        payload
    }
}

export function fetchError() {
    return {
        type: "FETCH_ERROR"
    }
}

export function fetchDataFromAPI(url) {
    return (dispatch) => {
        dispatch(fetchRequest());

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(fetchSuccess(items)))
            .catch(() => dispatch(fetchError()));
    };
}