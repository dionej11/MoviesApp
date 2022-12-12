import Styled from 'styled-components';
import GlobalStyle from '../../styles/globalvar.js';

export const INFO_COLLECTION__section = Styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
    color: ${GlobalStyle.COLORS.Blanco};
`
export const COLOR__CONTAINER = Styled.div`
    display: flex;
    align-items: center;
    & svg {
        transform: rotate(-90deg);
        cursor: pointer;
    }
`
export const COLOR = Styled.div`
    width: 1.3rem;
    height: 1.3rem;
    background: ${props => props.color};
    border-radius: 100%;
    margin-right: 10px;
`
export const HEADER_EDITED__head = Styled.header`
    width: 100%;
    height: 4rem;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 0 1rem;
    align-content: center;
    align-items: center;

    & p {
        width: max-content;
        background: none;
        border: none;
        color: white;
        font-size: 1.3rem;
        text-align: center;
        font-family: 'Fira Sans', sans-serif;
    }
`