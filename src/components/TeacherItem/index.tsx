import React from "react";

import api from "../../services/api";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import arrow from "../../assets/images/icons/arrow-grey.svg";


import {
    TeacherCard,
    CardHeader,
    Avatar,
    Profile,
    Name,
    Subject,
    CardBody,
    ScheduleList,
    ScheduleItem,
    CardFooter,
    Price,
    WhatsappButton,
} from './styles'

export interface Teacher {
  id: number;
  avatar: string;
  name: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const whatsAppMessage = `https://wa.me/55${teacher.whatsapp}/?text=Olá ${teacher.name}! Quero ter aulas de ${teacher.subject} contigo. Podemos nos conectar?`;

  function createNewConnection() {
    api.post("/connections", {
      user_id: teacher.id,
    });
  }


  return (
    <TeacherCard>
      <CardHeader>
        <Avatar src={teacher.avatar} alt={teacher.name} />
        <Profile>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </Profile>
      </CardHeader>
      <CardBody>{teacher.bio}</CardBody>
      <ScheduleList>
        
        <div><span>Dia</span><span>Horário</span></div>
        
        <ScheduleItem>                
            <strong><span>Dia</span>Segunda</strong>
            <img src={arrow} alt="Arrow-icon"/>
            <strong><span>Horário</span>8h - 18h</strong>
        </ScheduleItem> 
        <ScheduleItem>
            <strong><span>Dia</span>Terça</strong>
            <img src={arrow} alt="Arrow-icon"/>
            <strong><span>Horário</span>8h - 18h</strong>                
        </ScheduleItem> 
        <ScheduleItem>
            <strong><span>Dia</span>Quarta</strong>
            <img src={arrow} alt="Arrow-icon"/>
            <strong><span>Horário</span>8h - 18h</strong>                
        </ScheduleItem> 
        <ScheduleItem>                
            <strong><span>Dia</span>Quinta</strong>
            <img src={arrow} alt="Arrow-icon"/>
            <strong><span>Horário</span>8h - 18h</strong>
        </ScheduleItem> 
        <ScheduleItem>
            <strong><span>Dia</span>Sexta</strong>
            <img src={arrow} alt="Arrow-icon"/>
            <strong><span>Horário</span>8h - 18h</strong>                
        </ScheduleItem> 
        <ScheduleItem>
            <strong><span>Dia</span>Sábado</strong>
            <img src={arrow} alt="Arrow-icon"/>
            <strong><span>Horário</span>8h - 18h</strong>                
        </ScheduleItem> 

      </ScheduleList>
      <CardFooter>
        <Price>
          <span>Preço da hora/aula:</span><strong>R$ {teacher.cost} reais</strong>
        </Price>
        <WhatsappButton
          href={whatsAppMessage}
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </WhatsappButton>
      </CardFooter>
    </TeacherCard>
  );
};

export default TeacherItem;
