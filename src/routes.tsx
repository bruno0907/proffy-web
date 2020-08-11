import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

function Routes(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/study" component={TeacherList} />
            <Route exact path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes