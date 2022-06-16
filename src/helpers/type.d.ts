interface ILoginAPI {
    (email: string, password: string): Promise<ILoginResponse| undefined>
}

interface ILoginResponse {
    status: number,
    message: string,
    body?: {
        token: string
    }
}