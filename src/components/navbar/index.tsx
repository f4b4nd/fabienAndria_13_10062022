import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons"

import Logo from "../../assets/logos/argentBankLogo.png"
import { ROUTES } from "../../constants"

import { Container, Link } from "./style"

interface Props {
    children?: React.ReactNode
}

const Navbar = ({children}: Props) => {
    return (
        <Container className="main-nav">
            
            <Navbar.Logo />

            {children}

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
            <Link className="main-nav-item" to={ROUTES.USER}>
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

Navbar.SignOut = () => {
    return (
        <div className="navbar__sign-out">
            <Link className="main-nav-item" to={ROUTES.HOME}>
                <FontAwesomeIcon icon={faSignOut} />
                Sign Out
            </Link>
        </div>
    )
}

export default Navbar