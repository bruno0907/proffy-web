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

import { Class } from "./TeacherItem";

function TeacherListPage() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  
  const [ourTeachers, setOurTeachers] = useState("");

  const [getClasses, setGetClasses] = useState([] as any);
  const [classes, setClasses] = useState([] as any);

  useEffect(() => {
    const getProffysCount = async () => {
        await api
          .get("/proffy")
          .then((response) => setOurTeachers(response.data))
          .catch((error) => console.log(error));
      };
    getProffysCount();

    const getClassesList = async () => {
        const response = await api.get('classes')
        const { data } = response
        setGetClasses(data)
        setClasses(data)
        console.log(data)
      };
    getClassesList();

  }, []);

  const searchFilter = (value: any) => {
    const a = [...getClasses];
    const b = a.filter((i: any) => i.subject === value);
    setSubject(value);
    setClasses(b);
    console.log(b);
    return;
  };  

  return (
    <PageContainer>
      <NavBar title="Estudar" />
      <PageHeader
        title="Estes são so proffys disponíveis."
        description="Utilize das opções abaixo para filtrar sua busca."
      >
        <img src={smile} alt="Rocket" />
        <span>Nós temos {ourTeachers} professores.</span>
      </PageHeader>
      <FilterBox>
        <InputRow>
          <Select
            name="subject"
            label="Matéria"
            options={options.subjects}
            value={subject}
            onChange={(event) => searchFilter(event.target.value)}
          />
        </InputRow>
        <InputRow>
          <Select
            name="week_day"
            label="Dia da semana"
            options={options.weekDay}
          />
          <Input type="time" name="time" label="Horário" />
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
