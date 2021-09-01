const initialState = ''

const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_NOTIFICATION":
            return "you voted, If it hurts, do it more often"
        case "RESET_NOTIFICATION":
            return ""
        default:
            return ""
    }
}

export const notificationChangeAction = (actionType) => {
    return {
        type: actionType,
    }
}



export default notificationReducer