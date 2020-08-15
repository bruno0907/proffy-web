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

  const hasValue = Boolean(password.length <= 0)

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
          autoComplete={'off'}
          onChange={(event) => setName(event.target.value)}
          required
          first                       
        />
        <Input 
          label="Senha"
          name="password"
          type="password"
          autoComplete={'off'}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          password
          last
        />
        <RememberMe />          
        <FormButton 
          disabled={hasValue} 
          type="submit"
          onClick={() => {console.log('Entrou')}}
        >Enviar</FormButton>      
      </FormAside> 
    </PageWrapper>
  )
}


export default LoginPage
