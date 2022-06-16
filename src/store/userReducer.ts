import { getUserFromLocalStorage } from "../helpers/localStorage"

const emptyUser: IUser = {
    email: "",
    token: "",
    isLogged: false
}

const initialState = getUserFromLocalStorage() || emptyUser

export const userReducer: IUserReducer = function (state = initialState, action) {
    console.log('usereducer', state)

    switch (action.type) {

        case 'USER_LOG_IN':
            return {...state, ...action.payload}

        case 'USER_LOG_OUT':
            return emptyUser

        default:
            return state
    }
}
