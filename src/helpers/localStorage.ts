export const getUserFromLocalStorage = (): IUser | null => {

    const userString: string = localStorage.getItem("user") || "{}"
    const user = JSON.parse(userString)
    const emailIsEmpty = !(user?.email) || user?.email === ""
    const tokenIsEmpty = !(user?.token) || user?.token === ""

    if (emailIsEmpty || tokenIsEmpty) return null

    return {
        ...user,
        isLogged: true
    }

}

export const setUserToLocalStorage = (user: IUser) => {
    localStorage.setItem("user", JSON.stringify(user))
}

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user")
}