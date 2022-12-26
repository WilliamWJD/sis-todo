import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 736px;
    display: flex;
    justify-content: space-between;

    input{
        width: 638px;
        padding: 16px 0 16px 16px;
        background-color: ${props => props.theme.colors.gray_500};
        color: ${props => props.theme.colors.gray_100};
        border: none;
        border-radius: 8px;
    }
    
    button{
        width: 90px;
        padding: 16px;
        border: none;
        color: ${props => props.theme.colors.gray_100};
        font-size: 14px;
        background-color: ${props => props.theme.colors.blueDark};
        border-radius: 8px;
        transition: background-color 0.2s;
    }

    button:hover{
        background-color: ${props => props.theme.colors.blue};
    }
`;