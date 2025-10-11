import { Button, Container, Grid, Group, Image, Stack, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
import bogdanPhoto from '../assets/bogdan_photo_4.jpeg'
import profileData from '../utils/profileData'

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
            <Stack gap="xs">
              <Title order={2}>
                Hey, I am Bogdan Neterebskii
              </Title>
              <Text size="lg">
                Senior software engineer and tech lead with {profileData.experienceYears} years of experience.
              </Text>
              <Text size="md">
                After a decade across backend, frontend, and ML teams, I stay close to the code while guiding teams through complex delivery.
              </Text>
            </Stack>

            <Stack gap="sm">
              <Group gap="sm" wrap="wrap">
                <Button component={Link} to="/about" radius="xl" color="ember">
                  About me
                </Button>
                <Text size="sm">
                  if you want to read about my experience
                </Text>
              </Group>

              <Group gap="sm" wrap="wrap">
                <Button component={Link} to="/contact" variant="light" radius="xl" color="pine">
                  Contacts
                </Button>
                <Text size="sm">
                  if you wanna to make some cool stuff together or just meet
                </Text>
              </Group>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Home
