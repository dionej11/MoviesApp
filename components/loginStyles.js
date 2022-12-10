import Styled from 'styled-components';
import GlobalStyle from '../styles/globalvar';

export const CONTAINER__div = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
`
export const WELCOME_TEXT__p = Styled.p`
    color: ${GlobalStyle.COLORS.Blanco};
    font-size: 1.2rem;
    text-align: center;
    margin: 3rem 0;
`
export const CONTAINER_movies__div = Styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 5px;
    width: 100%;
    height: 15rem;
    & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
export const BTN_GOOGLE__button = Styled.button`
    width: 100%;
    height: 2.5rem;
    border-radius: 5px;
    background-color: ${GlobalStyle.COLORS.Morado};
    color: ${GlobalStyle.COLORS.Blanco};
    font-family: 'Fira Sans', sans-serif;
    font-size: 1rem;
    cursor: pointer;
    margin: 3rem 0;
`