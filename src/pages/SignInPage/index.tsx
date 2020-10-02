import React, { useState, useEffect, FormEvent } from 'react'

import { useHistory } from 'react-router-dom'

import LogoAside from '../../components/LogoAside'

import FormAside from '../../components/FormAside'

import Form from '../../components/Form'
import LoginInput from '../../components/LoginInput'

import SignUp from '../../components/SignUp'

import RememberMe from '../../components/RememberMe'
import FormButton from '../../components/FormButton'

import { 
  PageWrapper, FormWrapper 
} from './styles'

import { useAuth } from '../../contexts/auth'

function SignInPage() {  
  const history = useHistory()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ rememberMe, setRememberMe ] = useState(false)
  const [ loading, /*setLoading*/ ] = useState(false)  

  const { signIn } = useAuth()

  const handleChecked = () => setRememberMe(!rememberMe)

  const emailRegex = (/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/)    
  const hasValue = !Boolean( password.length > 0 && email.match(emailRegex))    
  
  useEffect(() => {
    const remember = localStorage.getItem('@ProffyAuth:remember')   
    remember === 'true' && history.push('/')  
  })

  async function handleSignIn(event: FormEvent){
    event.preventDefault()

      await signIn(
        email,
        password,
        rememberMe
      ).then(() => history.push('/'))
        .catch(
          (error) => {            
            if(error.message === 'Network Error'){
              history.push('/')
              return alert('Serviço temporariamente indisponível.')              
            }
            if(error.message === 'Request failed with status code 400'){ 
              
              return alert('Usuário ou senha incorretos')
            }

            history.push('/')
          }
        )

    
      // const status = await signIn( email, password, rememberMe )     
      // status ? history.push('/') : alert('Ocorreu um erro')
      
    

  }
  
  return (    
    <PageWrapper>      
      <LogoAside />
      <FormAside>       
        <FormWrapper>
          <Form 
            label="Faça seu login" 
            register
            onSubmit={handleSignIn}
          >
            <LoginInput 
              label="E-mail"            
              name="email"
              type="email"
              value={email}
              autoComplete={'off'}
              onChange={event => setEmail(event.target.value)}
              required
              first            
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
              last
            />
            <RememberMe checked={rememberMe} onChange={handleChecked} onClick={handleChecked} />  
            <FormButton disabled={hasValue} type="submit">{ loading ? loading : 'Entrar'}</FormButton>      
          </Form>
        </FormWrapper>
        <SignUp />        
      </FormAside>
    </PageWrapper>
  )
}

export default SignInPage
