import React, { useState, useEffect } from 'react';

import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import logoImg from '../../assets/images/logo.svg'

import HomeHeader from '../../components/HomeHeader'

import { 
    HomeWrapper,
    HomeGrid,
    LogoAside,
    HeroAside,
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
            const { email, avatar } = JSON.parse(data)
            setUser(email)
            setAvatar(avatar || 'https://avatars3.githubusercontent.com/u/54812906?s=400&u=230c6ae207fa7fd5735456ef3011c8771549c8cb&v=4')
        }
        
    }, [])    
    
    return (     
        <HomeWrapper>
            <HomeGrid>
                {user &&
                    <HomeHeader avatar={avatar} username={user} />
                }
                <LogoAside>
                    <div>
                        <img src={logoImg} alt="Proffy-logo"/>
                        <h1>Sua plataforma de estudos online.</h1>
                    </div>
                </LogoAside>
                <HeroAside src={landingImg} />
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
            </HomeGrid>
        </HomeWrapper>
    );
}

export default Landing;
