import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import power from '../../assets/images/icons/power.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import api from '../../services/api'

import './styles.css'

function Landing(){
    const [ totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('/connections').then(response => {
            const { total } = response.data
            setTotalConnections(total)
        })        
    }, []);

    return (
        <div id="page-lading" className="landing">            
            <div id="page-landing-content" className="container">
                <div className="home-header">
                    <Link to="/" className="profile-button">
                        <img src="https://avatars3.githubusercontent.com/u/54812906?s=460&u=230c6ae207fa7fd5735456ef3011c8771549c8cb&v=4" alt="" className="avatar"/>
                        <span className="user-name">Bruno Mariani</span>
                    </Link>
                    <button className="logout-button"><img src={power} alt="Logout"/></button>
                </div>
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua pataforma de estudos online.</h2>
                </div>
                <img src={landingImg} alt="Landing" className="hero-image"/>

                <span className="cta">Seja bem vindo.<br /><b>O que deseja fazer?</b></span>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas"/>
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de: {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>

            </div>
        </div>
    );
}

export default Landing;
