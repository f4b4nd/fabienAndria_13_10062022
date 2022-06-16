enum IEndpoint {
    LOGIN = "/user/login",
    SIGN_UP = "/user/signup",
    PROFILE = "/user/profile"
}

interface ILoginAPI {
    (email: string, password: string): Promise<ILoginResponse| undefined>
}

interface ILoginResponse {
    status: string,
    message: string,
    body?: {
        token: string
    }
}