import React, { useState, FormEvent } from 'react'

import { useHistory } from 'react-router-dom'

import LogoAside from '../../components/LogoAside'
import FormAside from '../../components/FormAside'

import Form from '../../components/Form'
import Input from '../../components/Input'
import FormButton from '../../components/FormButton'

import FormBackButton from '../../components/FormBackButton'

import { PageWrapper, FormWrapper } from './styles'

function RegisterPage() {  
  const history = useHistory()

  const [ name, setName ] = useState('')
  const [ surname, setSurname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordCheck, setPasswordCheck ] = useState('') 
  
  // const hasValue = Boolean(passwordCheck.length <= 0)
  const emailRegex = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  const hasValue = !Boolean( email.match(emailRegex) )

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()      

      if( password !== passwordCheck ){
        alert('As senhas não conferem champs!!!! Acerta aí mongolóide!')
        return
      }

      history.push('/login')
  }
  

  return (    
    <PageWrapper>
      <LogoAside />
      <FormAside>
          <FormBackButton />
        <FormWrapper>
          <Form 
            label="Cadastro" 
            description="Preencha os dados abaixo para começar" 
            onSubmit={handleForm}
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

            <FormButton type="submit" disabled={hasValue}>Concluir cadastro</FormButton>  

          </Form>
        </FormWrapper>
      </FormAside>




      {/* <FormAside 
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
      <LogoAside /> */}
    </PageWrapper>
  )
}


export default RegisterPage
