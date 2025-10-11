import { Button, Container, Group, Stack } from '@mantine/core'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container size="lg" py="xl">
      <Stack align="center" justify="center" style={{ minHeight: '70vh' }}>
        <Group gap="sm" wrap="wrap" justify="center">
          <Button component={Link} to="/about" radius="xl" color="ember">
            About me
          </Button>
          <Button component={Link} to="/contact" variant="light" radius="xl" color="pine">
            Contacts
          </Button>
        </Group>
      </Stack>
    </Container>
  )
}

export default Home
