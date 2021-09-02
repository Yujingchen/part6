const initialState = ''

const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_NOTIFICATION":
            return action.data
        case "CLEAR_NOTIFICATION":
            return ""
        default:
            return ""
    }
}

export const setNotificationThunk = (message, resetTime) => {
    return async dispatch => {
        dispatch({
            type: "SET_NOTIFICATION",
            data: message
        })
        setTimeout(() => {
            dispatch({
                type: "CLEAR_NOTIFICATION",
            })}, resetTime * 1000
        )
    }
}



export default notificationReducer