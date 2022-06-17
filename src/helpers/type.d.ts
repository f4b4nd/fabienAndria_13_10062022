interface ILoginAPI {
    (email: string, password: string): Promise<ILoginResponse| undefined>
}

interface IFetchProfileAPI {
    (token: string): Promise<IProfileResponse | undefined>
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