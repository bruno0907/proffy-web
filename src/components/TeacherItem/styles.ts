import styled from 'styled-components';

interface AvatarProps{
  img: string;
}

export const TeacherCard = styled.article`
    background: var(--color-box-base);
    border: solid 1px var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;
`

export const CardHeader = styled.header`
    padding: 3.2rem 2.5rem;
    display: flex;
    align-items: center;
`

export const Avatar = styled.div<AvatarProps>`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-image: url(${(props: AvatarProps) => props.img});
    background-size: cover;
    flex-shrink: 0;
`

export const Profile = styled.div`
    margin-left: 2.4rem;
`

export const Name = styled.strong`
    font: 700 2.4rem Archivo;
    display: block;
    color: var(--color-text-title);
`

export const Subject = styled.span`
    font-size: 1.4rem;
    display: block;
    color: var(--color-text-base);
    margin-top: 0.4rem;

      @media(min-width: 50rem){
        font-size: 1.6rem;
      }
`

export const CardBody = styled.p`
    padding: 0 2.5rem 3.2rem;    
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-base);
    border-bottom: solid 1px var(--color-line-in-white);

    @media(min-width: 50rem){        
        /* padding: 3rem 3.2rem; */
        font-size: 1.6rem;
      }
`

export const ScheduleList = styled.ul`
  width: 100%;
  padding: 1rem 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: none;

    >div{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;

        >span{                        
          text-align: center;
          font-size: 1.2rem;
          color: var(--color-text-in-complement);
          width: 8rem;
        }
    }

    @media(min-width: 50rem){
      padding: 3.2rem 2rem;
      align-items: center;
      justify-content: flex-start;

      >div{
        display: none;
      }

      > li + li {
        margin-left: 1rem;
      }
    }
  `

export const ScheduleItem = styled.li`
  width: 100%;
  height: 4.5rem;
  border: solid 1px var(--color-line-in-white);
  background: var(--color-box-footer);
  border-radius: 0.8rem;
  display: flex;  
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin-bottom: 1rem;
  position: relative;
  cursor: pointer;
  transition: opacity 0.2s;

    &:hover{
      opacity: 0.8;
    }
  
    >strong{
      font-family: Archivo;
      font-size: 1.6rem; 
      line-height: 1.8rem;
      color: var(--color-text-base);
      text-align: left;      
      width: 7rem;      

      >span{
        display: none;
      }
    }

    >img{
      margin: auto;
      width: 8rem;      
    }

  @media(min-width: 50rem){    
    width: 11rem;
    height: 13rem;    
    flex-direction: column;
    align-items: flex-start;    
    justify-content: space-between;
    padding: 1.8rem 1.2rem;
    margin: 0;

      >strong{                
        display: flex;
        flex-direction: column;

        >span{
          display: block;
          font-size: 1.2rem;
          font-weight: 300;
          color: var(--color-text-complement);
        }
      }

      >img{
        display: none;
      }
  }
`

export const CardFooter = styled.footer`
    padding: 2rem 0;
    background: var(--color-box-footer);
    border-top: solid 1px var(--color-line-in-white);    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

      @media(min-width: 45rem){
        flex-direction: row;
        padding: 4rem 0;
      }
`

export const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;    
  padding: 0 3rem;
  
  >span{
    font-size: 1.4rem;
    line-height: 1.6rem;
    margin-right: 2rem;
  }

  >strong{
    color: var(--color-primary);
    font-size: 1.8rem;  
    line-height: 2rem;
    font-family: Archivo;
  }

  @media(min-width: 45rem){     
    width: 40rem;
    display: flex;    
    align-items: center;
    justify-content: flex-start;
    margin: 0;    
    padding: 0;

    >span{
      font-size: 1.5rem;      
    }

    >strong{      
      font-size: 2.1rem; 
    }                 
    
  }

`

export const WhatsappButton = styled.a`
    width: 18rem;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border-radius: 0.8rem;
    font-family: Archivo;
    font-size: 1.4rem;
    font-weight: 700;    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.2;
    text-decoration: none;

      &:hover{
        background: var(--color-secundary-dark);
      }

      @media(min-width: 50rem){
        width: 25rem;
        font-size: 1.6rem;
        justify-content: center;

        > img{
          margin-right: 1.6rem;
        }
      }
`

