import api from  '../services/api'

export interface UserProps{
  token: string;
  user: {
    id: string;
    name: string;
    surname: string;    
    email: string;
    password: string;    
    avatar: string;
    whatsapp: string;
    bio: string;
    subject: string;
    cost: string;
  }
}

export function signIn( email: string, password: string ): Promise<UserProps>{

  return new Promise(() => {
    api.post('/proffy/sign-in', {
      email,
      password
    })  
  })
}

