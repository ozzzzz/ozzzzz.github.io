import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, MantineProvider, MantineColorsTuple } from '@mantine/core'
import '@mantine/core/styles.css'
import './main.css'
import App from './App.jsx'

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const listOfColors: MantineColorsTuple = [
  '#dffbff',
  '#caf2ff',
  '#99e2ff',
  '#64d2ff',
  '#3cc4fe',
  '#23bcfe',
  '#00b5ff',
  '#00a1e4',
  '#008fcd',
  '#007cb6'
];

const theme = createTheme({
  colors: { listOfColors },
});

createRoot(rootElement).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
)
