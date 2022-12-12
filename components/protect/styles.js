import Styled from 'styled-components';
import GlobalStyle from '../../styles/globalvar';

export const CONTAINER__div = Styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    color: ${GlobalStyle.COLORS.Blanco};

    & a {
        width: 15rem;
        height: 2rem;
        background: ${GlobalStyle.COLORS.Morado};
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`