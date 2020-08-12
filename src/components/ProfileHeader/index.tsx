import React from 'react'
import { Link } from 'react-router-dom'

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
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ avatar, username }) => {
  return (
    <Wrapper>
    <Link to="/">
        <Avatar src={avatar} />
        <Username>{username}</Username>
    </Link>
    <SignOutButton>
        <img src={power} alt="Sign-out"/>
    </SignOutButton>
</Wrapper>
  );
}

export default ProfileHeader;