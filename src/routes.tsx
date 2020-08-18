import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import TeacherList from './pages/TeacherListPage'
import TeacherForm from './pages/TeacherFormPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ActionPage from './pages/ActionPage'
import PasswordRecoveryPage from './pages/PasswordRecoveryPage'
import TeacherProfilePage from './pages/TeacherProfilePage'

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
            <Route exact path="/teacher/profile/" component={TeacherProfilePage} />
        </BrowserRouter>
    )
}

export default Routes