import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 72px;
    background-color: ${props => props.theme.colors.gray_500};
    border-radius: 8px;
    max-width: 736px;

    padding: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:nth-child(n){
        margin-top: 12px;
    }

    >div{
        display: flex;
        align-items: center;

        span{
            font-size: 14px;
            color: ${props => props.theme.colors.gray_100};
            margin-left: 12px;
            margin-right: 12px;
        }
    }

    button {
        border: none;
        background-color: transparent
    }
`;
