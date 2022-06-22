import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

import { Container, InputWrapper, CheckboxWrapper, Button } from "./style"

import { userSelector } from "../../../store/userSelectors"
import { getUserProfileAction, loginUserAction } from "../../../store/userActions"

import loginAPI from "../../../helpers/loginAPI"
import getUserProfile from "../../../helpers/getUserProfile"


const SignInForm = ({userStore, loginStore, setProfileStore}: ISignInForm) => {

    const [credentials, setCredentials] = useState<ICredentials>({email: "", password: ""})
    const [loginIsIncorrect, setLoginIsIncorrect] = useState<boolean>(false)
    

    const handleSubmit = async (e: React.FormEvent) => {
        
        e.preventDefault()

        if (credentials.email === "" || credentials.password === "") return

        const response = await loginAPI(credentials.email, credentials.password)

        if (response?.status !== 200) {
            setLoginIsIncorrect(true)
            return
        }

        const newUserState: IUser = {
            ...userStore,
            email: credentials.email,
            token: response?.body?.token || "", 
            isLogged: true
        }

        loginStore(newUserState)

        const userProfile = await getUserProfile(newUserState.token)
        setProfileStore({...newUserState, ...userProfile})
        setLoginIsIncorrect(false)

    }

    return (
        <Container className="sign-in-content">

            <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
            
            <h1>Sign In</h1>

            <form>
                
                <InputWrapper className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" id="username" 
                        value={credentials.email} 
                        onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                    />
                </InputWrapper>

                <InputWrapper className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" id="password" 
                        value={credentials.password} 
                        onChange={(e) => setCredentials({...credentials, password: e.target.value})} 
                    />
                </InputWrapper>

                <CheckboxWrapper className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me" >Remember me</label>
                </CheckboxWrapper>

                {loginIsIncorrect && <pre className="error-login"> Identifiants incorrects </pre>}

                <Button className="sign-in-button" onClick={(e) => handleSubmit(e)}> Sign In </Button>    
        
            </form>

        </Container>
    )
}

const SignInFormStore: React.FC = () => {
    
    const userStore = useSelector(userSelector)

    const dispatch = useDispatch()

    const loginStore: ILoginStore = useCallback((user: IUser) => {
        dispatch(loginUserAction(user))
    }, [dispatch])
    
    const setProfileStore: ISetProfileStore = useCallback((user: IUser) => {
        dispatch(getUserProfileAction(user))
    }, [dispatch])
    
    return (
        <SignInForm 
            userStore={userStore} 
            loginStore={loginStore}
            setProfileStore={setProfileStore}
        />
    )

}

export { SignInFormStore }
