import React, { useState, useEffect, FormEvent, ChangeEvent} from 'react';
import { useHistory } from 'react-router-dom'

import PageContainer from '../../components/PageContainer'
import NavBar from '../../components/NavBar'
import FormSection from '../../components/FormSection'
import Footer from '../../components/Footer'
import Form from '../../components/Form'
import Input from '../../components/Input'
import InputSmall from '../../components/InputSmall'
import InputMedium from '../../components/InputMedium'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import avatarPlaceholder from '../../assets/images/icons/user.svg'

import {   
  Profile,  
  ProfileHeader,
  Avatar,
  Name,
  Subject,
  CameraIcon,
  FormContainer,
  InputRow,        
  ScheduleList,
  ScheduleItem,  
  ScheduleContentTimeRow,
  ScheduleItemRemoveButton,
} from './styles';

import { useAuth } from '../../contexts/auth'
import options from '../../utils/options'

import api from '../../services/api'

function TeacherProfilePage (){    
  const history = useHistory()
  const { signed, user } = useAuth() 

  const [ avatar, setAvatar] = useState(null)
  const [ name, setName ] = useState('')
  const [ surname, setSurname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ whatsapp, setWhatsapp ] = useState('')
  const [ bio, setBio ] = useState('')
  const [ subject, setSubject ] = useState('')
  const [ cost, setCost ] = useState('')
  const [ scheduleItems, setScheduleItems ] = useState([ { id: 0, week_day: 0, from: '', to: ''} ])  

  useEffect(() => {
    if(!signed){      
      history.push('/sign-in')
    } else {
      const user = JSON.parse(localStorage.getItem('@ProffyAuth:user')!)   
      
      setAvatar(user.avatar !== null ? user.avatar : avatarPlaceholder)
      setName(user.name)
      setSurname(user.surname)
      setEmail(user.email)
      setWhatsapp(user?.whatsapp)
      setBio(user?.bio) 
      setSubject(user?.subject)    
      // setCost(user?.cost)       
    }
  }, [signed, history])
  
  async function handleUpdateAvatar(event: ChangeEvent<HTMLInputElement>){
    if(event.target.files){
      const avatar = event.target.files[0]
      const formData = new FormData()     
      const id = user?.id 

      formData.append('file', avatar)    

      await api.patch('/proffy/profile/update-avatar', formData, {
        headers: {
          id
        }
      })
      .then(response => console.log(response.data.newAvatar))
      .catch(e => console.log(e))    
    }
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

  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    const data = {      
      name,
      surname,
      email,
      whatsapp,
      bio,
      subject,
      cost,
      // scheduleItems,
    }

    try {

      await api.put(`/proffy/profile/${user?.id}/update`, data)
      localStorage.setItem('@ProffyAuth:user', JSON.stringify(data))

      history.push('/')
    } catch (error) {

      alert('Houve um erro na sua solicitação')
      console.log(error)
    }    
  }

  return (
    <PageContainer>
      <NavBar title="Meu Perfil" />
      <ProfileHeader>

      <Avatar>
        <img src={avatar || avatarPlaceholder} alt={`${name}_${avatar}`}/>
        <div>
          <input 
            type="file" 
            id="upload"
            onChange={handleUpdateAvatar}
          />
          <CameraIcon />
        </div>
      </Avatar>
      <Name>{name || 'Nome do Proffy'}</Name>
      <Subject>{subject || 'Matéria do Proffy'}</Subject>

      </ProfileHeader>
      <Profile as="main">
        <Form onSubmit={handleSubmit}>
          <FormContainer>
            <FormSection title="Seus dados">
              <InputRow>
                <Input
                  label="Nome"
                  type="text" 
                  name="name"
                  autoComplete='off'
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
                <Input
                  label="Sobrenome"
                  type="text" 
                  name="surname"
                  autoComplete='off'
                  value={surname}
                  onChange={event => setSurname(event.target.value)}
                />
              </InputRow>
              <InputRow>
                <Input 
                  label="Email"
                  name="email"
                  autoComplete='off'
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
                <InputMedium 
                  label="Whatsapp"
                  name="whatsapp"                  
                  autoComplete='off'
                  value={whatsapp}
                  onChange={event => setWhatsapp(event.target.value)}
                />
              </InputRow>

            <InputRow>
              <Textarea 
                label="Biografia"
                subLabel="(Máximo de 300 caracteres)"
                name="bio"
                autoComplete='off'
                value={bio}
                onChange={(event) => setBio(event.target.value)}
              />
            </InputRow>

            </FormSection>

            <FormSection title="Sobre a aula">              

              <InputRow>
                <Select
                  label="Matéria"
                  name="subject"                  
                  options={options.subjects}      
                  value={subject}            
                  onChange={event => setSubject(event.target.value)}
                />
                <InputMedium
                  label="Custo da hora/aula"
                  name="cost"                  
                  value={cost}
                  onChange={event => setCost(event.target.value)}
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
                            name="week_day"
                            label="Dia da semana"
                            options={options.weekDay}
                            value={scheduleItem.week_day}
                            onChange={event => setScheduleItemValue(index, 'week_day', event.target.value)}
                          />                                        
                      </InputRow>
                      <ScheduleContentTimeRow>
                          <InputSmall 
                            type="time"
                            name="from"
                            label="De"
                            value={scheduleItem.from}
                            onChange={event => setScheduleItemValue(index, 'from', event.target.value)}
                          />
                          <InputSmall 
                            type="time"
                            name="to"
                            label="Até"
                            value={scheduleItem.to}
                            onChange={event => setScheduleItemValue(index, 'to', event.target.value)}
                          />
                        </ScheduleContentTimeRow>
                      <ScheduleItemRemoveButton                         
                        onClick={() => 
                        removeScheduleItem(scheduleItem.id)}
                      >X</ScheduleItemRemoveButton>
                    </ScheduleItem>
                  )  
                })}      
                  
              </ScheduleList>
            </FormSection>
          </FormContainer>
        <Footer />
        </Form>
      </Profile>
    </PageContainer>
  );
}

export default TeacherProfilePage;
