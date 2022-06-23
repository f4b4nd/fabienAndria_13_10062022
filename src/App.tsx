import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom'

import { useSelector } from "react-redux"

import IsUserRedirect from "./helpers/IsUserRedirect"
import ProtectedRoute from './helpers/ProtectedRoute'

import { userSelector } from "./store/userSelectors"


import { ROUTES } from './constants'

import HomePage from './pages/home'
import SignInPage from './pages/signIn'
import DashboardPage from './pages/dashboard'

import './App.css'

function App () {
    
    const userStore = useSelector(userSelector)

    return (
        <Router>
            
            <Routes>

                <Route path={ROUTES.HOME} element={ <HomePage /> }/>
                
                <Route path={ROUTES.SIGN_IN} element={ 
                    <>
                    <IsUserRedirect user={userStore} loggedInPath={ROUTES.DASHBOARD}>
                        <SignInPage /> 
                    </IsUserRedirect>
                    </>
                }/>

                <Route path={ROUTES.DASHBOARD} element={
                    <ProtectedRoute user={userStore}>
                        <DashboardPage /> 
                    </ProtectedRoute>
                }/>

            </Routes>

        </Router>
        
    )
}

export default App
