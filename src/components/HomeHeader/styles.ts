import styled from 'styled-components';

export const Username = styled.span`
    font-size: 1.4rem;
    color: var(--color-text-in-primary);
`
export const Wrapper = styled.div`
  grid-area: profile-header;
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;  
  align-self: center;
  padding: 0 2rem;

  > a{
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover > ${Username}{
      opacity: .8;
    }
  }
`
export const Avatar = styled.img`
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 2.5rem;
    margin-right: 1.5rem;
`


export const SignOutButton = styled.div`
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 0.8rem;
    background: var(--color-primary-dark);    
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color .2s;
    cursor: pointer;
    flex-shrink: 0;

    &:hover{
      background: var(--color-primary-darker);
    }
`
