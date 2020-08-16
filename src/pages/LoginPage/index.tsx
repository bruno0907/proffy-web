import React, { useState, FormEvent } from 'react'

import { useHistory } from 'react-router-dom'

import LogoAside from '../../components/LogoAside'

import FormAside from '../../components/FormAside'

import Form from '../../components/Form'
import Input from '../../components/Input'

import SignUp from '../../components/SignUp'

import RememberMe from '../../components/RememberMe'
import FormButton from '../../components/FormButton'

import { 
  PageWrapper, FormWrapper 
} from './styles'

function LoginPage() {  
  const history = useHistory()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ rememberMe, setRememberMe ] = useState(false)
  const [ loading, setLoading ] = useState(false)  

  useState(() => {
    const data = localStorage.getItem('@proffy')
    
    if(data){
      const { email, password } = JSON.parse(data)
      setEmail(email)
      setPassword(password)
      setRememberMe(!rememberMe)
    }
    return {}
  })
  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(rememberMe){
      localStorage.setItem('@proffy', JSON.stringify({        
        email,
        password
      }))      
    }
    history.push('/')
    
  }


  const handleChecked = () => setRememberMe(!rememberMe)

  const hasValue = Boolean(password.length <= 0)

  return (    
    <PageWrapper>      
      <LogoAside />

      <FormAside>
       
        <FormWrapper>
          <Form label="Faça seu login" onSubmit={handleForm}>
            <Input 
            label="E-mail"            
            name="email"
            type="email"
            value={email}
            autoComplete={'off'}
            onChange={(event) => setEmail(event.target.value)}
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
            <RememberMe checked={rememberMe} onChange={handleChecked} onClick={handleChecked} />    

            <FormButton disabled={hasValue} type="submit">{ loading ? loading : 'Entrar'}</FormButton>      
          </Form>
        </FormWrapper>
        <SignUp />        
      </FormAside>
    </PageWrapper>
  )
}


export default LoginPage



// <LogoAside />
//       <FormAside 
//         label="Fazer Login"
//         register 
//         signUp         
//       >          
        // <Input 
        //   label="E-mail"            
        //   name="email"
        //   type="email"
        //   value={name}
        //   autoComplete={'off'}
        //   onChange={(event) => setName(event.target.value)}
        //   required
        //   first                       
        // />
        // <Input 
        //   label="Senha"
        //   name="password"
        //   type="password"
        //   autoComplete={'off'}
        //   value={password}
        //   onChange={(event) => setPassword(event.target.value)}
        //   required
        //   password
        //   last
        // />
        // <RememberMe />          
        // <FormButton 
        //   disabled={hasValue} 
        //   type="submit"
        //   onClick={() => {console.log('Entrou')}}
        // >Enviar</FormButton>      
//       </FormAside> 