import { useCallback } from "react"

import { useDispatch, useSelector } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

import { ROUTES } from "../../../constants"

import { Container, InputWrapper, CheckboxWrapper, Link, Button } from "./style"
import { userSelector } from "../../../store/useSelectors"
import { loginUserAction } from "../../../store/userActions"


const SignInForm = ({user, login}: {user: IUser, login: any}) => {
    return (
        <Container className="sign-in-content">

            <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
            
            <h1>Sign In</h1>

            <form>
                
                <InputWrapper className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </InputWrapper>

                <InputWrapper className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </InputWrapper>

                <CheckboxWrapper className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me" >Remember me</label>
                </CheckboxWrapper>

                <Link to={ROUTES.USER}>                    
                    <Button className="sign-in-button" onClick={() => login(user)}> Sign In </Button>    
                </Link>
        
            </form>

        </Container>
    )
}

const SignInFormStore: React.FC = () => {
    
    const user = useSelector(userSelector)

    const dispatch = useDispatch()

    const login = useCallback((user: IUser) => {
        dispatch(loginUserAction(user))
    }, [dispatch])

    return <SignInForm user={user} login={login} />

}

export { SignInFormStore }