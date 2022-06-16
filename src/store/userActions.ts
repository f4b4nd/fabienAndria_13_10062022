import { setUserToLocalStorage, removeUserFromLocalStorage } from "../helpers/localStorage"

export const loginUserAction: ILoginUserAction = (user) => {
    
    const newUser: IUser = {
        ...user,
        email: user.email,
        token: user.token,
        isLogged: user.isLogged
    }

    setUserToLocalStorage(newUser)

    return {
        type: 'USER_LOG_IN' as ActionType.LOGIN,
        payload: newUser
    }

}

export const logoutUserAction: ILogoutUserAction = () => {
    
    removeUserFromLocalStorage()

    return {
        type: 'USER_LOG_OUT' as ActionType.LOGOUT,
    }
    
}