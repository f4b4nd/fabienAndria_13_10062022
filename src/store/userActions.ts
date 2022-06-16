export function loginUserAction (user: IUser): Action {
    return {
        type: ActionType['LOGIN'],
        payload: {
            ...user,
            email: user.email,
            token : user.token
        }
    }
}