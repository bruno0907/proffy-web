import React, { useState, useEffect } from 'react'

import PageHeader from '../../components/PageHeader'
import NavBar from '../../components/NavBar'

import PageContainer from '../../components/PageContainer'
import Input from '../../components/Input'
import Select from '../../components/Select'
import TeacherItem from '../../components/TeacherItem'

import smile from '../../assets/images/icons/smile.svg'

import api from '../../services/api'

import { TeacherList, FilterBox, InputRow } from './styles'

import options from '../../utils/options'

import { Teacher } from '../../components/TeacherItem'

function TeacherListPage() {
    const [ subject, setSubject ] = useState('')
    const [ week_day, setWeekDay ] = useState('')
    const [ time, setTime ] = useState('')
    const [ teachers, setTeachers ] = useState([] as any)

    useEffect(() => {
        api.get('/classes').then(response => { 
            
            setTeachers(response.data)

            

        }).catch(error => {
            alert('Houve um erro muito louco!')
            console.log(error.message)
        })    
    },[])    

    // teachers.map((teacher: Teacher) => console.log(teacher.classes))

    return (
        <PageContainer>
            <NavBar title="Estudar" />
            <PageHeader 
                title="Estes são so proffys disponíveis."
                description= "Utilize das opções abaixo para filtrar sua busca."
            >
            <img src={smile} alt="Rocket" />
            <span>Nós temos 200 professores.</span>
            </PageHeader>
            <FilterBox>
                <InputRow>
                    <Select                         
                        name="subject"
                        label="Matéria"
                        options={options.subjects}
                    />
                </InputRow>
                <InputRow>
                    <Select                         
                        name="week_day"
                        label="Dia da semana"
                        options={options.weekDay}
                    />
                    <Input 
                        type="time"
                        name="time"
                        label="Horário"
                    />
                </InputRow>
            </FilterBox>
            <TeacherList>          
                { teachers.map((teacher: Teacher) => {
                   return <TeacherItem key={teacher.id} teacher={teacher} />
                })}      
            </TeacherList>            
        </PageContainer>       
    )
}

export default TeacherListPage