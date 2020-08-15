import React, { useState } from 'react'

import LogoAside from '../../components/LogoAside'
import FormAside from '../../components/FormAside'
import Input from '../../components/Input'
import RememberMe from '../../components/RememberMe'
import FormButton from '../../components/FormButton'
import SignUp from '../../components/SignUp'

import {  PageWrapper } from './styles'

function RegisterPage() {  
  const [ name, setName ] = useState('')
  const [ surname, setSurname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')


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
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          first                       
        />
        <Input 
          label="Sobrenome"            
          name="surname"            
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
          required                     
        />
        <Input 
          label="E-mail"            
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
        <FormButton primary type="submit">Enviar</FormButton>        
      </FormAside>
      <LogoAside />
    </PageWrapper>
  )
}


export default RegisterPage
