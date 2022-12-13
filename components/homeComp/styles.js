import Styled from 'styled-components';
import GlobalStyle from '../../styles/globalvar.js';

export const CONTAINER__div = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    margin-bottom: 3rem;
`

export const MINI_TEXT__p = Styled.p`
    width: 100%;
    color: #F1F1F1;
    text-align: initial;
    font-size: 1rem;
    margin: 2rem 0;;
`
export const MOVIES__section = Styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* margin: 3rem 0; */
`
export const MOVIE__div = Styled.div`
    margin: 2rem 0;;
    background: white;
    width: 100%;
    height: 12rem;
    display: grid;
    grid-template-columns: 2fr 2fr 0.5fr;
    gap: 15px;
    padding: 1rem;
    box-sizing: border-box;
    justify-content: space-between;
    border-radius: 10px;
    color: ${GlobalStyle.COLORS.Negro};
    align-items: flex-start;
`
export const CONTENT_BTN = Styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
`
export const ADD__BTN__div = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background: ${props => props.color? props.color: GlobalStyle.COLORS.Morado};
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
`
export const ADD__button = Styled.button`
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    color: ${GlobalStyle.COLORS.Blanco};
    font-size: 1.5rem;
    cursor:pointer;
    /* align-self: end; */
`
export const INFO__div = Styled.div`
    text-align: left;
    & h4, p {
        font-size: 15px;
        margin: 0;
    }
    & h4{
        margin-bottom: 5px;
        text-transform: uppercase;
    }
`
export const PHOTO_MOVIE__div = Styled.div`
    position: relative;
    top: -35px;
    height: 12rem;
    border-radius: 10px;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`
export const MORE_MOVIES__button = Styled.button`
    font-size: 1.2rem;
    cursor: pointer;
    text-decoration: underline;
    font-family: 'Fira Sans', sans-serif;
    background: none;
    border: none;
    color: ${GlobalStyle.COLORS.Blanco};
`