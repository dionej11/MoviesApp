import Styled from 'styled-components';
import GlobalStyle from '../../styles/globalvar.js';

export const CONTENT__div = Styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    margin 1rem;
    padding-left: 1rem;
`
export const CONTENTIMAGE__div = Styled.div`
    width: 20%;
    margin-right: 1rem;
    & img{
        border-radius: 5rem;
    }
`
export const CONTENTINFO__div = Styled.div`
    width: 80%;
`

export const TEXTTITLE__p = Styled.p`
    font-size: ${GlobalStyle.FONT_SIZES.Mediana};
    color: ${GlobalStyle.COLORS.Blanco};
    font-weight: 600;
    margin-bottom:0.2rem;
`
export const TEXTTITLETWO__p = Styled.h1`
    font-size: ${GlobalStyle.FONT_SIZES.Mediana};
    color: ${GlobalStyle.COLORS.Blanco};
    font-weight: 100;
    margin-top:0.3rem;
`
export const CONTENTBUTTON__div = Styled.div`
    position: fixed;
    bottom: 0.03rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    padding: 0 10px;
    box-sizing: border-box;
    margin: 0 auto;
    z-index: 99;
    background: ${GlobalStyle.COLORS.Morado};
`

export const NEWCOLLECTION__button = Styled.button`
    background: transparent;
    border: none;
    color: ${GlobalStyle.COLORS.Blanco};
    font-size: ${GlobalStyle.FONT_SIZES.Grande};
    font-family: 'Fira Sans', sans-serif;
`
