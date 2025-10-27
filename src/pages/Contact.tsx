import { Card, Container, Grid, Image, Stack, Text, Title } from '@mantine/core'
import ContactLinks from '../components/ContactLinks'
import profileData from '../utils/profileData'
import bogdanPhoto from '../assets/bogdan_photo_1.jpg'

const Contact = () => {
  const { location, contacts } = profileData

  return (
    <Container size="lg" py="xl">
      <Grid gutter="xl" align="stretch">
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Image
            src={bogdanPhoto}
            alt="Bogdan Neterebskii"
            radius="md"
            w="100%"
            mx="auto"
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack gap="xl">
            <Stack gap="xs">
              <Title order={1}>
                Contacts
              </Title>
            </Stack>

            <Card withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Text size="sm" tt="uppercase" fw={600} style={{ letterSpacing: '0.2em' }}>
                  Online
                </Text>
                <ContactLinks contacts={contacts} />
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Text size="sm" tt="uppercase" fw={600} style={{ letterSpacing: '0.2em' }}>
                  Offline
                </Text>
                <Text size="md">
                  Somewhere near {location}
                </Text>
              </Stack>
            </Card>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Contact
