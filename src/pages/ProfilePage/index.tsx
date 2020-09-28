import React, { useState, useEffect, FormEvent, ChangeEvent, useCallback} from 'react';
import { useHistory, Link } from 'react-router-dom'

import PageContainer from '../../components/PageContainer'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import FormButton from '../../components/FormButton'

import avatarPlaceholder from '../../assets/images/icons/user.svg'

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
  WhatsApp,    
  ScheduledClasses
} from './styles';

import { useAuth } from '../../contexts/auth'

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
  const [ classes, setClasses ] = useState([])
  const { user, updateUser } = useAuth()   

  useEffect(() => {    
    const getClasses = async() => {      
      const response = await api.get(`proffy/${user?.id}/classes/`)
      const { data } = response
      setClasses(data)
    }
    getClasses()
    
    setAvatar(user?.avatar!) 
    setName(user?.name!)
    setSurname(user?.surname!)
    setEmail(user?.email!)
    setWhatsapp(user?.whatsapp! || '')
    setBio(user?.bio! || '')       
    
  }, [history, avatar, user])  

  const handleUpdateAvatar = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files){
      const avatar = event.target.files[0]
      const formData = new FormData()           

      formData.append('file', avatar)    
      
      await api.patch(`/proffy/profile/${user?.id}/update-avatar/`, formData)
      .then(response => {        
        const userUpdated = response.data.user        
        updateUser(userUpdated)
      })
      .catch(() => alert('Houve um erro ao atualizar seu avatar'))    
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

    await api.put(`/proffy/profile/${user?.id}/update`, data, {
      headers:{           
        token 
      }
    }).then(response => {      
      updateUser(response.data)
      history.push('/')
    }).catch(() => {
      alert('Erro ao atualizar o seu usuário.')
    })
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
                  { classes.length > 0 ?

                  <ScheduledClasses>
                    { classes.map((i: any) =>                     
                      <li key={i.id}>
                        <Link to={`/user/profile/${i.id}/classes`}>
                          <p>
                            Matéria
                            <span>{i.subject}</span>
                          </p>
                          <p>
                            Hora/aula
                            <span>R$ {i.cost}</span>
                          </p>
                        </Link>
                      </li>                    
                    )}              
                  </ScheduledClasses>
                  : 

                  <div>
                    <h3>Você não possui nenhuma aula cadastrada</h3>
                    <p>Para começar a dar aulas, complete seu cadastro e na página inicial acesse a opção Dar Aulas.</p>
                  </div>

                  }            
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
