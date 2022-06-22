import { getUserFromLocalStorage } from "./localStorage"

import fetchUserProfileFromAPI from "./fetchUserProfileAPI"

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
    
    const response = await fetchUserProfileFromAPI(token)
    
    if (response?.status === 200 && response.body) {
        const userProfileFromAPI: IUserProfile = response.body
        return userProfileFromAPI     
    }

    return userProfile

}


