import React, { useState, useEffect } from 'react';

import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import ProfileHeader from '../../components/ProfileHeader'
import LogoLanding from '../../components/LogoLanding'

import { 
    LoginWrapper,
    Container,
    HeroSide,
    Welcome,
    Connections,
    Buttons,  
    Study,
    GiveClass,
  } from './styles'

import api from '../../services/api'

const Landing: React.FC = () => {
    const [ totalConnections, setTotalConnections] = useState(0)
    const [ user, setUser ] = useState('')
    const [ avatar, setAvatar ] = useState('')

    useEffect(() => {
        api.get('/connections').then(response => {
            const { total } = response.data
            setTotalConnections(total)
        }) 
        
        const data = localStorage.getItem('@proffy') 

        if(data){
            const { name, avatar } = JSON.parse(data)
            setUser(name)
            setAvatar(avatar || 'https://avatars3.githubusercontent.com/u/54812906?s=400&u=230c6ae207fa7fd5735456ef3011c8771549c8cb&v=4')
        }
        
    }, [])    
    
    return (     
        <LoginWrapper>
            <Container>
                {user &&
                    <ProfileHeader avatar={avatar} username={user} />
                }
                <LogoLanding title="Sua plataforma de estudos online." />
                <HeroSide src={landingImg} />
                <Welcome>
                    Seja bem vindo.<br /><b>O que deseja fazer?</b>
                </Welcome>
                <Buttons>
                    <Study to="/study">
                        <img src={studyIcon} alt="Study-button" />
                        Estudar
                    </Study>
                    <GiveClass to="/give-classes">
                        <img src={giveClassesIcon} alt="GiveClass-button"/>
                        Dar Aulas
                    </GiveClass>
                </Buttons>
                <Connections>
                    Total de: {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </Connections>
            </Container>
        </LoginWrapper>
    );
}

export default Landing;
