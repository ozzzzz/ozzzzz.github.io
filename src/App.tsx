import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Title } from '@mantine/core'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import ProfileBrief from './pages/ProfileBrief'
import ProfileDetailed from './pages/ProfileDetailed'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/brief" element={<ProfileBrief />} />
          <Route path="/profile/detailed" element={<ProfileDetailed />} />
          <Route path="/projects" element={
            <Container py={60}>
              <Title order={1} ta="center">Projects - Coming Soon</Title>
            </Container>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Navigation>
    </Router>
  )
}

export default App
