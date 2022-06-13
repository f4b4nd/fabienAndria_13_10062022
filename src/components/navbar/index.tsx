import React from "react"
import { Link } from "react-router-dom"

import Logo from "../../assets/logos/argentBankLogo.png"
import { ROUTES } from "../../constants"

interface Props {
    children?: React.ReactNode
}

const Navbar = ({children}: Props) => {
    return (
        <nav className="main-nav">
            
            <Navbar.Logo />

            {children}

        </nav>
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
            <Link className="main-nav-item" to={ROUTES.USER}>
                <i className="fa fa-user-circle"></i>
                {userName || null}
            </Link>
        </div>
    )
}

Navbar.SignIn = () => {
    return (
        <div className="navbar__sign-in">
            <Link className="main-nav-item" to={ROUTES.SIGN_IN}>
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
        </div>
    )
}

Navbar.SignOut = () => {
    return (
        <div className="navbar__sign-out">
            <Link className="main-nav-item" to={ROUTES.HOME}>
                <i className="fa fa-sign-out"></i>
                Sign Out
            </Link>
        </div>
    )
}

export default Navbar