import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'


function TeacherList() {
    const teacher = {
        avatar: 'https://picsum.photos/400',
        teacher: 'Nome do professor',
        subject: 'Matéria do professor',
        description: 'Uma breve introdução do professor. Uma descrição mais detalhada das qualidades e experiências do professor',
        price: 40.75,
        whatsapp: '47999887766'
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os professores disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subect"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="subect"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>
            <main>
                <TeacherItem 
                    avatar={teacher.avatar}
                    teacher={teacher.teacher}
                    subject={teacher.subject}
                    description={teacher.description}
                    price={teacher.price}
                    whatsapp={teacher.whatsapp}

                />
            </main>

        </div>
    )
}

export default TeacherList