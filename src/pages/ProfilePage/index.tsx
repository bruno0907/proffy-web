import React, { useState, FormEvent, useCallback, useContext, ChangeEvent } from 'react';

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

 import options from '../../utils/options'


function TeacherProfilePage (){    

  const [ avatar, setAvatar] = useState(avatarPlaceholder)
  const [ name, setName ] = useState('')
  const [ surname, setSurname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ whatsapp, setWhatsapp ] = useState('')
  const [ bio, setBio ] = useState('')
  const [ subject, setSubject ] = useState('')
  const [ cost, setCost ] = useState('')
  const [ scheduleItems, setScheduleItems ] = useState([ { id: 0, week_day: 0, from: '', to: ''} ])  
  
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

  // useEffect(() => {
  //   setAvatar(user.avatar !== null ? user.avatar : avatarPlaceholder)

  //   const handleUpdateAvatar = useCallback((event: ChangeEvent<HTMLInputElement>)) => {
  //     if(event.target.files) {
  //       const avatar = event.target.files[0]
  //       const formData = newFormData()
  //       formData.append('file', avatar)
  
  //       api.patch('uploadImages', formData, {
  //         headers: {
  //           userId: Number(user.id)
  //         }
  //       }).then(
  //         response => updatedUser(userUpdated)
  //       )
  //     }
  //   }

  // }, [updateUser, user.id])

  function handleSubmit(event: FormEvent){
    event.preventDefault()

    const data = {
      name,
      surname,
      email,
      whatsapp,
      bio,
      subject,
      cost,
      scheduleItems,
    }

    console.log( data )
  }

  return (
    <PageContainer>
      <NavBar title="Meu Perfil" />
      <ProfileHeader>

      <Avatar>
        <img src={avatar} alt={`${name}_${avatar}`}/>
        <div>
          <input 
            type="file" 
            id="upload"
            onChange={event => setAvatar(event.target.value)}
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
