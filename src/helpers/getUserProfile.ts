import { getUserFromLocalStorage } from "./localStorage"

import { ENDPOINTS_API } from "../constants"

export default async function getUserProfile (token: string) {
    
    const localStorageUser = getUserFromLocalStorage()

    const userProfile: IUserProfile = {
        firstName: localStorageUser?.firstName || "",
        lastName: localStorageUser?.lastName || "",
        createdAt: localStorageUser?.createdAt || "",
        updatedAt: localStorageUser?.updatedAt || "",
        id: localStorageUser?.id || ""
    }

    const userProfileIsEmpty = userProfile.firstName === ""

    if (!userProfileIsEmpty) {
        return userProfile            
    }
    
    const APIresponse = await fetchUserProfileFromAPI(token)
    
    if (APIresponse?.status === 200 && APIresponse.body) {
        const userProfileFromAPI: IUserProfile = APIresponse.body
        return userProfileFromAPI     
    }

    return userProfile

}


async function fetchUserProfileFromAPI (token: string) {

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