const initialState = ""
let notificationOn = false;
const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_NOTIFICATION":
            return action.data
        case "CLEAR_NOTIFICATION":
            return ""
        default:
            return state
    }
}


export const setNotification= (message) => {
    return async dispatch => {
        dispatch({
            type: "SET_NOTIFICATION",
            data: message
        })
    }
}

export const clearNotification = (delay) => {
    const delayTime = delay * 1000
    return async dispatch => {
        const timer = setTimeout(()=>{
            dispatch({
                type: "CLEAR_NOTIFICATION",
            })
            notificationOn = false
        }, delayTime)
        if(notificationOn) {
            clearTimeout(timer)
        }
        notificationOn = true
    }
}

export default notificationReducer