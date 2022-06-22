interface ILoginStore {
    (user: IUser): void
}

interface ISetProfileStore {
    (user: IUser): void
}

interface ISignInForm {
    userStore: IUser,
    loginStore: ILoginStore;
    setProfileStore: ISetProfileStore
}

interface ICredentials {
    email: string,
    password: string,
}