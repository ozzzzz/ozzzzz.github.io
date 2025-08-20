import { Container, Title, Text, Button, Group, Stack } from '@mantine/core'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Container size="md" py={80}>
      <Stack align="center" spacing="xl">
        <div style={{ textAlign: 'center' }}>
          <Title 
            order={1} 
            size="3.5rem" 
            weight={600}
            style={{ 
              lineHeight: 1.1,
              marginBottom: '2rem'
            }}
          >
            Welcome to my personal website
          </Title>
          
          <Text 
            size="xl" 
            color="dimmed"
            style={{ 
              maxWidth: '600px',
              marginBottom: '3rem'
            }}
          >
            I'm a developer passionate about creating amazing web experiences. 
            Explore my work and get to know more about me.
          </Text>
        </div>
        
        <Group spacing="lg">
          <Button 
            component={Link} 
            to="/about" 
            size="lg"
            variant="filled"
          >
            Learn more
          </Button>
          <Button 
            component={Link} 
            to="/projects" 
            size="lg"
            variant="subtle"
            rightSection={<span>→</span>}
          >
            View projects
          </Button>
        </Group>
      </Stack>
    </Container>
  )
}

export default Home