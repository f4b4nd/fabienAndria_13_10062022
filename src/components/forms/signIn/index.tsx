import { useCallback, useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

import { Container, InputWrapper, CheckboxWrapper, Button } from "./style"
import { userSelector } from "../../../store/useSelectors"
import { loginUserAction } from "../../../store/userActions"

import loginApi from "../../../helpers/loginAPI"

const SignInForm = ({userStore, loginStore}: {userStore: IUser, loginStore: any}) => {

    const [emailInput, setEmailInput] = useState("" as string)
    const [passwordInput, setPasswordInput] = useState("" as string)

    const handleSubmit = async (e: React.FormEvent) => {
        
        e.preventDefault()

        if (emailInput === "" || passwordInput === "") return

        const response = await loginApi(emailInput, passwordInput)

        console.log('reponse', response)

        loginStore({...userStore, token: response?.body?.token })

    }


    return (
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

                <Button className="sign-in-button" onClick={(e) => handleSubmit(e)}> Sign In </Button>    
        
            </form>

        </Container>
    )
}

const SignInFormStore: React.FC = () => {
    
    const userStore = useSelector(userSelector)

    const dispatch = useDispatch()

    const loginStore = useCallback((user: IUser) => {
        dispatch(loginUserAction(user))
    }, [dispatch])

    return <SignInForm userStore={userStore} loginStore={loginStore} />

}

export { SignInFormStore }