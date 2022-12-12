import Styled from 'styled-components';
import GlobalStyle from '../../styles/globalvar.js';

export const CONTENT__div = Styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 0 1rem;
    /* margin-top: 1rem;
    margin-left: 30px;
    margin-bottom: 1.5rem; */
`
export const BACK__button = Styled.button`
    background: transparent;
    border: none;
    width: fit-content;
    cursor: pointer;
`
export const LOGOUT__button = Styled.button`
    background: transparent;
    border: none;
    color: ${GlobalStyle.COLORS.Blanco};
    font-size: 1rem;
    font-family: 'Fira Sans', sans-serif;
    text-align: end;
    cursor: pointer;
`
export const TEXTTITLE__p = Styled.p`
    font-size: ${GlobalStyle.FONT_SIZES.Grande};
    color: ${GlobalStyle.COLORS.Blanco};
    font-weight: 600;
    text-align: center;
`