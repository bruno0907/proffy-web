import React, { useState, useEffect, FormEvent, ChangeEvent, useCallback} from 'react';
import { useHistory, Link } from 'react-router-dom'

import PageContainer from '../../components/PageContainer'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import FormButton from '../../components/FormButton'

import avatarPlaceholder from '../../assets/images/icons/user.svg'

// import ClassesItem from './ClassesItem'

import {   
  Profile,  
  Header,
  Avatar,
  Name,  
  CameraIcon,
  Form,
  FormContainer,
  FormSection,
  Divider,    
  ScheduleList,  
  WhatsApp,    
} from './styles';

import { useAuth } from '../../contexts/auth'

import api from '../../services/api'
import convertWeekDay from '../../utils/convertWeekDay'
import convertMinutesToHours from '../../utils/convertMinutesToHours'


import { UserProps } from '../../services/auth';

import { Classes } from './ClassesItem'

interface ClassesProps{  
  id: number;
  week_day: number;
  from: number;
  to: number;
  class_id: number;
}

function TeacherProfilePage (){    
  const history = useHistory() 

  const [ avatar, setAvatar] = useState<UserProps | null>(null)
  const [ name, setName ] = useState('')
  const [ surname, setSurname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ whatsapp, setWhatsapp ] = useState('')
  const [ bio, setBio ] = useState('')  
  const [ classes, setClasses ] = useState([])
  const { signed, user, updateUser } = useAuth()   

  useEffect(() => {
    if(!signed){      
      history.push('/sign-in')
    }   
    
    api.get('proffy/classes', {
      headers: {
        id: user?.id
      }
    }).then(
      response => setClasses(response.data)      
    ).catch(error => console.log(error))
    
    setAvatar(user?.avatar!) 
    setName(user?.name!)
    setSurname(user?.surname!)
    setEmail(user?.email!)
    setWhatsapp(user?.whatsapp! || '')
    setBio(user?.bio! || '')       
    
  }, [signed, history, avatar, user])

  

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
        updateUser(userUpdated)

      })
      .catch(e => alert('Houve um erro ao atualizar seu avatar'))    
    }
  }, [user, updateUser])

  async function handleSubmit(event: FormEvent){
    event.preventDefault()
    
    const token = localStorage.getItem('@ProffyAuth:token')

    const data = {        
      avatar, 
      name,
      surname,
      email,
      whatsapp,
      bio,            
    } 

    const response = await api.put(`/proffy/profile/update`, data, {
      headers:{   
        id: user?.id,       
        token 
      }
    })

    if(response){      
      updateUser(response.data)
      history.push('/')

    } else {
      alert('Erro ao atualizar o seu usuário.')

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
        <Name>{`${name} ${surname}`|| 'Nome do Proffy'}</Name>
        {/* <Subject>{subject || 'Matéria do Proffy'}</Subject>  */}
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
                  disabled
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
                <h2>Aulas Cadastradas</h2>
              </legend>
              <Divider/>
              <ScheduleList>                
                { classes.map((scheduledClass: Classes) => {                  
                  return(
                    <li key={scheduledClass.id}>
                      <div>
                        <strong>Matéria: </strong>                      
                        {scheduledClass.subject}
                        <strong>Valor: </strong>
                        {scheduledClass.cost}
                      </div>
                      <table>
                        <thead>
                          <tr>
                            <th>Dia</th>
                            <th>De</th>
                            <th>Até</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                          </tr>  
                        </thead>
                        {scheduledClass.classes.map((i: ClassesProps) => {
                          return(
                            <tbody key={i.id}>
                              <tr>
                                <td>{convertWeekDay(i.week_day)}</td>
                                <td>{convertMinutesToHours(i.from)}</td>
                                <td>{convertMinutesToHours(i.to)}</td>
                                <td>*</td>
                                <td>X</td>
                              </tr>
                            </tbody>
                          )
                        })}
                      </table>                      
                    </li>
                  )
                })}       
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
