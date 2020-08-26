import React, { createContext, useState } from 'react'

import * as auth from '../services/auth'

interface AuthContextProps{
  signed: boolean;  
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider: React.FC = ({ children }) => {  
  const [ user, setUser ] = useState<object | null>(null)

  async function signIn() {
    const response = await auth.SignIn()    
    
    
    setUser(response.user)

    await localStorage.setItem('@AuthProffy:user', JSON.stringify(response.user))
    await localStorage.setItem('@AuthProffy:token', response.token)
  }

  async function signOut() {
    setUser(null)
    localStorage.removeItem('@AuthProffy:user')
    localStorage.removeItem('@AuthProffy:token')
  }




  return(
    <AuthContext.Provider value={{ signed: Boolean(user), user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
)}

export default AuthContext