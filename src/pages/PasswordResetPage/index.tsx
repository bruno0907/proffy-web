import React, { useState, FormEvent, useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import LogoAside from '../../components/LogoAside'
import FormAside from '../../components/FormAside'
import Form from '../../components/Form'
import LoginInput from '../../components/LoginInput'
import FormButton from '../../components/FormButton'
import FormBackButton from '../../components/FormBackButton'

import { PageWrapper, FormWrapper } from './styles'

import { useAuth } from '../../contexts/auth'

import api from '../../services/api'

function ResetPasswordPage() {  
  const history = useHistory()

  const { user, signOut } = useAuth()
  
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordConfirm, setPasswordConfirm ] = useState('') 
    
  const emailRegex = (/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/)    
  const hasValue = !Boolean( password.length > 0 && passwordConfirm.length > 0 && email.match(emailRegex))  
  
  useEffect(() => {
    setEmail(user?.email!)
  }, [user])

  async function handleForm(event: FormEvent<HTMLFormElement>){
    event.preventDefault()      

      if( password !== passwordConfirm ){
        alert('As senhas não conferem champs!!!! Acerta aí mongolóide!')
        return

      } else {
        await api.patch('proffy/password-reset',{          
          email,
          password,
          'password_confirm': passwordConfirm
        }).then(() => {   
            signOut()
            history.push('/success', {
              title: 'Senha Alterada com Sucesso!',
              description: 'Faça seu Login Novamente e retorna à plataforma',
              buttonText: 'Entrar',
              link: '/sign-in'
            })
    
        }).catch((e) => {
            alert('Houve um erro ao alterar sua senha!')
            console.log('Erro: ', e)    
        })      
      } 
  }
  

  return (    
    <PageWrapper>
      <LogoAside />
      <FormAside>
          <FormBackButton />
        <FormWrapper>
          <Form 
            label="Nova senha" 
            description="Preencha os campos abaixo" 
            onSubmit={handleForm}
          > 
            <LoginInput 
              label="E-mail"            
              name="email"
              type="email"
              disabled
              autoComplete={'off'}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required      
              first    
            />
            <LoginInput 
              label="Nova senha"
              name="password"
              type="password"
              autoComplete={'off'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              password          
            />        
            <LoginInput 
              label="Repita sua nova senha"
              name="password_confirm"
              type="password"
              autoComplete={'off'}
              value={passwordConfirm}
              onChange={(event) => setPasswordConfirm(event.target.value)}              
              required
              password
              last
            />     
            <FormButton 
              type="submit" 
              style={{ marginTop: '4rem' }} 
              disabled={hasValue}
            >Alterar Senha</FormButton>
          </Form>
        </FormWrapper>
      </FormAside>
    </PageWrapper>
  )
}
export default ResetPasswordPage
