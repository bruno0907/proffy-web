import React, { useState, useEffect } from 'react';

import NavBar from '../../components/NavBar'

import FormSection from './components/FormSection'

import Input from './components/Input'
import TextArea from './components/Textarea'
import Select from './components/Select'
import Footer from './components/Footer'

import { 
  TeacherProfilePageWrapper,   
  Header, 
  Avatar, 
  Teacher,
  Subject, 
  CameraIcon,
  TeacherProfile,
  Form,
  FormContainer,
  InputRow,
  ScheduleList,
  ScheduleItem,
  ScheduleItemRemoveButton,
 } from './styles';

 import options from '../../utils/options'

const TeacherProfilePage: React.FC = () => {  
    
  const [ scheduleItems, setScheduleItems ] = useState([ { id: 0, week_day: 0, from: '', to: ''} ])  
  
  function addNewScheduleItem(){    
    let a = scheduleItems.length
    const nid = a++

    setScheduleItems([
        ...scheduleItems,
        { id: nid, week_day: 0, from: '', to: '' }
        
    ])        
  }

  function removeScheduleItem(id: number) {        
    setScheduleItems(
      scheduleItems.filter( item => item.id !== id) 
    )
  }

  // setScheduleItemValue(0, 'week_day', '2)
  function setScheduleItemValue(position: number, field: string, value: string){
      const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
          if(index === position) {
              return { ...scheduleItem, [field]: value}
          }
          return scheduleItem
      })      
      setScheduleItems(updatedScheduleItems)      

  }

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
        <Form onSubmit={() => console.log('aeHOOOOOOOOOoo caraio')}>
          <FormContainer>
            <FormSection title="Seus dados">
              <InputRow>
                <Input
                  label="Nome"
                  name="name"                            
                />
                <Input
                  label="Sobrenome"
                  name="surname"                            
                />
              </InputRow>
              <InputRow>
              <Input
                type="email"
                label="Email"
                name="email"                                          
              />
              <Input
                type="text"
                label="Whatsapp"
                name="whatsapp"                                                       
                style={{ width: '35rem'}}
              />
            </InputRow>
            <InputRow>
              <TextArea                  
                label="Biografia"
                subLabel="(Máximo 300 caracteres)"            
                name="bio"
              /> 
            </InputRow>
            </FormSection>
            <FormSection title="Sobre a aula">
              <InputRow>
                <Select                   
                  label="Matéria"
                  name="subject"    
                  options={options.subjects}                                                                                
                />              
                <Input
                  type="text"
                  label="Custo da hora/aula"
                  name="cost"          
                  style={{width: '30rem'}}                                           
                />
              </InputRow>
            </FormSection>
            <FormSection 
              title="Horários Disponíveis" 
              addSchedule 
              onClick={addNewScheduleItem}
            >
              <ScheduleList>
                { scheduleItems.map((scheduleItem, index) => {                
                  return (
                    <ScheduleItem key={scheduleItem.id}>                    
                      <InputRow>
                        <Select                                           
                          label="Dia da semana"
                          name="week_day"                                                          
                          value={scheduleItem.week_day}                         
                          onChange={event => setScheduleItemValue(index, 'week_day', event.target.value)}  
                          options={options.weekDay}                                           
                        />
                        <Input
                          type="time"                          
                          label="Das"
                          name="from"                                                                                                                                                                                                               
                          value={scheduleItem.from}                         
                          onChange={event => setScheduleItemValue(index, 'from', event.target.value)}                                         
                          style={{width: '16rem'}}                                       
                        />
                        <Input
                          type="time"                          
                          label="Até"
                          name="to"                                                                                                                             
                          value={scheduleItem.to}                         
                          onChange={event => setScheduleItemValue(index, 'to', event.target.value)}                                 
                          style={{width: '16rem'}}                                           
                        />                        
                        </InputRow>
                        <ScheduleItemRemoveButton 
                          onClick={() => 
                          removeScheduleItem(scheduleItem.id)}
                        >
                          Remover
                        </ScheduleItemRemoveButton>
                      </ScheduleItem>
                    )  
                  })}
              </ScheduleList>
            </FormSection>
          </FormContainer>
        <Footer />
        </Form>
      </TeacherProfile>
    </TeacherProfilePageWrapper>
  );
}

export default TeacherProfilePage;
