import React, { useState, useEffect, FormEvent } from 'react';

import NavBar from '../../components/NavBar'

import Header from './components/Header'
import FormSection from './components/FormSection'
import Footer from './components/Footer'

import Input from './components/Input'
import InputNumber from './components/InputMedium'
import TextAreaInput from './components/TextAreaInput'
import Select from './components/Select'
import InputSM from './components/InputSmall'

import { 
  ProfilePageWrapper,  
  Profile,
  Form,
  FormContainer,
  InputRow,        
  ScheduleList,
  ScheduleItem,
  // ScheduleItemRemoveButton,
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

  function handleSubmit(event: FormEvent){
    event.preventDefault()

    console.log('aeHOOOOOOO !!!!!!!!!')
  }

  return (
    <ProfilePageWrapper>
      <NavBar title="Meu Perfil" />
      <Header        
        avatar="https://avatars3.githubusercontent.com/u/54812906?s=460&u=230c6ae207fa7fd5735456ef3011c8771549c8cb&v=4"
        name="Bruno Mariani"
        subject="Inglês"
      />
      <Profile as="main">
        <Form onSubmit={handleSubmit}>
          <FormContainer>
            <FormSection title="Seus dados">
              <InputRow>
                <Input
                  label="Nome"
                  type="text" 
                  name="name"
                />
                <Input
                  label="Sobrenome"
                  type="text" 
                  name="surname"
                />
              </InputRow>
              <InputRow>
                <Input 
                  label="Email"
                  name="email"
                />
                <InputNumber 
                  label="Whatsapp"
                  name="whatsapp"
                  type="number"
                />
              </InputRow>

            <InputRow>
              <TextAreaInput 
                label="Biografia"
                subLabel="(Máximo de 300 caracteres)"
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
                <InputNumber
                  label="Custo da hora/aula"
                  name="cost"
                  type="number"
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
                          options={options.weekDay}
                        />
                      </InputRow>

                      <InputRow>                      
                        <InputSM
                          type="time"
                          label="De"
                          name="from"
                        />
                        <InputSM
                          type="time"
                          label="Até"
                          name="to"
                        />                        
                      </InputRow>

                        {/* <ScheduleItemRemoveButton 
                          onClick={() => 
                          removeScheduleItem(scheduleItem.id)}
                        >
                          Remover
                        </ScheduleItemRemoveButton> */}
                      </ScheduleItem>
                    )  
                  })}
              </ScheduleList>
            </FormSection>
          </FormContainer>
        <Footer />
        </Form>
      </Profile>
    </ProfilePageWrapper>
  );
}

export default TeacherProfilePage;
