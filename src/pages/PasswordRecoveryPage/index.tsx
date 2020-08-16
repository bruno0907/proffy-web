import React, { useState, FormEvent } from 'react'

import LogoAside from '../../components/LogoAside'

import FormAside from '../../components/FormAside'

import Form from '../../components/Form'
import Input from '../../components/Input'

import FormBackButton from '../../components/FormBackButton'

import FormButton from '../../components/FormButton'

import { 
  PageWrapper, FormWrapper 
} from './styles'

function PasswordRecoveryPage() {  
  const [ email, setEmail ] = useState('')  
  const [ loading, setLoading ] = useState(false)

  const hasValue = Boolean( email.length <= 0)

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('Email:', email)
  }

  return (    
    <PageWrapper>      
      <LogoAside />

      <FormAside>
        <FormBackButton />          
        <FormWrapper>
          <Form label="Eita! Esqueceu sua senha?" description="Não esquenta, vamos dar um jeito nisso." onSubmit={handleForm}>
            <Input 
              label="E-mail"            
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete={'off'}
              required
              only                        
            />   
            <FormButton disabled={hasValue} type="submit">{ loading ? loading : 'Enviar'}</FormButton>      
          </Form>
        </FormWrapper>        
      </FormAside>
    </PageWrapper>
  )
}


export default PasswordRecoveryPage