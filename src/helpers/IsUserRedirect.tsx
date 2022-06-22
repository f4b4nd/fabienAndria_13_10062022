import { Navigate } from "react-router-dom"

const IsUserRedirect = ({user, loggedInPath, children}: IIsUserRedirect) => {
    if (user.isLogged) {
        return <Navigate to={loggedInPath} /> 
    }
    return <> {children} </>
}

export default IsUserRedirect