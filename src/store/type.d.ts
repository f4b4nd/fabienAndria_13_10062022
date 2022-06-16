interface IUser {
    email: string,
    password: string,
    id: string,
    token: string
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
    (state: User | undefined, action: Action): User
}

interface IUserSelector {
    ({user}: {user: User}): User 
}

interface ILoginUserAction {
    (user: IUser): Action
}

interface ILogoutUserAction {
    (user: IUser): Action
}