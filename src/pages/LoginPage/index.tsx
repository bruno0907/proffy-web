import React, { useState } from 'react'

import LogoAside from '../../components/LogoAside'
import FormAside from '../../components/FormAside'
import Input from '../../components/Input'
import RememberMe from '../../components/RememberMe'
import FormButton from '../../components/FormButton'

import { 
  PageWrapper,  
} from './styles'

function LoginPage() {  
  const [ name, setName ] = useState('')
  const [ password, setPassword ] = useState('')


  return (    
    <PageWrapper>      
      <LogoAside />
      <FormAside 
        label="Fazer Login"
        register 
        signUp         
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
        <FormButton primary type="submit">Enviar</FormButton>      
      </FormAside> 
    </PageWrapper>
  )
}


export default LoginPage
