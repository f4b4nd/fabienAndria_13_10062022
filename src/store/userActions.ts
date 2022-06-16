export const loginUserAction: ILoginUserAction = (user) => {
    return {
        type: 'USER_LOG_IN' as ActionType.LOGIN,
        payload: {
            ...user,
            email: user.email,
            token : "1234"
        }
    }
}

export const logoutUserAction: ILogoutUserAction = (user) => {
    return {
        type: 'USER_LOG_OUT' as ActionType.LOGOUT,
        payload: {
            ...user,
            email: "",
            token: ""
        }
    }
}