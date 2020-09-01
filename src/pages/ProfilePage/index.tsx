import React, { useState, useEffect, FormEvent, ChangeEvent, useCallback} from 'react';
import { useHistory, Link } from 'react-router-dom'

import PageContainer from '../../components/PageContainer'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import FormButton from '../../components/FormButton'

import avatarPlaceholder from '../../assets/images/icons/user.svg'

import {   
  Profile,  
  Header,
  Avatar,
  Name,
  Subject,
  CameraIcon,
  Form,
  FormContainer,
  FormSection,
  Divider,    
  ScheduleList,
  WhatsApp,
  Cost,
  WeekDay,
  From,
  To,   
  RemoveButton,
} from './styles';

import { useAuth } from '../../contexts/auth'

import options from '../../utils/options'

import api from '../../services/api'

import { UserProps } from '../../services/auth';

function TeacherProfilePage (){    
  const history = useHistory() 

  const [ avatar, setAvatar] = useState<UserProps | null>(null)
  const [ name, setName ] = useState('')
  const [ surname, setSurname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ whatsapp, setWhatsapp ] = useState('')
  const [ bio, setBio ] = useState('')
  const [ subject, setSubject ] = useState('')
  const [ cost, setCost ] = useState('')
  const [ scheduleItems, setScheduleItems ] = useState([ { id: 0, week_day: 0, from: '', to: ''} ])  

  const { signed, user, updateUser } = useAuth()   
  
  useEffect(() => {
    if(!signed){      
      history.push('/sign-in')
    }

    setAvatar(user?.avatar!) 
    setName(user?.name!)
    setSurname(user?.surname!)
    setEmail(user?.email!)
    setWhatsapp(user?.whatsapp! || '')
    setBio(user?.bio! || '') 
    setSubject(user?.subject! || '')    
    setCost(user?.cost! || '')         
    
  }, [signed, history, avatar, user])

  function setScheduleItemValue(position: number, field: string, value: string){
      const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
          if(index === position) {
              return { ...scheduleItem, [field]: value}
          }
          return scheduleItem
      })      

      setScheduleItems(updatedScheduleItems)  
  }  

  // function addNewScheduleItem(){    
  //   let a = scheduleItems.length
  //   const nid = a++

  //   setScheduleItems([
  //       ...scheduleItems,
  //       { id: nid, week_day: 0, from: '', to: '' }
        
  //   ])        
  // }

  function removeScheduleItem(id: number) {        
    setScheduleItems(
      scheduleItems.filter( item => item.id !== id) 
    )
  } 

  const handleUpdateAvatar = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files){
      const avatar = event.target.files[0]
      const formData = new FormData()     
      const id = user?.id 

      formData.append('file', avatar)    

      api.patch('/proffy/profile/update-avatar', formData, {
        headers: {
          id
        }
      })
      .then(response => {        
        const userUpdated = response.data.user
        console.log('Update Avatar', response.data.user)
        updateUser(userUpdated)
      })
      .catch(e => alert('Houve um erro ao atualizar seu avatar'))    
    }
  }, [user, updateUser])

  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    const id = user?.id
    const token = localStorage.getItem('@ProffyAuth:token')

    const data = {  
      id,          
      avatar, 
      name,
      surname,
      email,
      whatsapp,
      bio,
      subject,
      cost,
      scheduleItems,
    } 

    // await api.put(`/proffy/profile/${user?.id}/update`, data)
    const response = await api.put(`/proffy/profile/${id}/update`, data, {
      headers:{          
        token 
      }
    })
    if(response){
      console.log('Update proffy', response)
      updateUser(response.data)
      history.push('/')
    } else {
      alert('erro')
    }

  }

  return (
    <PageContainer>
      <NavBar title="Meu Perfil" />
      <Header>
        <Avatar img={avatar ? `http://localhost:3333/img/${avatar}` : avatarPlaceholder}>        
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
      </Header>
      <Profile>
        <Form onSubmit={handleSubmit}>
          <FormContainer>
            <FormSection>
              <legend>
                <h2>Seus Dados</h2>
                <Link to="/password-reset">Alterar senha</Link>                
              </legend>
              <Divider/>
              <div>
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
              </div>
              <div>
                <Input 
                  label="Email"
                  name="email"
                  autoComplete='off'
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
                <WhatsApp>
                  <Input 
                    label="Whatsapp"
                    name="whatsapp"                  
                    autoComplete='off'
                    value={whatsapp}
                    onChange={event => setWhatsapp(event.target.value)}
                  /> 
                </WhatsApp>
              </div>
                <Textarea 
                label="Biografia"
                subLabel="(Máximo de 300 caracteres)"
                name="bio"
                autoComplete='off'
                value={bio}
                onChange={(event) => setBio(event.target.value)}
              />           
            </FormSection>
            <FormSection>
              <legend>
                <h2>Sobre a aula</h2>                
              </legend>
              <Divider/>
              <div>
                <Select
                    label="Matéria"
                    name="subject"                  
                    options={options.subjects}      
                    value={subject}            
                    onChange={event => setSubject(event.target.value)}
                  />
                  <Cost>
                    <Input
                      label="Custo da hora/aula"
                      name="cost"                  
                      value={cost}
                      onChange={event => setCost(event.target.value)}
                    />
                  </Cost>
              </div>
            </FormSection>
            <FormSection>
              <legend>
                <h2>Horários disponíveis</h2>
              </legend>
              <Divider/>
              <ScheduleList>
                { scheduleItems.map((scheduleItem, index) => (
                  <li key={scheduleItem.id}> 
                    <WeekDay>                    
                      <Select                         
                        name="week_day"
                        label="Dia da semana"                      
                        options={options.weekDay}
                        value={scheduleItem.week_day}
                        onChange={event => setScheduleItemValue(index, 'week_day', event.target.value)}
                      />  
                    </WeekDay>  
                    <From>
                      <Input 
                        type="time"
                        name="from"
                        label="De"                      
                        value={scheduleItem.from}
                        onChange={event => setScheduleItemValue(index, 'from', event.target.value)}
                      />
                    </From>  
                    <To>
                      <Input 
                        type="time"
                        name="to"
                        label="Até"                      
                        value={scheduleItem.to}
                        onChange={event => setScheduleItemValue(index, 'to', event.target.value)}
                      />                    
                    </To>
                    <RemoveButton onClick={() => removeScheduleItem(scheduleItem.id)}>X</RemoveButton>
                  </li>
                )  
                )}   
              </ScheduleList>   
            </FormSection>
          </FormContainer>
        <Footer>
          <FormButton>Atualizar Perfil</FormButton>
        </Footer>
        </Form>
      </Profile>
    </PageContainer>
  );
}

export default TeacherProfilePage;
