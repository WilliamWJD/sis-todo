import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        -webkit-font-smoothing:antialiased;
    }

    body, input, button{
       font-family: 'Inter', sans-serif; 
       background-color: ${props => props.theme.colors.gray_600};
    }
    
      
    button{
        cursor: pointer;
    }
`;