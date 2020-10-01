import React, { useState, useEffect } from "react";

import PageHeader from "../../components/PageHeader";
import NavBar from "../../components/NavBar";

import PageContainer from "../../components/PageContainer";
import Select from "../../components/Select";
import FormButton from '../../components/FormButton'
import TeacherItem from "./TeacherItem";

import smile from "../../assets/images/icons/smile.svg";

import api from "../../services/api";

import { TeacherList, FilterBox, FilterToast } from "./styles";

import options from "../../utils/options";

import { ClassProps } from "./TeacherItem";

function TeacherListPage() {
  const [subject, setSubject] = useState('default');
  const [week_day, setWeekDay] = useState('default');    
  const [totalProffys, setTotalProffys] = useState(0);
  const [totalClassesList, setTotalClassesList] = useState([] as any);
  const [classes, setClasses] = useState([] as any); 
  const [subjectFilter, setSubjectFilter] = useState([] as any)

  useEffect(() => {
    const getTotalProffys = async () => {
      const response = await api.get('/proffy')
      const { data } = response
      setTotalProffys(data)
    }
    getTotalProffys()

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
      setClasses(totalClassesList)        
      setSubject('default')                   
      return

    } else {
      const classesList = totalClassesList
      const subjectFilterResult = classesList.filter(
        (classesItem: ClassProps) => classesItem.subject === filterOption
      )
      setClasses(subjectFilterResult)
      setSubject(filterOption)      
      setSubjectFilter(subjectFilterResult)
      return

    }
  };
  
  const weekDayFilterHandler = (filterOption: string) => { 
    if(filterOption === 'default'){      
      setClasses(totalClassesList)
      setWeekDay('default')        
      return          

    } else if(subject !== 'default'){      
      const classesList = subjectFilter
      const weekDayFilterResult = classesList.filter(      
        (classesItem: ClassProps) => classesItem.classes.some(
          (classWeekDay: any) => classWeekDay.week_day === Number(filterOption)
        )
      )      
      setClasses(weekDayFilterResult)    
      setWeekDay(filterOption)
      return

    } else {      
      const classesList = totalClassesList
      const weekDayFilterResult = classesList.filter(      
        (classesItem: ClassProps) => classesItem.classes.some(
          (classWeekDay: any) => classWeekDay.week_day === Number(filterOption)
        )
      )      
      setClasses(weekDayFilterResult)    
      setWeekDay(filterOption)
      return
      
    }
  }; 

  const clearFilters = () => {
    setSubject('default')
    setWeekDay('default')    
    setClasses(totalClassesList)
    setSubjectFilter([] as any)
    return
  }

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
          <Select
            name="subject"
            label="Matéria"
            options={options.subjects}
            value={subject}
            onChange={(event) => subjectFilterHandler(event.target.value)}            
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={options.weekDay}
            value={week_day}
            onChange={(event) => weekDayFilterHandler(event.target.value)}
          />
          <FormButton onClick={clearFilters}>Limpar filtros</FormButton>
        </FilterBox>
        { classes.length <= 0 
          ? 
            <FilterToast>Nenhum professor encontrado em sua pesquisa.</FilterToast> 
          :
            <TeacherList>
              {classes.map((classItem: ClassProps) => {
                return <TeacherItem key={classItem.id} teacher={classItem} />;
              })}      
            </TeacherList>      
        }
    </PageContainer>
  );
}

export default TeacherListPage;
