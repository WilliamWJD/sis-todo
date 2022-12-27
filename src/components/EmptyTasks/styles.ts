import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 736px;
    padding: 64px 24px;
    margin-top: 24px;
    border-top: 1px solid #333333;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    strong{
        margin-top: 16px;
        color: ${props => props.theme.colors.gray_300}
    }

    span{
        margin-top: 5px;
        color: ${props => props.theme.colors.gray_300}
    }
`;
