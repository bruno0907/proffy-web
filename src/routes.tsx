import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ActionPage from './pages/ActionPage'
import PasswordRecoveryPage from './pages/PasswordRecoveryPage'

function Routes(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/study" component={TeacherList} />
            <Route exact path="/give-classes" component={TeacherForm} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/register/success" component={ActionPage} />
            <Route exact path="/password-recovery/" component={PasswordRecoveryPage} />
            <Route exact path="/password-recovery/email-sent" component={ActionPage} />
        </BrowserRouter>
    )
}

export default Routes