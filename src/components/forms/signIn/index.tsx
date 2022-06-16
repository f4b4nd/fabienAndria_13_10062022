import { useCallback, useEffect, useState } from "react"

import { Navigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

import { Container, InputWrapper, CheckboxWrapper, Button } from "./style"
import { userSelector } from "../../../store/useSelectors"
import { loginUserAction } from "../../../store/userActions"

import loginAPI from "../../../helpers/loginAPI"

import { ROUTES } from "../../../constants"

const SignInForm = ({userStore, loginStore}: {userStore: IUser, loginStore: ILoginStore}) => {

    const [emailInput, setEmailInput] = useState("" as string)
    const [passwordInput, setPasswordInput] = useState("" as string)
    const [loginIsIncorrect, setLoginIsIncorrect] = useState(false as boolean)
    const [isRedirectedToDashboard, setIsRedirectedToDashboard] = useState(false as boolean)
    
    useEffect(() => {
        if (userStore.isLogged === true) {
            setIsRedirectedToDashboard(true)
        }
    }, [userStore.isLogged])

    const handleSubmit = async (e: React.FormEvent) => {
        
        e.preventDefault()

        if (emailInput === "" || passwordInput === "") return

        const response = await loginAPI(emailInput, passwordInput)

        console.log('reponse', response)

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

    return <SignInForm userStore={userStore} loginStore={loginStore} />

}

export { SignInFormStore }