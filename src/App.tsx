import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppShell, useMantineTheme } from '@mantine/core'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

const App = () => {
  const theme = useMantineTheme()

  return (
    <BrowserRouter>
      <AppShell padding="md" header={{ height: 72 }} withBorder={false}>
        <AppShell.Header>
          <Navigation />
        </AppShell.Header>

        <AppShell.Main style={{ backgroundColor: theme.colors.sage[0], minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
