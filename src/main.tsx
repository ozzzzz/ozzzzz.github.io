import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Title, Text, createTheme, MantineColorsTuple, MantineProvider, Anchor } from '@mantine/core'
import '@mantine/core/styles.css'
import './main.css'
import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

const mainColor: MantineColorsTuple = [
  '#f9f5eb',
  '#eae8e2',
  '#d0cec9',
  '#bdbbb6',
  '#9f9c96',
  '#918e87',
  '#8a877e',
  '#78746b',
  '#6b675c',
  '#5e584a'
];

const theme = createTheme({
  colors: {
    mainColor,
  },
  primaryColor: 'mainColor',
  primaryShade: 9,
  fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  defaultRadius: 'md',
  other: {
    logoFont: '"Dancing Script", cursive'
  },
  components: {
    Text: Text.extend({
      defaultProps: {
        size: 'lg',
      }
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        td: "underline",
        fw: 700,
        c: 'mainColor.9',
      }
    }),
  }
})

createRoot(rootElement).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
)
