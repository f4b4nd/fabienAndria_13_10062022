const loginAPI: ILoginAPI = async (email, password) => {

    const apiURL = process.env.REACT_APP_API_URL

    if (!apiURL) return

    const endpoint = "/user/login" as IEndpoint.LOGIN

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }

    const response = await fetch(apiURL + endpoint, requestOptions)

    const responseData: ILoginResponse = await response.json()

    return responseData

}

export default loginAPI