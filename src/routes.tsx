import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'


function Routes(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
        </BrowserRouter>
    )
}

export default Routes