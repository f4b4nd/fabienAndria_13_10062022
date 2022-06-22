interface ILoginStore {
    (user: IUser): void
}

interface IGetProfileStore {
    (user: IUser): void
}

interface ISignInForm {
    userStore: IUser,
    loginStore: ILoginStore;
    getProfileStore: IGetProfileStore
}

interface ICredentials {
    email: string,
    password: string,
}