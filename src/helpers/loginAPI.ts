import { ENDPOINTS_API } from "../constants"

const loginAPI: ILoginAPI = async (email, password) => {

    const apiURL = process.env.REACT_APP_API_URL || "http://localhost:3001/api/v1"

    if (!apiURL) return

    const endpoint = ENDPOINTS_API.LOGIN

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