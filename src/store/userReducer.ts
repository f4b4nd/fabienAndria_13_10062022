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

        default:
            return state
    }
}
