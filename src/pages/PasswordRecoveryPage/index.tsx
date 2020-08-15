import React, { useState } from 'react'

import LogoAside from '../../components/LogoAside'
import FormAside from '../../components/FormAside'
import Input from '../../components/Input'
import FormButton from '../../components/FormButton'

import { PageWrapper } from './styles'

function PasswordRecoveryPage() {  
  const [ email, setEmail ] = useState('')

  return (    
    <PageWrapper>
        <LogoAside />        
        <FormAside 
          label="Eita, esqueceu sua senha?"            
          description="Não esquenta, vamos dar um jeito nisso."
        >          
          <Input 
            label="E-mail"            
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            only                        
          />        
          <FormButton disabled type="submit">Enviar</FormButton>          
        </FormAside> 
    </PageWrapper>
  )
}


export default PasswordRecoveryPage
