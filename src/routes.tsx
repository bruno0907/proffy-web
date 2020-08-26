import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import TeacherList from "./pages/TeacherListPage";
import GiveClassesPage from "./pages/GiveClassesPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ActionPage from "./pages/ActionPage";
import PasswordRecoveryPage from "./pages/PasswordRecoveryPage";
import ProfilePage from "./pages/ProfilePage";

import { AuthProvider } from "./contexts/auth";

function Routes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/study" component={TeacherList} />
        <Route exact path="/give-classes" component={GiveClassesPage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route exact path="/sign-up/success" component={ActionPage} />
        <Route exact path="/password-recovery/" component={PasswordRecoveryPage} />
        <Route exact path="/password-recovery/email-sent" component={ActionPage} />
        <Route exact path="/user/profile/" component={ProfilePage} />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Routes;
