interface SignInResponseProps{
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  }
}

export function SignIn(): Promise<SignInResponseProps>{
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'l1k3j2lk13j1l2k3j12lk3j1kl',
        user:{
          id: '1',
          name: 'Bruno',
          email: 'bruno0907@gmail.com',
          avatar: 'https://avatars3.githubusercontent.com/u/54812906?s=460&u=230c6ae207fa7fd5735456ef3011c8771549c8cb&v=4'
        },
      })
    }, 2000)
  })
}