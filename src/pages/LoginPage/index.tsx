import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import showPassword from '../../assets/images/icons/show-password.svg'
import heart from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

function LoginPage() {
  return (
    <div id="login-page">
      <div className="login-page-content">
        <div className="logo-container">
          <div>
            <img src={logo} alt=""/>
            <h1>Sua plataforma de estudos online.</h1>
          </div>
        </div>
        <div className="form-container">
          <form>
            <legend>
              <h2>Fazer login</h2>
              <Link to="/">Criar uma conta</Link>
            </legend>
            <fieldset>
              <div>
                <input type="text" name="email" className="first-input"/>
                <label htmlFor="email">E-mail</label>
              </div>
              <div>
                <input type="password" name="password" className="last-input"/>
                <label htmlFor="password">Senha</label>
                <img src={showPassword} alt="Show password"/>
              </div>
            </fieldset>
            <div className="save-password">
              <div className="checkbox">
                <input type="checkbox" name="remember" />
                <span></span>
              </div>              
              <label>Lembrar-me</label>
              <Link to="/">Esqueci minha senha</Link>
            </div>
            <button type="submit" className="button-disabled">Entrar</button>
          </form>
          <div className="signup">
            <span className="signup-action">Não tem conta? <Link to="/">Cadastre-se</Link></span>
            <span className="itsfree">É de graça <img src={heart} alt=""/></span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default LoginPage
