import React from 'react';

import NavBar from '../../components/NavBar'

import { 
  TeacherProfilePageWrapper,   
  Header, 
  Avatar, 
  Teacher,
  Subject, 
  CameraIcon,
  TeacherProfile } from './styles';

const TeacherProfilePage: React.FC = () => {
  return (
    <TeacherProfilePageWrapper>
      <NavBar>
        <img src="" alt=""/>
        <span></span>
        <img src="" alt=""/>
      </NavBar>
      <Header>
        <Avatar>
          <img src="https://avatars3.githubusercontent.com/u/54812906?s=460&u=230c6ae207fa7fd5735456ef3011c8771549c8cb&v=4" alt=""/>
          <div>
            <input type="file" />
            <CameraIcon />
          </div>
        </Avatar>
        <Teacher>Bruno Mariani</Teacher>
        <Subject>Inglês</Subject>
      </Header>
      <TeacherProfile />
    </TeacherProfilePageWrapper>
  );
}

export default TeacherProfilePage;