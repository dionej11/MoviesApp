import Styled from 'styled-components';
import GlobalStyle from '../../styles/globalvar';

export const CONTAINER = Styled.section`
    margin: 3rem 2rem;
`
export const TEXT_CHALLENGE__p = Styled.p`
    color: ${GlobalStyle.COLORS.Blanco};
    font-size: 1rem;
`
export const COLLECTION = Styled.div`
    width: fit-content;
    padding: 0.3rem 1rem;
    border-radius: 20px;
    background: ${props => props.color}; 
    color: ${GlobalStyle.COLORS.Negro};
    font-size: 1rem;
    cursor:pointer;
`
export const CONTAINER_COLLECTIONS__div = Styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    gap: 15px;
`

