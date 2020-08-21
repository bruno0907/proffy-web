import React from 'react'

import {
    HeaderWrapper,
    HeaderContainer,
    HeaderAside,
    HeaderContent,
} from './styles'

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, children }) => {
    return(
        <HeaderWrapper>            
            <HeaderContainer>
                <HeaderAside>
                <h1>{title}</h1>                
                    {description && 
                        <p>{description}</p>
                    }
                </HeaderAside>            
                <HeaderContent>
                    {children}
                </HeaderContent>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default PageHeader