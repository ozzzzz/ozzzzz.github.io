import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Title } from '@mantine/core'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={
            <Container py={60}>
              <Title order={1} ta="center">Projects - Coming Soon</Title>
            </Container>
          } />
          <Route path="/contact" element={
            <Container py={60}>
              <Title order={1} ta="center">Contact - Coming Soon</Title>
            </Container>
          } />
        </Routes>
      </Navigation>
    </Router>
  )
}

export default App
