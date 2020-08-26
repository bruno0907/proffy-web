import React, { createContext, useState, useCallback } from 'react'

import api from '../services/api'

interface UserProps {
  id: string;
  name: string;
  avatar: string;
  email: string;
  bio: string;
  whatsapp: string;
}

interface SignedResult {
  status: boolean;
}

interface ResponseSignInUser {
  user: UserProps;
  token: string;
  rememberMe: boolean | null;
}

interface AuthContextData {
  signed: boolean;
  user: UserProps;
  signIn(
    email: string,
    password: string,
    remember: boolean,
  ): Promise<SignedResult>;
  signOut(): void;
  updateUser(user: UserProps): void;
  remember: boolean;
}

const AuthContext = createContext<AuthContextData>( {} as AuthContextData )

export const AuthProvider: React.FC = ({ children }) => {
  const [ user, setUser ] = useState<UserProps>( {} as UserProps )
  const [ signed, setSigned ] = useState(false);

  const [ data, setData ] = useState<ResponseSignInUser>(() => {
    const storagedUser = localStorage.getItem('@AuthProffy:user')
    const storagedToken = localStorage.getItem('@AuthProffy:token')
    const remember = (localStorage.getItem('@AuthProffy:remember')) ? true : false

    if(storagedUser && storagedToken){
      return {
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

    console.log(email, password, rememberMe)

    // const response = await api.post<ResponseSignInUser>('proffy/sign-in', {
    //   email,
    //   password
    // })

    // if(response.data.user){
    //   const { user, token } = response.data

    //   localStorage.setItem('@AuthProffy:user', JSON.stringify(user))
    //   localStorage.setItem('@AuthProffy:token', token)

    //   rememberMe 
    //     ? localStorage.setItem('@AuthProffy:remember', 'true')
    //     : localStorage.setItem('@AuthProffy:remember', 'false')
        
    //   setUser(user)
    //   setSigned(true)
    //   setData({user, token, rememberMe})    
      
      return {status: true }

    // } else {
    //   setSigned(false)
    //   setUser({} as UserProps)
    //   setData({} as ResponseSignInUser)

      // return {status: false}
    // }    
  }


  async function signOut() {
    localStorage.removeItem('@AuthProffy:user')
    localStorage.removeItem('@AuthProffy:token')
    
    setUser({} as UserProps)
    setSigned(false)
    localStorage.setItem('@AutoProffy:user', JSON.stringify(user))
    setData({} as ResponseSignInUser)

    return {signed: false}
  }

  const updateUser = useCallback((user: UserProps) => {
    localStorage.setItem('@AuthProffy:user', JSON.stringify(user))

    setData({
      token: data.token,
      user,
      rememberMe: data.rememberMe
    })
  }, [data.rememberMe, data.token])  

  return (
    // <AuthContext.Provider value={
    //   {
    //     signed: !!data.user,
    //     user: data.user,
    //     signIn,
    //     signOut,
    //     updateUser,
    //     remember: !!data.rememberMe
    //   }
    // }>
    //   {children}
    // </AuthContext.Provider> 

    <AuthContext.Provider value={{ 
      signed: !!data.user, 
      user: data.user,       
      signIn, 
      signOut,
      updateUser,
      remember: !!data.rememberMe,
  }}>
      {children}
  </AuthContext.Provider>
  )
}

export default AuthContext