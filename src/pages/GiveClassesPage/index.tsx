import React, { useState, FormEvent } from "react";

import { useHistory } from "react-router-dom";

import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";
import NavBar from "../../components/NavBar";
import Form from "../../components/Form";
import FormSection from "../../components/FormSection";
import InputMedium from "../../components/InputMedium";
import InputSmall from "../../components/InputSmall";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import Footer from "../../components/Footer";

import rocketIcon from "../../assets/images/icons/rocket.svg";
import avatarPlaceholder from "../../assets/images/icons/user.svg";

import {
  Profile,
  FormContainer,
  InputRow,
  UserInfo,
  Avatar,
  UserName,
  ScheduleList,
  ScheduleItem,
  ScheduleContentTimeRow,
  ScheduleItemRemoveButton,
} from "./styles";

import options from "../../utils/options";

import api from '../../services/api'

function GiveClassesPage() {
  const history = useHistory();

  const [avatar, setAvatar] = useState(avatarPlaceholder);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");
  const [scheduleItems, setScheduleItems] = useState([
    { id: 0, week_day: 0, from: "", to: "" },
  ]);

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
    
    await api.post('/classes',{
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems
    }).then(() => {
        alert('Cadastro realizado com sucesso!')
        history.push('/')

    }).catch((e) => {
        alert('Houve um erro no seu cadastro!')

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
            <FormSection title="Seus dados">
              <InputRow>
                <UserInfo>
                  <Avatar src={avatar} />
                  <UserName>{name}</UserName>
                </UserInfo>
                <InputMedium
                  type="number"
                  name="whatsapp"
                  label="Whatsapp"
                  value={whatsapp}
                  onChange={(event) => setWhatsapp(event.target.value)}
                />
              </InputRow>
              <InputRow>
                <Textarea
                  name="bio"
                  label="Biografia"
                  subLabel="(Máximo de 300 caracteres)"
                  value={bio}
                  onChange={(event) => setBio(event.target.value)}
                />
              </InputRow>
            </FormSection>
            <FormSection title="Sobre a aula">
              <InputRow>
                <Select
                  name="subject"
                  label="Matéria"
                  options={options.subjects}
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                />
                <InputMedium
                  type="number"
                  label="Custo da sua hora/aula"
                  name="cost"
                  value={cost}
                  onChange={(event) => setCost(event.target.value)}
                />
              </InputRow>
            </FormSection>
            <FormSection
              title="Horários disponíveis"
              addSchedule
              onClick={addNewScheduleItem}
            >
              <ScheduleList>
                {scheduleItems.map((scheduleItem, index) => {
                  return (
                    <ScheduleItem key={scheduleItem.id}>
                      <InputRow>
                        <Select
                          name="week_day"
                          label="Dia da semana"
                          options={options.weekDay}
                          value={scheduleItem.week_day}
                          onChange={(event) =>
                            setScheduleItemValue(
                              index,
                              "week_day",
                              event.target.value
                            )
                          }
                        />
                      </InputRow>
                      <ScheduleContentTimeRow>
                        <InputSmall
                          type="time"
                          name="from"
                          label="De"
                          value={scheduleItem.from}
                          onChange={(event) =>
                            setScheduleItemValue(
                              index,
                              "from",
                              event.target.value
                            )
                          }
                        />
                        <InputSmall
                          type="time"
                          name="to"
                          label="Até"
                          value={scheduleItem.to}
                          onChange={(event) =>
                            setScheduleItemValue(
                              index,
                              "to",
                              event.target.value
                            )
                          }
                        />
                      </ScheduleContentTimeRow>
                      <ScheduleItemRemoveButton
                        onClick={() => removeScheduleItem(scheduleItem.id)}
                      >
                        X
                      </ScheduleItemRemoveButton>
                    </ScheduleItem>
                  );
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

export default GiveClassesPage;
