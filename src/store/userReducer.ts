const initialState: IUser = {
    id: "",
    email: "",
    password: "",
    token: ""
}

export const userReducer: IUserReducer = function (state = initialState, action) {
    switch (action.type) {

        case 'USER_LOG_IN':
            return {...state, ...action.payload}

        case 'USER_LOG_OUT':
            return {...state, token: action.payload?.token, email: action.payload?.email}

        default:
            return state
    }
}
