import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useAuth } from '../../contexts/auth'

import power from '../../assets/images/icons/power.svg'
import avatarPlaceholder from '../../assets/images/icons/user.svg'

import { 
  Wrapper,
  Avatar,
  Username,
  SignOutButton
} from './styles'

import { UserProps } from '../../services/auth';

const HomeHeader: React.FC = () => {
  const history = useHistory()
  const { signed, signOut, user } = useAuth()

  const [ avatar, setAvatar] = useState<UserProps | null>(null)
  const [ name, setName ] = useState('')  
  
  useState(() => {
    if(signed){
      
      setAvatar(user?.avatar!)
      setName(user?.name!)   
    }
  })

  function handleSignOut(){
    signOut()
    return history.push('/sign-in')
  }

  return (
    <Wrapper>
    <Link to={`/user/profile`}>
        <Avatar src={ avatar ? `http://localhost:3333/img/${avatar}` : avatarPlaceholder } />
        <Username>{name}</Username>
    </Link>
    <SignOutButton onClick={handleSignOut}>
        <img src={power} alt="Sign-out" />
    </SignOutButton>
</Wrapper>
  );
}

export default HomeHeader;