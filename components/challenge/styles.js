import Styled from 'styled-components';
import GlobalStyle from '../../styles/globalvar';

export const CONTAINER = Styled.div`
    margin: 3rem 2rem;
`
export const TEXT_CHALLENGE__p = Styled.p`
    color: ${GlobalStyle.COLORS.Blanco};
    font-size: 1rem;
`
export const RANGE_CON__div = Styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    color: ${GlobalStyle.COLORS.Blanco};
    & button {
        border: none;
        background: none;
        color: ${GlobalStyle.COLORS.Blanco};
        font-family: 'Fira Sans', sans-serif;
        text-decoration: underline;
        cursor: pointer;
    }
`
export const RANGE__progress = Styled.progress`
    width: 100%;
`