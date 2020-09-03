import React, { useState, FormEvent, useEffect } from "react";

import { useHistory } from "react-router-dom";

import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";
import NavBar from "../../components/NavBar";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import FormButton from "../../components/FormButton";
import Footer from "../../components/Footer";

import rocketIcon from "../../assets/images/icons/rocket.svg";
import avatarPlaceholder from "../../assets/images/icons/user.svg";

import {  
  UserInfo,
  AvatarSection,
  Avatar,
  UserName,
  Profile,
  Form,
  FormContainer,
  FormSection,
  Divider,
  WhatsApp,
  Cost,
  ScheduleList,
  WeekDay,
  From,
  To,
  RemoveButton,  
} from "./styles";

import options from "../../utils/options";

import api from '../../services/api'

import { useAuth } from "../../contexts/auth";
import { UserProps } from "../../services/auth";

function GiveClassesPage() {
  const history = useHistory();

  const [avatar, setAvatar] = useState<UserProps | null>(null);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [scheduleItems, setScheduleItems] = useState([
    { id: 0, week_day: 0, from: '', to: '' },
  ]);


  const { user, updateUser } = useAuth()

  useEffect(() => {
    setAvatar(user?.avatar!)
    setName(user?.name!)
    setSurname(user?.surname!)
    setWhatsapp(user?.whatsapp!)
    setBio(user?.bio!)
    setSubject(user?.subject!)
    // setCost(user?.cost!)
    // setScheduleItems(user?.scheduleItems!)
  }, [user])

  function addNewScheduleItem() {
    let a = scheduleItems.length;
    const nid = a++;

    setScheduleItems([
      ...scheduleItems,
      { id: nid, week_day: 0, from: "", to: "" },
    ]);
  }

  function removeScheduleItem(id: number) {
    setScheduleItems(scheduleItems.filter((item) => item.id !== id));
  }

  // setScheduleItemValue(0, 'week_day', '2)
  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  // Pegar dados do proffy e das aulas para popular a página  

  async function handleCreateClass(event: FormEvent) {
    event.preventDefault();
    
    const id = user?.id

    await api.post(`/proffy/${id}/classes`,{        
        subject,
        cost: Number(cost),
        schedule: scheduleItems
    }).then(response => {
      alert('Cadastro realizado com sucesso!')
      console.log(response.data)
      history.push('/')
    }).catch((error) => {
      alert('Houve um erro no seu cadastro!')
      console.log(error.message)
    })

  }

  return (
    <PageContainer>
      <NavBar title="Dar aulas" />
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      >
        <img src={rocketIcon} alt="Rocket" />
        <span>
          Prepare-se!
          <br />
          Vai ser o máximo
        </span>
      </PageHeader>
      <Profile>
        <Form onSubmit={handleCreateClass}>
          <FormContainer>
            <FormSection>
              <legend>
                <h2>Seus Dados</h2>                              
              </legend>
              <Divider/>              
              <UserInfo>
                <AvatarSection>
                  <Avatar img={ avatar ? `http://localhost:3333/img/${avatar}` : avatarPlaceholder } />                  
                  <UserName>{name} {surname}</UserName>
                </AvatarSection>                 
                <WhatsApp>
                  <Input 
                    label="Whatsapp"
                    name="whatsapp"                  
                    autoComplete='off'
                    value={whatsapp}
                    onChange={event => setWhatsapp(event.target.value)}
                  /> 
                </WhatsApp>              
              </UserInfo>                
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
                <p onClick={addNewScheduleItem}>+ Novo <span>horário</span></p>
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

export default GiveClassesPage;
