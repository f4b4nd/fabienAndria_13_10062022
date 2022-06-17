interface IUser {
    email: string,
    token: string,
    isLogged: boolean,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string,
    id: string
}

enum ActionType {
    LOGIN = 'USER_LOG_IN',
    LOGOUT = 'USER_LOG_OUT',
    GET_PROFILE = 'USER_GET_PROFILE',
}

interface ObjectProps {
    [key: string]: any,
}

interface Action {
    type: ActionType.LOGIN | ActionType.LOGOUT | ActionType.GET_PROFILE,
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

interface IGetUserProfileAction {
    (user: IUser): Action
}