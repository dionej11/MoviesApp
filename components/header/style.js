import Styled from 'styled-components';
import GlobalStyle from '../../styles/globalvar.js';

export const CONTENT__div = Styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    margin-left: 30px;
    margin-bottom: 1.5rem;
`
export const BACK__button = Styled.button`
    background: transparent;
    border: none;
`
export const TEXTTITLE__p = Styled.p`
    font-size: ${GlobalStyle.FONT_SIZES.Grande};
    color: ${GlobalStyle.COLORS.Blanco};
    font-weight: 600;
`