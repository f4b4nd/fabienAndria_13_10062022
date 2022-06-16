import React, { useCallback } from 'react'
import { useSelector, useDispatch} from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons"

import Logo from "../../assets/logos/argentBankLogo.png"
import { ROUTES } from "../../constants"

import { Container, Link } from "./style"

import { userSelector } from '../../store/useSelectors'
import { logoutUserAction } from '../../store/userActions'

interface Props {
    children?: React.ReactNode
}

const Navbar = function NavBarComponent ({children}: Props) {
    const user = useSelector(userSelector)

    return (
        <Container className="main-nav">
            
            <Navbar.Logo />

            {children}

            {user.isLogged && <Navbar.User userName={user.email} />}

            {!user.isLogged && <Navbar.SignIn /> }

            {user.isLogged && <Navbar.SignOut /> }
            
        </Container>
    )
}

Navbar.Logo = () => {
    return (
        <Link className="main-nav-logo" to={ROUTES.HOME}>
            <img
                className="main-nav-logo-image"
                src={Logo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
    )
}

Navbar.User = ({userName}: {userName?: string}) => {
    return (
        <div className="navbar__user"> 
            <Link className="main-nav-item" to={ROUTES.DASHBOARD}>
                <FontAwesomeIcon icon={faUserCircle} />
                {userName || null}
            </Link>
        </div>
    )
}

Navbar.SignIn = () => {
    return (
        <div className="navbar__sign-in">
            <Link className="main-nav-item" to={ROUTES.SIGN_IN}>
                <FontAwesomeIcon icon={faUserCircle} />
                Sign In
            </Link>
        </div>
    )
}

Navbar.SignOut = function SignoutStore () {

    const user = useSelector(userSelector)

    const dispatch = useDispatch()

    const logout = useCallback((user: IUser) => {
        dispatch(logoutUserAction(user))
    }, [dispatch])

    return (
        <div className="navbar__sign-out">

            <Link 
                className="main-nav-item" 
                to={ROUTES.HOME} 
                onClick={() => logout(user)} 
            >

                <FontAwesomeIcon icon={faSignOut} />

                Sign Out

            </Link>

        </div>
    )
}

export default Navbar