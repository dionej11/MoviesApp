import Styled from 'styled-components';

const CONTAINER__div = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
  `
export const Container = ({children}) => {
    return (
        <CONTAINER__div>
            {children}
        </CONTAINER__div>
    )
}