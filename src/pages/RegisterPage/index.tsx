import React, { useState } from 'react'

import LogoAside from '../../components/LogoAside'
import FormAside from '../../components/FormAside'
import Input from '../../components/Input'
import FormButton from '../../components/FormButton'

import { PageWrapper } from './styles'

function RegisterPage() {  
  const [ name, setName ] = useState('')
  const [ surname, setSurname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordCheck, setPasswordCheck ] = useState('')  
  
  const hasValue = Boolean(passwordCheck.length <= 0)

  return (    
    <PageWrapper>              
      <FormAside 
        label="Cadastro"            
        description="Preencha os dados abaixo para começar."
        goBack        
      >          
        <Input 
          label="Nome"            
          name="nome"
          autoComplete={'off'}
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          first                       
        />
        <Input 
          label="Sobrenome"            
          name="surname"
          autoComplete={'off'}            
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
          required                     
        />
        <Input 
          label="E-mail"            
          name="email"
          type="email"
          autoComplete={'off'}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required          
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
        />        
        <Input 
          label="Repita sua senha"
          name="password_check"
          type="password"
          autoComplete={'off'}
          value={passwordCheck}
          onChange={(event) => setPasswordCheck(event.target.value)}
          required
          password
          last
        />        

        <FormButton 
        type="submit" 
        disabled={hasValue} 
        onClick={() => { console.log('Enviou') }}
        >Enviar</FormButton>        

      </FormAside>
      <LogoAside />
    </PageWrapper>
  )
}


export default RegisterPage
