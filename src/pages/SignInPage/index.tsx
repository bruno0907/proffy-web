import React, { useState, FormEvent, useContext } from 'react'

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

import AuthContext from '../../contexts/auth'


function SignInPage() {  
  const history = useHistory()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ rememberMe, setRememberMe ] = useState(false)
  const [ loading, /*setLoading*/ ] = useState(false)  

  const { signed, user, signIn } = useContext(AuthContext)  

  const handleChecked = () => setRememberMe(!rememberMe)
  const hasValue = Boolean(password.length <= 0)
  
  console.log({signed, user})

  async function handleSignIn(event: FormEvent){
    event.preventDefault()

    await signIn()  
    history.push('/')  
  }

  // useEffect(() => {
  //   remember && history.push('/')
  // })
  
  // const handleSignIn = useCallback((event: FormEvent) => {
  //   event.preventDefault()
    
  //     signIn(email, password, rememberMe)
  //       .then(response => {
  //         response.status ? history.push('/') : alert('Usuário ou senha incorretos')
  //       })
  //       .catch(error => {
  //         console.log('Error: ', error)
  //         alert('Houve um erro na sua solicitação.')
  //       })

  // }, [])

  

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
            onChange={(event) => setEmail(event.target.value)}
            required
            first                       
            />
            <LoginInput 
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

export default SignInPage
