import React, { useState, FormEvent } from 'react'

import { useHistory } from 'react-router-dom'

import LogoAside from '../../components/LogoAside'

import FormAside from '../../components/FormAside'

import Form from '../../components/Form'
import LoginInput from '../../components/LoginInput'

import FormBackButton from '../../components/FormBackButton'

import FormButton from '../../components/FormButton'

import api from '../../services/api'

import { 
  PageWrapper, FormWrapper 
} from './styles'

function PasswordRecoveryPage() {  
  const history = useHistory()
  const [ email, setEmail ] = useState('')  
  const [ loading, /*setLoading */] = useState(false)

  const emailRegex = (/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/)
  const hasValue = Boolean( email.match(emailRegex) )

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()    
    
    api.post('proffy/password-recovery', {email}).then( () => {      
      
      history.push('/success', {            
        title: 'Redefinição enviada!',
        description: 'Boa, agora é só checar o e-mail que foi enviado para você, Seguir as orientações e voltar aos estudos.' ,
        buttonText: 'Entrar',
        link: '/sign-in',
      })

    }).catch( (err) => {
        console.log(err)
        alert('Email não encontrado.')
      })
    
  }

  return (    
    <PageWrapper>      
      <LogoAside />

      <FormAside>
        <FormBackButton />          
        <FormWrapper>
          <Form label="Eita! Esqueceu sua senha?" description="Não esquenta, vamos dar um jeito nisso." onSubmit={handleForm}>
            <LoginInput 
              label="E-mail"            
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete={'off'}
              required
              only                        
            />   
            <FormButton 
              disabled={!hasValue} 
              type="submit"
              style={{ marginTop: '4rem' }}
            >{ loading ? loading : 'Enviar'}</FormButton>      
          </Form>
        </FormWrapper>        
      </FormAside>
    </PageWrapper>
  )
}


export default PasswordRecoveryPage