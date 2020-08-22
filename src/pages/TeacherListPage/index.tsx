import React, { useState  } from 'react'

import PageHeader from '../../components/PageHeader'
import NavBar from '../../components/NavBar'

import PageContainer from '../../components/PageContainer'
import InputSmall from '../../components/InputSmall'
import Select from '../../components/Select'
import TeacherItem from '../../components/TeacherItem'

import smile from '../../assets/images/icons/smile.svg'

// import api from '../../services/api'

import { TeacherList, FilterBox, InputRow } from './styles'

import options from '../../utils/options'

function TeacherListPage() {
    // const [ subject, setSubject ] = useState('')
    // const [ week_day, setWeekDay ] = useState('')
    // const [ time, setTime ] = useState('')

    // const [ teachers, setTeachers ] = useState([])

    // async function searchTeachers(event: FormEvent){
    //     event.preventDefault()

    //     const response = await api.get('/classes', {
    //         params: {
    //             subject,
    //             week_day,
    //             time
    //         }
    //     })
    //     setTeachers(response.data)
    // }

    const teacher = options.teacher

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
                    <InputSmall 
                        type="time"
                        name="time"
                        label="Horário"
                    />
                </InputRow>
            </FilterBox>
            <TeacherList>
                <TeacherItem key="1" teacher={teacher} />
                <TeacherItem key="1" teacher={teacher} />
                <TeacherItem key="1" teacher={teacher} />
                <TeacherItem key="1" teacher={teacher} />
                <TeacherItem key="1" teacher={teacher} />
            </TeacherList>            
        </PageContainer>       
    )
}

export default TeacherListPage