import React, { useState, FormEvent } from 'react'

import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import NavBar from '../../components/NavBar'
import Form from '../../components/Form'
import FormSection from '../../components/FormSection'
import InputMedium from '../../components/InputMedium'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import Footer from '../../components/Footer'

import rocketIcon from '../../assets/images/icons/rocket.svg'

import {
    GiveClassesPageWrapper,
    Profile,
    FormContainer,
    InputRow,
    UserInfo,
    Avatar,
    UserName,
    ScheduleList,
    ScheduleItem,
    ScheduleItemRemoveButton,
} from './styles'

import options from '../../utils/options'
import InputSmall from '../../components/InputSmall'

// import api from '../../services/api'


function GiveClassesPage() {
    const history = useHistory()

    const [ scheduleItems, setScheduleItems ] = useState([
        { week_day: 0, from: '', to: ''},
    ])

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems, 
            { week_day: 0, from: '', to: '' }
        ])
    }

    // setScheduleItemValue(0, 'week_day', '2)
    function setScheduleItemValue(position: number, field: string, value: string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return { ...scheduleItem, [field]: value}
            }
            return scheduleItem
        })  
        
        setScheduleItems(updatedScheduleItems)      
    }

    async function handleCreateClass(event: FormEvent){
        event.preventDefault()
        console.log('aeHOO')
        // await api.post('/classes',{
        //     name,
        //     avatar,
        //     whatsapp,
        //     bio,
        //     subject,
        //     cost: Number(cost),
        //     schedule: scheduleItems
        // }).then(() => {
        //     alert('Cadastro realizado com sucesso!')
        //     history.push('/')

        // }).catch((e) => {
        //     alert('Houve um erro no seu cadastro!')

        // })
    }

    return (
        <GiveClassesPageWrapper>
            <NavBar title="Dar aulas" />
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description= "O primeiro passo, é preencher esse formulário de inscrição."
            >
            <img src={rocketIcon} alt="Rocket" />
            <span>Prepare-se!<br/>Vai ser o máximo</span>
            </PageHeader>
            <Profile>
                <Form onSubmit={handleCreateClass}>
                    <FormContainer>
                        <FormSection title="Seus dados">
                            <InputRow>
                                <UserInfo>
                                    <Avatar src="https://avatars3.githubusercontent.com/u/54812906?s=460&u=230c6ae207fa7fd5735456ef3011c8771549c8cb&v=4" />
                                    <UserName>Bruno Mariani</UserName>
                                </UserInfo>
                                <InputMedium
                                    type="number"
                                    name="whatsapp"
                                    label="Whatsapp"
                                />
                            </InputRow>
                            <InputRow>
                                <Textarea
                                    name="bio"
                                    label="Biografia"                                    
                                    subLabel="(Máximo de 300 caracteres)"
                                />
                            </InputRow>
                        </FormSection>
                        <FormSection title="Sobre a aula">
                            <InputRow>
                                <Select 
                                    name="subject"
                                    label="Matéria"
                                    options={options.subjects}
                                /> 
                                <InputMedium 
                                    type="number"
                                    label="Custo da sua hora/aula"
                                    name="cost"
                                />                                   
                            </InputRow>
                        </FormSection>
                        <FormSection title="Horários disponíveis">
                            <ScheduleList>
                                <ScheduleItem>
                                    <InputRow>
                                        <Select 
                                            name="week_day"
                                            label="Dia da semana"
                                            options={options.weekDay}
                                        />
                                        <InputSmall 
                                            type="time"
                                            label="De"
                                            name="from"
                                        />
                                        <InputSmall 
                                            type="time"
                                            label="Até"
                                            name="to"
                                        />
                                    </InputRow>
                                    <ScheduleItemRemoveButton>X</ScheduleItemRemoveButton>
                                </ScheduleItem>
                            </ScheduleList>
                        </FormSection>
                    </FormContainer>
                    <Footer />
                </Form>
            </Profile>            
        </GiveClassesPageWrapper>
    )
}

export default GiveClassesPage


{/* <main>
                <form onSubmit={handleCreateClass}>            
                    <fieldset>
                        <legend>Seus dados</legend>    
                        <Input
                            name="name"
                            label="Nome Completo"
                            required
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <Input
                            name="avatar"
                            label="Link da sua foto"
                            subLabel="(comece com http://)"
                            required
                            value={avatar}
                            onChange={(event) => setAvatar(event.target.value)}
                        />
                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                            subLabel="(somente números)"
                            required
                            value={whatsapp}
                            onChange={(event) => setWhatsapp(event.target.value)}
                        />     
                        <Textarea 
                            name="bio"
                            label="Biografia"
                            required
                            value={bio}
                            onChange={(event) => setBio(event.target.value)}
                        />
                    </fieldset>               
                    <fieldset>
                        <legend>Sobre a aula</legend>    
                        <Select
                            name="subject"
                            label="Matéria"
                            required
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                            options={[
                                { value: 'Artes', label: 'Artes'},
                                { value: 'Biologia', label: 'Biologia'},
                                { value: 'Química', label: 'Química'},
                                { value: 'Física', label: 'Física'},
                                { value: 'Matemática', label: 'Matemática'},
                                { value: 'Português', label: 'Português'},
                                { value: 'Inglês', label: 'Inglês'},
                            ]}
                        />
                        <Input
                            name="cost"
                            label="Custo da sua hora/aula"
                            required
                            value={cost}
                            onChange={(event) => setCost(event.target.value)}
                        />                     
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                        </legend>
                        {
                            scheduleItems.map((scheduleItem, index) => {
                                return (
                                    <div key={scheduleItem.week_day} className="schedule-item">
                                        <Select
                                            name="week_day"
                                            label="Dia da semana"
                                            required
                                            value={scheduleItem.week_day}
                                            onChange={event => setScheduleItemValue(index, 'week_day', event.target.value)}
                                            options={[                            
                                                { value: '0', label: 'Domingo'},
                                                { value: '1', label: 'Segunda-feira'},
                                                { value: '2', label: 'Terça-feira'},
                                                { value: '3', label: 'Quarta-feira'},
                                                { value: '4', label: 'Quinta-feira'},
                                                { value: '5', label: 'Sexta-feira'},
                                                { value: '6', label: 'Sábado'},
                                            ]}                                            
                                        />
                                        <Input
                                            name="from"
                                            label="Das"
                                            type="time"
                                            required
                                            value={scheduleItem.from}
                                            onChange={(event) => setScheduleItemValue(index, 'from', event.target.value)}
                                        /> 
                                        <Input
                                            name="to"
                                            label="Até"
                                            type="time"
                                            required
                                            value={scheduleItem.to}
                                            onChange={(event) => setScheduleItemValue(index, 'to', event.target.value)}
                                        /> 
                                    </div>
                                )
                            })
                        }
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            <span>
                                Importante!<br />
                                Preencha todos os dados
                            </span>    
                        </p>   
                        <button type="submit">Salvar cadastro</button>
                    </footer>  
                </form>             
            </main> */}