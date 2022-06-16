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

interface Action {
    type: ActionType,
    payload?: any
}

interface IUserReducer {
    (state: User | undefined, action: Action): User
}

interface IUserSelector {
    ({user}: {user: User}): User 
}