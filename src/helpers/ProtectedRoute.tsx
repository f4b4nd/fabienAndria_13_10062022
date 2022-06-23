import { Navigate } from "react-router-dom"
import { ROUTES } from "../constants"

const ProtectedRoute = ({user, children}: IProtectedRoute) => {
    if (user.isLogged) {
        return <> {children} </>
    }
    return <Navigate to={ROUTES.SIGN_IN} />
}

export default ProtectedRoute