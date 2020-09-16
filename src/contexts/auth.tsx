import React, { createContext, useState, useContext, useCallback } from 'react'

import api from '../services/api'

interface UserProps {
  id: string;
  avatar: null;
  name: string;
  surname: string;
  email: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: string;
}

interface AuthContextProps{  
  signed: boolean;  
  user: UserProps | null;
  signIn(
    email: string,
    password: string,
    remember: boolean,
  ): Promise<SignedResult>;
  signOut(): void;
  updateUser(user: UserProps): void;
  remember: boolean;
}

interface ResponseSignInUser {
  user: UserProps | null;
  token: string;
  rememberMe: boolean | null;
}

interface SignedResult {
  status: boolean;
}


const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider: React.FC = ({ children }) => {  
  const [ user, setUser ] = useState<UserProps | null>(null)
  const [ signed, setSigned ] = useState(false)

  const [ data, setData ] = useState(() => {
    const storagedUser = localStorage.getItem('@ProffyAuth:user')
    const storagedToken = localStorage.getItem('@ProffyAuth:token')
    const remember = (localStorage.getItem('@ProffyAuth:remember')) ? true : false

    if(storagedUser && storagedToken){        
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`                
      
      return{        
        user: JSON.parse(storagedUser),
        token: storagedToken,
        rememberMe: remember        
      }
    }

    return {} as ResponseSignInUser

  })

  async function signIn(
    email: string, password: string, rememberMe: boolean
  ): Promise<SignedResult>{   

    const response = await api.post<ResponseSignInUser>('proffy/sign-in', {
      email,
      password
    })

    if(response.data.user){
      const { token, user } = response.data    
      
      /* 
        Implementar um sistema de ExpireIn para o token visando não permitir 
        que a aplicação persista dados no localStorage por determinado tempo se a opção de rememberMe não for marcada
        pelo usuário.
      */
     
      localStorage.setItem('@ProffyAuth:token', token)
      api.defaults.headers.Authorization = `Bearer ${token}`
      localStorage.setItem('@ProffyAuth:user', JSON.stringify(user))

      setUser(user)
      setSigned(true)   
      setData({
        user, token, rememberMe
      })

      rememberMe ?         
        localStorage.setItem('@ProffyAuth:remember', 'true')        
      :
        localStorage.setItem('@ProffyAuth:remember', 'false')      

      return { 
        status: true 
      }    

    } else {
      setSigned(false)
      setUser({} as UserProps)  
      setData({} as ResponseSignInUser)    

      return {
        status: false        
      }
    }
    
  }

  async function signOut() {
    setUser({} as UserProps)
    setSigned(false)
    setData({} as ResponseSignInUser)
    localStorage.removeItem('@ProffyAuth:user')
    localStorage.removeItem('@ProffyAuth:token')
    localStorage.removeItem('@ProffyAuth:remember')
  }

  const updateUser = useCallback((user: UserProps) => {
    localStorage.setItem('@ProffyAuth:user', JSON.stringify(user))

    setData({
      token: data.token,
      user,
      rememberMe: data.rememberMe
    })
  }, [data.rememberMe, data.token])

  return(
    <AuthContext.Provider value={{ 

      signed: !!data.user, 
      user: data.user, 
      signIn, 
      signOut,        
      updateUser,
      remember: !!data.rememberMe
    }}>{children}</AuthContext.Provider>
)}

export function useAuth(){
  const context = useContext(AuthContext)

  return context
}