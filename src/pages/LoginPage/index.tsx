import React, { useState } from 'react'

// import heart from '../../assets/images/icons/purple-heart.svg'

import LogoAside from '../../components/LogoAside'
import FormAside from '../../components/FormAside'
import Input from '../../components/Input'
import RememberMe from '../../components/RememberMe'

import { 
  PageWrapper,
  Container,
} from './styles'

import './styles.css'

function LoginPage() {  
  const [ name, setName ] = useState('')
  const [ password, setPassword ] = useState('')


  return (    
    <PageWrapper>
      <Container>
        <LogoAside />
        <FormAside 
          label="Fazer Login"          
        >          
          <Input 
            label="E-mail"            
            name="email"
            type="email"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            first                       
          />
          <Input 
            label="Senha"
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            password
            last
          />
          <RememberMe />
          {/* <FormButton /> */}
        </FormAside>

          {/* <SignUp />  */}
      </Container>
    </PageWrapper>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // <div id="login-page">
    //   <div className="login-page-content">
    //     <div className="logo-container">
    //       <div>
    //         <img src={logo} alt=""/>
    //         <h1>Sua plataforma de estudos online.</h1>
    //       </div>
    //     </div>
    //     <div className="form-container">
    //       <form>
    //         <legend>
    //           <h2>Fazer login</h2>
    //           <Link to="/">Criar uma conta</Link>
    //         </legend>
    //         <fieldset>
    //           <div>
    //             <input type="text" name="email" className="first-input"/>
    //             <label htmlFor="email">E-mail</label>
    //           </div>
    //           <div>
    //             <input type="password" name="password" className="last-input"/>
    //             <label htmlFor="password">Senha</label>
    //             <img src={showPassword} alt="Show password"/>
    //           </div>
    //         </fieldset>
            // <div className="save-password">
            //   <div className="checkbox">
            //     <input type="checkbox" name="remember" />
            //     <span></span>
            //   </div>              
            //   <label>Lembrar-me</label>
            //   <Link to="/">Esqueci minha senha</Link>
            // </div>
    //         <button type="submit" className="button-disabled">Entrar</button>
    //       </form>
    //       <div className="signup">
    //         <span className="signup-action">Não tem conta? <Link to="/">Cadastre-se</Link></span>
    //         <span className="itsfree">É de graça <img src={heart} alt=""/></span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}


export default LoginPage
