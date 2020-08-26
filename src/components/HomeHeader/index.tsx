import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import AuthContext from '../../contexts/auth'

import power from '../../assets/images/icons/power.svg'
import avatarPlaceholder from '../../assets/images/icons/user.svg'

import { 
  Wrapper,
  Avatar,
  Username,
  SignOutButton
} from './styles'

const HomeHeader: React.FC = () => {
  const history = useHistory()
  const { signOut } = useContext(AuthContext)

  const [ avatar, setAvatar ] = useState(avatarPlaceholder)
  const [ name, setName ] = useState('')
  const [ id, setId ] = useState('')

  useEffect(() => {
    async function loadStoragedUserData(){
      const storagedUser = localStorage.getItem('@AuthProffy:user')  

      if(storagedUser){
        const userData = JSON.parse(storagedUser)

        setId(userData.id)
        setName(userData.name)  
        setAvatar(userData.avatar)
      }  
    }

    loadStoragedUserData()
  },[])

  function handleSignOut(){
    signOut()
    return history.push('/sign-in')
  }

  return (
    <Wrapper>
    <Link to={`/user/profile?=${id}`}>
        <Avatar src={avatar} />
        <Username>{name}</Username>
    </Link>
    <SignOutButton onClick={handleSignOut}>
        <img src={power} alt="Sign-out" />
    </SignOutButton>
</Wrapper>
  );
}

export default HomeHeader;