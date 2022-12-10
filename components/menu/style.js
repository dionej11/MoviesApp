import Styled from 'styled-components';

export const CONTAINER__nav = Styled.nav`
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0.03rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    padding: 0 10px;
    margin: 0 auto;
    z-index: 99;
    backdrop-filter: blur(2px);
    background-color: rgb(32 35 46 / 86%);
`