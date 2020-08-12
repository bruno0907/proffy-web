import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import showPassword from '../../assets/images/icons/show-password.svg'
import back from '../../assets/images/icons/back.svg'

import './styles.css'

function RegisterPage() {
  return (
    <div id="register-page">
      <div className="register-page-content">        
        <div className="form-container">
          <div className="form-header">
            <Link to="/"><img src={back} alt=""/></Link>
          </div>
          <form>
            <legend>
              <h2>Cadastro</h2>
              <p>Preencha os dados abaixo para começar</p>
            </legend>
            <fieldset>
              <div>
                <input type="text" name="name" className="first-input"/>
                <label htmlFor="email">Nome</label>
              </div>
              <div>
                <input type="text" name="surname" />
                <label htmlFor="surname">Sobrenome</label>
              </div>
              <div>
                <input type="email" name="email" />
                <label htmlFor="email">E-mail</label>
              </div>
              <div>
                <input type="password" name="password" className="last-input"/>
                <label htmlFor="password">Senha</label>
                <img src={showPassword} alt="Show password"/>
              </div>
            </fieldset>            
            <button type="submit" className="button-disabled">Entrar</button>
          </form>
        </div>
        <div id="logo-container">          
          <div>
            <img src={logo} alt=""/>
            <h1>Sua plataforma de estudos online.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}


export default RegisterPage
