import { setUserToLocalStorage, removeUserFromLocalStorage } from "../helpers/localStorage"

export const loginUserAction: ILoginUserAction = (user) => {
    
    const newUserState: IUser = {
        ...user,
        email: user.email,
        token: user.token,
        isLogged: user.isLogged
    }

    setUserToLocalStorage(newUserState)

    return {
        type: 'USER_LOG_IN' as ActionType.LOGIN,
        payload: newUserState
    }

}

export const logoutUserAction: ILogoutUserAction = () => {
    
    removeUserFromLocalStorage()

    return {
        type: 'USER_LOG_OUT' as ActionType.LOGOUT,
    }
    
}

export const getUserProfileAction: IGetUserProfileAction = (user) => {

    setUserToLocalStorage(user)

    return {
        type: 'USER_GET_PROFILE' as ActionType.GET_PROFILE,
        payload: user
    }

}