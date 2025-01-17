import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import theme from './assets/styles/themes/default';
import GlobalStyles from './assets/styles/global';
import Routes from './routes';
import { Header } from './components/Header';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes />
    </ThemeProvider>
  </StrictMode>,
)
