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
                style={{width: '40rem'}}     
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
                <Input 
                  type="datalist"
                  label="Matéria"
                  name="subject"                                  
                  list="subject_list"                                
                />              
                <Input
                  type="text"
                  label="Custo da hora/aula"
                  name="cost"          
                  style={{width: '40rem'}}                                           
                />
                <datalist id="subject_list">
                  <option key="0" value="Português"/>
                  <option key="1" value="Inglês"/>
                  <option key="2" value="Matemática"/>
                  <option key="3" value="Química"/>
                </datalist>
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
                          options={[                          
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda-feira" },
                            { value: "2", label: "Terça-feira" },
                            { value: "3", label: "Quarta-feira" },
                            { value: "4", label: "Quinta-feira" },
                            { value: "5", label: "Sexta-feira" },
                            { value: "6", label: "Sábado" },
                          ]}                      
                        />
                        <Input
                          type="time"
                          label="De"
                          name="from"                                                            
                          style={{ width: '20rem'}}       
                          value={scheduleItem.from}                         
                          onChange={event => setScheduleItemValue(index, 'from', event.target.value)}               
                        />
                        <Input
                          type="time"
                          label="Até"
                          name="to"                                                                          
                          style={{ width: '20rem'}} 
                          value={scheduleItem.to}                         
                          onChange={event => setScheduleItemValue(index, 'to', event.target.value)}       
                        />
                        <datalist id="week_day_list">
                          <option key="0" value="Domingo"/>
                          <option key="1" value="Segunda-feira"/>
                          <option key="2" value="Terça-feira"/>
                          <option key="3" value="Quarta-feira"/>
                          <option key="4" value="Quinta-feira"/>
                          <option key="5" value="Sexta-feira"/>
                          <option key="6" value="Sábado"/> 
                        </datalist>
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
