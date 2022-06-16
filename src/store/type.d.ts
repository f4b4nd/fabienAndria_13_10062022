interface IUser {
    email: string,
    token: string,
    isLogged: boolean
}

enum ActionType {
    LOGIN = 'USER_LOG_IN',
    LOGOUT = 'USER_LOG_OUT',
}

interface ObjectProps {
    [key: string]: any,
}

interface Action {
    type: ActionType.LOGIN | ActionType.LOGOUT,
    payload?: ObjectProps
}

interface IUserReducer {
    (state: IUser | undefined, action: Action): IUser
}

interface IUserSelector {
    ({user}: {user: IUser}): IUser 
}

interface ILoginUserAction {
    (user: IUser): Action
}

interface ILogoutUserAction {
    (user?: IUser): Action
}