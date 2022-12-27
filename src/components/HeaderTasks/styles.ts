import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 736px;
    margin-top: 65px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BoxTasks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    strong{
        font-size: 14px;
        color: ${props => props.theme.colors.blue};
    }

    p{
        font-size: 12px;
        color: ${props => props.theme.colors.gray_200};
        background-color: ${props => props.theme.colors.gray_400};
        padding: 2px 8px;
        border-radius: 999px;
        margin-left: 8px;
    }
`;

export const BoxCompleted = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    strong{
        font-size: 14px;
        color: ${props => props.theme.colors.purple};
    }

    p{
        font-size: 12px;
        color: ${props => props.theme.colors.gray_200};
        background-color: ${props => props.theme.colors.gray_400};
        padding: 2px 8px;
        border-radius: 999px;
        margin-left: 8px;
    }
`;
