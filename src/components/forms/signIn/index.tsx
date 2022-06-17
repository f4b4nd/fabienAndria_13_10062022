import { useCallback, useEffect, useState } from "react"

import { Navigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

import { Container, InputWrapper, CheckboxWrapper, Button } from "./style"
import { userSelector } from "../../../store/userSelectors"
import { getUserProfileAction, loginUserAction } from "../../../store/userActions"

import { getUserFromLocalStorage } from "../../../helpers/localStorage"

import loginAPI from "../../../helpers/loginAPI"
import fetchProfileAPI from "../../../helpers/fetchProfileAPI"

import { ROUTES } from "../../../constants"

const SignInForm = ({userStore, loginStore, getProfileStore}: ISignInForm) => {

    const [emailInput, setEmailInput] = useState("" as string)
    const [passwordInput, setPasswordInput] = useState("" as string)
    const [loginIsIncorrect, setLoginIsIncorrect] = useState(false as boolean)
    const [isRedirectedToDashboard, setIsRedirectedToDashboard] = useState(false as boolean)
    
    useEffect(() => {

        function setUserProfileStore () {

            const localStorageUser = getUserFromLocalStorage()
            const localStorageProfileIsEmpty = !localStorageUser || localStorageUser?.firstName === ""

            if(!localStorageProfileIsEmpty) {
                getProfileStore(localStorageUser)
                return
            }

            setUserProfileStoreFromAPI()
        }

        async function setUserProfileStoreFromAPI () {
            
            const response = await fetchProfileAPI(userStore.token)

            if (response?.status !== 200) return

            const userProfile = response?.body
            getProfileStore({...userStore, ...userProfile})
        
        }

        if (userStore.isLogged === true) {
            setIsRedirectedToDashboard(true)
        }

        setUserProfileStore()

    }, [userStore, getProfileStore])

    const handleSubmit = async (e: React.FormEvent) => {
        
        e.preventDefault()

        if (emailInput === "" || passwordInput === "") return

        const response = await loginAPI(emailInput, passwordInput)

        if (response?.status !== 200) {
            setLoginIsIncorrect(true)
            return
        }

        const newUserState: IUser = {
            ...userStore,
            email: emailInput,
            token: response?.body?.token || "", 
            isLogged: true
        }

        loginStore(newUserState)
        setLoginIsIncorrect(false)
        setIsRedirectedToDashboard(true)

    }

    return (
        <>
        { isRedirectedToDashboard && <Navigate to={ROUTES.DASHBOARD} /> }

        <Container className="sign-in-content">

            <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
            
            <h1>Sign In</h1>

            <form>
                
                <InputWrapper className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}/>
                </InputWrapper>

                <InputWrapper className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)}/>
                </InputWrapper>

                <CheckboxWrapper className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me" >Remember me</label>
                </CheckboxWrapper>

                {loginIsIncorrect && <pre className="error-login"> Identifiants incorrects </pre>}

                <Button className="sign-in-button" onClick={(e) => handleSubmit(e)}> Sign In </Button>    
        
            </form>

        </Container>
        </>
    )
}

const SignInFormStore: React.FC = () => {
    
    const userStore = useSelector(userSelector)

    const dispatch = useDispatch()

    const loginStore: ILoginStore = useCallback((user: IUser) => {
        dispatch(loginUserAction(user))
    }, [dispatch])

    
    const getProfileStore: IGetProfileStore = useCallback((user: IUser) => {
        return dispatch(getUserProfileAction(user))
    }, [dispatch])
    
    return (
        <SignInForm 
            userStore={userStore} 
            loginStore={loginStore}
            getProfileStore={getProfileStore}
        />
    )

}

export { SignInFormStore }
