import { Home } from "./pages/Home";
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import { GlobalStyles } from './styles/globalStyle';

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </>
  )
}