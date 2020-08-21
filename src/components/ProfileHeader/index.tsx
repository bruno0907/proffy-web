import React from 'react';

import { HeaderWrapper, Avatar, CameraIcon, Name, Subject } from './styles';

interface HeaderProps{
  name: string;
  avatar: string;
  subject: string;
}

const Header: React.FC<HeaderProps> = ({ avatar, name, subject }) => {
  return (
    <HeaderWrapper>
      <Avatar>
          <img src={avatar} alt={`${name}_${avatar}`}/>
          <div>
            <input type="file" />
            <CameraIcon />
          </div>
        </Avatar>
        <Name>{name}</Name>
      <Subject>{subject}</Subject>
    </HeaderWrapper>
    );
}

export default Header;