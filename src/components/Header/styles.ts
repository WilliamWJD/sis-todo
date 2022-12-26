import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 200px;
    background-color: ${props => props.theme.colors.gray_700};

    display: flex;
    align-items: center;
    justify-content: center;
`;