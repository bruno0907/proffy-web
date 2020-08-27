import React, { createContext, useState, useEffect } from 'react'

import api from '../services/api'

interface UserProps {
  id: string;
  name: string;
  avatar: string;
  email: string;
  bio: string;
  whatsapp: string;
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

  useEffect(() => {
    function loadStoragedData() {
      const storagedUser = localStorage.getItem('@ProffyAuth:user')
      const storagedToken = localStorage.getItem('@ProffyAuth:token')
      const remember = (localStorage.getItem('@AuthProffy:remember')) ? true : false

      if(storagedUser && storagedToken){        
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`          
        setUser(JSON.parse(storagedUser))
        
        return{
          rememberMe: remember        
        }
      }
    }

    loadStoragedData()
  }, [])

  async function signIn(
    email: string, password: string, rememberMe: boolean
  ): Promise<SignedResult>{   

    const response = await api.post<ResponseSignInUser>('proffy/sign-in', {
      email,
      password
    })

    if(response.data.user){
      const { user, token } = response.data    
  
      setUser(user)
      setSigned(true)
      

      localStorage.setItem('@ProffyAuth:user', JSON.stringify(user))
      localStorage.setItem('@ProffyAuth:token', token)

      if(rememberMe){
        localStorage.setItem('@ProffyAuth:remember', 'true')
        localStorage.setItem('@ProffyAuth:email', JSON.stringify(email))
        localStorage.setItem('@ProffyAuth:password', JSON.stringify(password))
      } else {
        localStorage.setItem('@ProffyAuth:remember', 'false')
      }      
  
      return { status: true }    

    } else {
      setSigned(false)
      setUser({} as UserProps)      

      return {status: false}
    }
    
  }

  async function signOut() {
    setUser(null)
    localStorage.removeItem('@ProffyAuth:user')
    localStorage.removeItem('@ProffyAuth:token')
    localStorage.removeItem('@ProffyAuth:remember')
  }




  return(
    <AuthContext.Provider value={{ 

      signed: Boolean(user), 
      user, 
      signIn, 
      signOut,        

    }}>{children}</AuthContext.Provider>
)}

export default AuthContext