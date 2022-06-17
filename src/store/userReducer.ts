import { getUserFromLocalStorage } from "../helpers/localStorage"

const emptyUser: IUser = {
    email: "",
    token: "",
    isLogged: false,
    firstName: "",
    lastName: "",
    createdAt: "",
    updatedAt: "",
    id: ""
}

const initialState = getUserFromLocalStorage() || emptyUser

export const userReducer: IUserReducer = function (state = initialState, action) {

    switch (action.type) {

        case 'USER_LOG_IN':
            return {...state, ...action.payload}

        case 'USER_LOG_OUT':
            return emptyUser

        case 'USER_GET_PROFILE':
            return {...state, ...action.payload}

        default:
            return state
    }
}
