import { ENDPOINTS_API } from "../constants"

export default async function fetchUserProfileFromAPI (token: string) {

    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    const apiURL = process.env.REACT_APP_API_URL || "http://localhost:3001/api/v1"
    
    if (token === "") return

    const endpoint = ENDPOINTS_API.PROFILE
    
    const response = await fetch(apiURL + endpoint, requestOptions)
    
    const JSONresponse: IProfileResponse = await response.json()

    return JSONresponse

}