import React, { useState, FormEvent, useEffect } from "react";

import { useHistory } from "react-router-dom";

import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";
import NavBar from "../../components/NavBar";
import Input from "../../components/Input";
import Select from "../../components/Select";
import FormButton from "../../components/FormButton";
import Footer from "../../components/Footer";

import {  
  Profile,
  Form,
  FormContainer,
  FormSection,
  Divider,  
  Cost,
  ScheduleList,
  WeekDay,
  From,
  To,
  RemoveButton,  
} from "./styles";

import options from "../../utils/options";
import convertMinutesToHours from '../../utils/convertMinutesToHours'

import { useAuth } from '../../contexts/auth'
import api from '../../services/api'

function ClassesListPage(route: { match: { params: { id: any; }; }; }) {
  const history = useHistory();
  const { id } = route.match.params
  
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [scheduleItems, setScheduleItems] = useState([
    { id: 0, week_day: 0, from: '', to: '' },
  ]);

  const { signed } = useAuth()   
 
  useEffect(() => {

    if(!signed){      
      history.push('/sign-in')
    }   
    
    const getClass = async () => {
      await api.get('proffy/class', {
        headers: {
          id
        }
      }).then(response => {
          setSubject(response.data[0].subject)
          setCost(response.data[0].cost)
          setScheduleItems(response.data[0].classes)
          console.log(response.data[0])

        }
      ).catch(error => console.log(error.message))

    }
    getClass()

  }, [history, id, signed])

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
  
  async function handleCreateClass(event: FormEvent) {
    event.preventDefault();

    await api.put(`/proffy/class`,{        
        subject,
        cost: Number(cost),
        schedule: scheduleItems        
    }, {
      headers: {
        id
      }
    }).then(response => {
      alert('Cadastro realizado com sucesso!')
      console.log(response.data)
      history.push('/user/profile')

    }).catch((error) => {
      alert('Houve um erro no seu cadastro!')
      console.log(error.message)      
    })

  }

  return (
    <PageContainer>
      <NavBar title="Editar aula" />
      <PageHeader
        title="Aqui você pode editar a sua aula."
        description="Utilize das opções baixo para adicionar/remove ou editar as suas aulas."
      >        
      </PageHeader>
      <Profile>
        <Form onSubmit={handleCreateClass}>
          <FormContainer>
            
            <FormSection>
              <legend>
                <h2>Aula cadastrada</h2>                
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
                <h2>Horários cadastrados</h2>
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
                        value={convertMinutesToHours(scheduleItem.from)}
                        onChange={event => setScheduleItemValue(index, 'from', event.target.value)}
                      />
                    </From>  
                    <To>
                      <Input 
                        type="time"
                        name="to"
                        label="Até"                      
                        value={convertMinutesToHours(scheduleItem.to)}
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
          <FormButton>Salvar Alterações</FormButton>
        </Footer>
        </Form>
      </Profile>
    </PageContainer>
  );
}

export default ClassesListPage;
