const initialState: IUser = {
    id: "",
    email: "",
    password: "",
    token: ""
}

let userReducer: IUserReducer

userReducer = function (state = initialState, action) {
    switch (action.type) {

        case 'USER_LOG_IN':
            return {...state, ...action.payload}

        default:
            return state
    }
}

export { userReducer }