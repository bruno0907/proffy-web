import React, { useState } from 'react';

import warningIcon from '../../assets/images/icons/warning.svg'

import NavBar from '../../components/NavBar'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import FormButton from '../../components/FormButton';

import { 
  TeacherProfilePageWrapper,   
  Header, 
  Avatar, 
  Teacher,
  Subject, 
  CameraIcon,
  TeacherProfile,
  Container,
  Form,
  SectionTitle,
  AddClass,
  Divider,
  InputRow,
  AvailabilityList,
  Footer,
  Warning,
 } from './styles';

const TeacherProfilePage: React.FC = () => {  

  const teste = [
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
    {value: '5'},
  ]  
    
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
      <TeacherProfile>
        <Form onSubmit={() => {}}>
          <Container>
            <SectionTitle>Seus dados</SectionTitle>
            <Divider />         
            <InputRow>
              <Input
                label="Nome"
                name="name"          
                only
              />
              <Input
                label="Sobrenome"
                name="surname"          
                only
              />
            </InputRow>
            <InputRow>
              <Input
                type="email"
                label="Email"
                name="email"          
                only                
              />
              <Input
                type="text"
                label="Whatsapp"
                name="whatsapp"                      
                only                 
                style={{width: '40rem'}}     
              />
            </InputRow>
            <InputRow>
              <Textarea                  
                label="Biografia"
                subLabel="(Máximo 300 caracteres)"            
                name="bio"
              /> 
            </InputRow>
            <SectionTitle>Sobre a aula</SectionTitle>
            <Divider />
            <InputRow>
              <Input 
                type="datalist"
                label="Matéria"
                name="subject"                
                only
              />
              <Input
                type="text"
                label="Custo da hora/aula"
                name="cost"          
                style={{width: '40rem'}}     
                only                    
              />
            </InputRow>
            <SectionTitle>Horários disponíveis <AddClass>+ Novo horário</AddClass></SectionTitle>
            <Divider />
            <AvailabilityList>
              <Input
                type="email"
                label="Email"
                name="email"          
                only                
              />
              <Input
                type="text"
                label="Whatsapp"
                name="whatsapp"                          
                only                      
              />
            </AvailabilityList>
          </Container>
          <Footer>
            <Warning>
              <img src={warningIcon} alt="Atenção"/>
              <div>
                <p>Importante!</p>
                <span>Preencha todos os dados corretamente.</span>
              </div>
            </Warning>
            <FormButton disabled>Salvar cadastro</FormButton>
          </Footer>
        </Form>
      </TeacherProfile>
    </TeacherProfilePageWrapper>
  );
}

export default TeacherProfilePage;