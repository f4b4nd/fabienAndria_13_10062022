interface ILoginAPI {
    (email: string, password: string): Promise<ILoginResponse| undefined>
}

interface IFetchProfileAPI {
    (token: string): Promise<IProfileResponse | undefined>
}

interface IUpdateProfileAPI {
    (token: string, newProfile: {firstName: string, lastName: string}): Promise<IProfileResponse | undefined>
}

interface ILoginResponse {
    status: number,
    message: string,
    body?: {
        token: string
    }
}

interface IProfileResponse {
    status: number,
    message: string,
    body?: IUserProfile
}

interface IIsUserRedirect {
    user: IUser, 
    loggedInPath: IRoutes[keyof IRoutes],
    children: React.ReactNode
}