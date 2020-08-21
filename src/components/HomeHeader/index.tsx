import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import power from '../../assets/images/icons/power.svg'

import { 
  Wrapper,
  Avatar,
  Username,
  SignOutButton
} from './styles'

interface ProfileHeaderProps{
  avatar: string;
  username: string;
  id?: number;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ avatar, username, id }) => {
  const history = useHistory()

  function handleLogout(){
    localStorage.clear()    
    return history.push('/login')
  }

  return (
    <Wrapper>
    <Link to={`/user/profile?=${id}`}>
        <Avatar src={avatar} />
        <Username>{username}</Username>
    </Link>
    <SignOutButton>
        <img src={power} alt="Sign-out" onClick={handleLogout}/>
    </SignOutButton>
</Wrapper>
  );
}

export default ProfileHeader;