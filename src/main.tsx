import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Title, Text, createTheme, MantineColorsTuple, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import './main.css'
import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

const primaryColors: MantineColorsTuple = [
  "#fff1eb",
  "#fae1d4",
  "#f9bfa2",
  "#f99a6c",
  "#f97c3f",
  "#fa6924",
  "#fa5f18",
  "#df4f0d",
  "#c74508",
  "#bb3e00"
]

const secondaryColors: MantineColorsTuple = [
  "#fff6e0",
  "#ffebcc",
  "#fcd59d",
  "#f9be69",
  "#f7ad45",
  "#f59d21",
  "#f59710",
  "#da8301",
  "#c37300",
  "#aa6200"
]

const accentColors: MantineColorsTuple = [
  "#eef8f0",
  "#e3eae5",
  "#c8d2ca",
  "#abb9ae",
  "#92a496",
  "#829786",
  "#78907e",
  "#657c6a",
  "#59705e",
  "#48614e"
]

const lightAccentColors: MantineColorsTuple = [
  "#ecf9ef",
  "#e1ece3",
  "#c5d5c9",
  "#a2b9a7",
  "#8da893",
  "#7c9c83",
  "#73957a",
  "#608268",
  "#54745b",
  "#44654b"
]


const theme = createTheme({
  colors: {
    primary: primaryColors,
    secondary: secondaryColors,
    accent: accentColors,
    lightAccent: lightAccentColors
  },
  primaryColor: 'primary',
  primaryShade: 9,
  fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  defaultRadius: 'md',
  other: {
    logoFont: '"Dancing Script", cursive'
  },
  components: {
    Title: Title.extend({
      defaultProps: {
        c: 'accent'
      }
    }),
    Text: Text.extend({
      defaultProps: {
        c: 'accent',
        size: 'lg',
      }
    }),
    TextSelected: Text.extend({
      defaultProps: {
        c: 'primary',
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
