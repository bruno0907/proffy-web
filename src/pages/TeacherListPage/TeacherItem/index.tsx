import React from "react";

import api from "../../../services/api";

import whatsappIcon from "../../../assets/images/icons/whatsapp.svg";
import arrow from "../../../assets/images/icons/arrow-grey.svg";

import getWeekDay from '../../../utils/convertWeekDay'
import convertMinutesToHours from '../../../utils/convertMinutesToHours'

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

interface ClassesProps{  
  id: number;
  week_day: number;
  from: number;
  to: number;
  class_id: number;
}

export interface Class {
  id: number;
  avatar: string;
  name: string;
  surname: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
  classes: Array<{
    id: number;
    week_day: number;
    from: number;
    to: number;
    class_id: number; 
  }>;
}

interface TeacherItemProps {
  teacher: Class;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const whatsAppMessage = `https://wa.me/55${teacher.whatsapp}/?text=Olá ${teacher.name}! Quero ter aulas de ${teacher.subject} contigo. Podemos nos conectar?`;

  function createNewConnection() {
    api.post("/connections", {
      user_id: teacher.id,
    });
  }

  const availableClasses = teacher.classes

  

  return (
    <TeacherCard>
      <CardHeader>
        <Avatar img={`http://localhost:3333/img/${teacher.avatar}`} />
        <Profile>
          <Name>{teacher.name} {teacher.surname}</Name>
          <Subject>{teacher.subject}</Subject>
        </Profile>
      </CardHeader>
      <CardBody>{teacher.bio}</CardBody>
      <ScheduleList>
        
        <div><span>Dia</span><span>Horário</span></div>

        {availableClasses.map((availability: ClassesProps) => (
            
          <ScheduleItem key={availability.id}>                
            <strong><span>Dia</span>{getWeekDay(availability.week_day)}</strong>
            <img src={arrow} alt="Arrow-icon"/>
            <strong><span>Horário</span>{convertMinutesToHours(availability.from)} - {convertMinutesToHours(availability.to)}</strong>
          </ScheduleItem> 

        ))}
        
        

      </ScheduleList>
      <CardFooter>
        <Price>
          <span>Preço da hora/aula:</span><strong>R$ {Number(teacher.cost).toFixed(2).replace('.', ',')} </strong>
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
