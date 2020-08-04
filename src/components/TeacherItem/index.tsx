import React from 'react'
import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

interface TeacherItemProps {
    avatar: string,
    teacher: string,
    subject: string,
    description: string,
    price: number,
    whatsapp: string,
}

const TeacherItem: React.FC<TeacherItemProps>= (props) => {
    return(
        <article className="teacher-item">
                    <header>
                        <img src={props.avatar} alt="Avatar"/>
                        <div>
                            <strong>{props.teacher}</strong>
                            <span>{props.subject}</span>
                        </div>
                    </header>
                    <p>{props.description}</p>
                    <footer>
                        <p>
                            Preço/Hora<strong>R$ {props.price}</strong>
                        </p>
                        <button type="button" onClick={() => {}}>
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem