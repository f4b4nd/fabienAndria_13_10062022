import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom'

import { ROUTES } from './constants'

import HomePage from './pages/home'
import SignInPage from './pages/signIn'
import DashboardPage from './pages/dashboard'

import './App.css'

function App () {
    return (
        <Router>
            
            <Routes>

                <Route path={ROUTES.HOME} element={ <HomePage /> }/>

                <Route path={ROUTES.SIGN_IN} element={ <SignInPage /> }/>

                <Route path={ROUTES.DASHBOARD} element={ <DashboardPage /> }/>

            </Routes>

        </Router>
        
    )
}

export default App
