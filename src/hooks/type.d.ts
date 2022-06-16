enum IEndpoint {
    LOGIN = "/user/login",
    SIGN_UP = "/user/signup",
    PROFILE = "/user/profile"
}

interface IJsonResponse {
    status: string,
    data: ObjectProps,
    errors?: Array<{message: string}>
}

interface IFetchData {
    (endpoint: IEndpoint, setResponseData: React.Dispatch<React.SetStateAction<ObjectProps>>): Promise<void>
}

interface IUseFetch {
    (endpoint: IEndpoint): ObjectProps
}

interface ObjectProps {
    [key: string]: any,
}