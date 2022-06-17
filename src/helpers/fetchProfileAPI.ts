import { ENDPOINTS_API } from "../constants"

const fetchProfileAPI: IFetchProfileAPI = async (token) => {

    const apiURL = process.env.REACT_APP_API_URL || "http://localhost:3001/api/v1"

    if (!apiURL || token === "") return

    const endpoint = ENDPOINTS_API.PROFILE

    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    const response = await fetch(apiURL + endpoint, requestOptions)

    const responseData: IProfileResponse = await response.json()

    return responseData

}

export default fetchProfileAPI