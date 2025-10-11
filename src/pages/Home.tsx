import { Button, Container, Grid, Group, Image, Stack, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import bogdanPhoto from '../assets/bogdan_photo_4.jpeg'

const Home = () => {
  return (
    <Container size="lg" py="xl">
      <Grid gutter="xl" align="stretch">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image
            src={bogdanPhoto}
            alt="Bogdan Neterebskii"
            radius="md"
            w="100%"
            mx="auto"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="lg" align="flex-start">
            <Text size="lg" c="pine.6">
              Welcome text goes here. Share a short introduction or current focus.
            </Text>
            <Group gap="sm" wrap="wrap">
              <Button component={Link} to="/about" radius="xl" color="ember">
                About me
              </Button>
              <Button component={Link} to="/contact" variant="light" radius="xl" color="pine">
                Contacts
              </Button>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Home
