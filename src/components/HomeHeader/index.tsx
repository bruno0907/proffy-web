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

  useEffect(() => {
    function loadStoragedUserData(){
      const storagedUser = localStorage.getItem('@ProffyAuth:user')  

      if(storagedUser){
        const data = JSON.parse(storagedUser)
        
        setAvatar(data.avatar || avatarPlaceholder)
        setName(data.name)          
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
    <Link to={`/user/profile`}>
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