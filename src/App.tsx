import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from '@mantine/core'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {

  return (
    <BrowserRouter>
      <AppShell padding="md" withBorder={false}>
        <Navigation />

        <AppShell.Main style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
