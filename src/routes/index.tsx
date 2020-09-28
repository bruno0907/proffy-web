import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import TeacherListPage from "../pages/TeacherListPage";
import TeacherClassesPage from "../pages/TeacherClassesPage";
import GiveClassesPage from "../pages/GiveClassesPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ActionPage from "../pages/ActionPage";
import ProfilePage from "../pages/ProfilePage";
import PasswordRecoveryPage from "../pages/PasswordRecoveryPage";
import PasswordResetPage from "../pages/PasswordResetPage";

import { AuthProvider, useAuth } from "../contexts/auth";


function Routes() {
  const { signed } = useAuth()

  return (
    <AuthProvider>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/study" component={TeacherListPage} />

        {!signed ?
          <Route exact path="/give-classes" component={SignInPage} />     
          :          
          <Route exact path="/give-classes" component={GiveClassesPage} />
        }        

        <Route exact path="/password-recovery/" component={PasswordRecoveryPage} />
        <Route exact path="/password-reset/" component={PasswordResetPage} />
        <Route exact path="/success" component={ActionPage} />   

        {!signed ?
          <Route exact path="/user/profile/" component={SignInPage} />
          :
          <Route exact path="/user/profile/" component={ProfilePage} />
        }

        {!signed ?
          <Route exact path="/user/profile/:id/classes" component={SignInPage} />   
          :
          <Route exact path="/user/profile/:id/classes" component={TeacherClassesPage} />               
        }
        
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/sign-up" component={SignUpPage} />        
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Routes;
