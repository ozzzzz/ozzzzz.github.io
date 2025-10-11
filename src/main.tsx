import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Title, Text, createTheme, MantineColorsTuple, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import './main.css'
import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

const emberColors: MantineColorsTuple = [
  '#FFF4EC',
  '#FFE3D3',
  '#FFC9AC',
  '#FFAD83',
  '#FF935B',
  '#F77736',
  '#BB3E00',
  '#9F3500',
  '#832B00',
  '#651F00'
]

const sunriseColors: MantineColorsTuple = [
  '#FFF6E8',
  '#FFE8C7',
  '#FFD4A0',
  '#FFC072',
  '#FFAC44',
  '#F7AD45',
  '#D98B1A',
  '#B26C11',
  '#8B4E0A',
  '#5C3204'
]

const pineColors: MantineColorsTuple = [
  '#EEF4F0',
  '#DCE5DF',
  '#C7D4CA',
  '#B0C2B4',
  '#99AF9F',
  '#829B88',
  '#657C6A',
  '#516257',
  '#3E4942',
  '#28312B'
]

const sageColors: MantineColorsTuple = [
  '#F3F7F4',
  '#E3EDE5',
  '#D4E2D6',
  '#C3D6C6',
  '#B0C9B4',
  '#A2B9A7',
  '#8CA492',
  '#74897A',
  '#5B6D61',
  '#415147'
]

const theme = createTheme({
  colors: {
    ember: emberColors,
    sunrise: sunriseColors,
    pine: pineColors,
    sage: sageColors
  },
  primaryColor: 'ember',
  primaryShade: 6,
  fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  defaultRadius: 'md',
  other: {
    logoFont: '"Dancing Script", cursive'
  },
  components: {
    Title: Title.extend({
      defaultProps: {
        c: 'pine.9'
      }
    }),
    Text: Text.extend({
      defaultProps: {
        c: 'pine.6',
        size: 'lg',
      }
    }),
    TextSelected: Text.extend({
      defaultProps: {
        c: 'ember',
        size: 'lg',
      }
    })
  }
})

createRoot(rootElement).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
)
