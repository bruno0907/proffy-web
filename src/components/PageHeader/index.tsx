import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <Link to="/">
                    <img src={logoImg} alt="Proffy"/>
                </Link>
            </div>
            <div className="header-content">
                <h1>{props.title}</h1>
                
                {props.description && 
                    <p>{props.description}</p>
                }
                                
                {props.children}
            </div>
        </header>
    )
}

export default PageHeader