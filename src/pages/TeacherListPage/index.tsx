import React, { useState, useEffect } from "react";

import PageHeader from "../../components/PageHeader";
import NavBar from "../../components/NavBar";

import PageContainer from "../../components/PageContainer";
import Input from "../../components/Input";
import Select from "../../components/Select";
import TeacherItem from "./TeacherItem";

import smile from "../../assets/images/icons/smile.svg";

import api from "../../services/api";

import { TeacherList, FilterBox, InputRow } from "./styles";

import options from "../../utils/options";
import convertWeekDay from '../../utils/convertWeekDay'

import { Class } from "./TeacherItem";

function TeacherListPage() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  
  const [totalProffys, setTotalProffys] = useState("");

  const [totalClassesList, setTotalClassesList] = useState([] as any);
  const [classes, setClasses] = useState([] as any);

  useEffect(() => {
    const getTotalProffys = async () => {
        await api
          .get("/proffy")
          .then((response) => setTotalProffys(response.data))
          .catch((error) => console.log(error));
      };
    getTotalProffys();

    const getClasses = async () => {
        const response = await api.get('classes')
        const { data } = response
        setTotalClassesList(data)
        setClasses(data)
        
      };
    getClasses();

  }, []);

  const subjectFilterHandler = (filterOption: string) => {
    if(filterOption === 'default'){
        return setClasses(totalClassesList)
    }    
    const classesList = [...totalClassesList]
    const subjectFilterResult = classesList.filter(

      (classesItem: Class) => classesItem.subject === filterOption

    )
    setSubject(filterOption)       
    return setClasses(subjectFilterResult)
  };  


  // Filtro para trabalhar
  const weekDayfilterHandler = (filterOption: string) => {
    if(filterOption === 'default'){
        return setClasses(totalClassesList)
    }
    const classesList = [...classes]      
    const weekDayFilterResult = classesList.filter(      
      (classesItem: Class) => classesItem.classes.some(
        (classWeekDay: any) => classWeekDay.week_day === filterOption
      )
    )    
    setClasses(weekDayFilterResult)
    setWeekDay(filterOption)
    
  };  
  


  return (
    <PageContainer>
      <NavBar title="Estudar" />
      <PageHeader
        title="Estes são so proffys disponíveis."
        description="Utilize das opções abaixo para filtrar sua busca."
      >
        <img src={smile} alt="Rocket" />
        <span>Nós temos {totalProffys} professores.</span>
      </PageHeader>
      <FilterBox>
        <InputRow>
          <Select
            name="subject"
            label="Matéria"
            options={options.subjects}
            value={subject}
            onChange={(event) => subjectFilterHandler(event.target.value)}
          />
        </InputRow>
        
        <InputRow>
          <Select
            name="week_day"
            label="Dia da semana"
            options={options.weekDay}
            value={week_day}
            onChange={event => weekDayfilterHandler(event.target.value)}
          />
          <Input 
          type="time" 
          name="time" 
          label="Horário" 
          value={time}
          onChange={event => setTime(event.target.value)}
          />
        </InputRow>
      </FilterBox>
      <TeacherList>
        {classes.map((classItem: Class) => {
          return <TeacherItem key={classItem.id} teacher={classItem} />;
        })}
      </TeacherList>
    </PageContainer>
  );
}

export default TeacherListPage;
