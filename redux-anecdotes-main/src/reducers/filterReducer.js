const initialState = ''

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FILTER_BY_VALUE":
            return action.data;
        default:
            return initialState
    }
}

export const filterAction = (value) => {
    return {
        type: "FILTER_BY_VALUE",
        data: value
    }
}

export default filterReducer