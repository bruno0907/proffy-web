import React, { useState, FormEvent } from 'react'

import { useHistory } from 'react-router-dom'

import LogoAside from '../../components/LogoAside'
import FormAside from '../../components/FormAside'

import Form from '../../components/Form'
import LoginInput from '../../components/LoginInput'
import FormButton from '../../components/FormButton'

import FormBackButton from '../../components/FormBackButton'

import { PageWrapper, FormWrapper } from './styles'

import api from '../../services/api'

function SignUpPage() {  
  const history = useHistory()

  const [ name, setName ] = useState('')
  const [ surname, setSurname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordConfirm, setPasswordConfirm ] = useState('') 
    
  const emailRegex = (/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/)    
  const hasValue = !Boolean( password.length > 0 && passwordConfirm.length > 0 && email.match(emailRegex))    

  async function handleForm(event: FormEvent<HTMLFormElement>){
    event.preventDefault()      

    if( password !== passwordConfirm ){
      alert('As senhas não conferem champs!!!! Acerta aí mongolóide!')
      return

    } else {
      await api.post('proffy/sign-up',{
        name,
        surname,
        email,
        password,
        'password_confirm': passwordConfirm
      }).then(() => {              
          history.push('/success', {
            title: 'Cadastro concluído',
            description: 'Agora você faz parte da plataforma Proffy. Tenha uma ótima experiência.',
            buttonText: 'Entrar',
            link: '/sign-in'
          })
  
      }).catch(() => {
        alert('Houve um erro no seu cadastro!')
      })      
    } 
  }  

  return (    
    <PageWrapper>      
      <FormAside>
          <FormBackButton />
        <FormWrapper>
          <Form 
            label="Cadastro" 
            description="Preencha os dados abaixo para começar" 
            onSubmit={handleForm}
          >            
            <LoginInput 
              label="Nome"            
              name="name"
              autoComplete={'off'}
              value={name}
              onChange={event => setName(event.target.value)}
              required
              first                       
            />
            <LoginInput 
              label="Sobrenome"            
              name="surname"
              autoComplete={'off'}            
              value={surname}
              onChange={event => setSurname(event.target.value)}
              required                     
            />
            <LoginInput 
              label="E-mail"            
              name="email"
              type="email"
              autoComplete={'off'}
              value={email}
              onChange={event => setEmail(event.target.value)}
              required          
            />
            <LoginInput 
              label="Senha"
              name="password"
              type="password"
              autoComplete={'off'}
              value={password}
              onChange={event => setPassword(event.target.value)}
              required
              password          
            />        
            <LoginInput 
              label="Repita sua senha"
              name="password_confirm"
              type="password"
              autoComplete={'off'}
              value={passwordConfirm}
              onChange={event => setPasswordConfirm(event.target.value)}              
              required
              password
              last
            />     
            <FormButton 
              type="submit" 
              style={{ marginTop: '4rem' }} 
              disabled={hasValue}
            >Concluir cadastro</FormButton>
          </Form>
        </FormWrapper>
      </FormAside>
      <LogoAside />
    </PageWrapper>
  )
}
export default SignUpPage
