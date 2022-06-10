import React from 'react'
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom'

import { ROUTES } from './constants'

import HomePage from './pages/home'

import './App.css'


function App () {
    return (
        <Router>
            
            <Routes>

                <Route path={ROUTES.HOME} element={ <HomePage /> }/>

            </Routes>

        </Router>
        
    )
}

export default App
