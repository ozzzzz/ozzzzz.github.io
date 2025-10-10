import { Card, Container, Stack, Text, Title } from '@mantine/core'
import ContactLinks from '../components/ContactLinks'
import profileData from '../utils/profileData'

const Contact = () => {
  const { location, contacts } = profileData

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Stack gap="xs">
          <Title order={1} c="pine.9">
            Contacts
          </Title>
        </Stack>

        <Card withBorder p="lg" radius="md">
          <Stack gap="sm">
            <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
              Online
            </Text>
            <ContactLinks contacts={contacts} />
          </Stack>
        </Card>

        <Card withBorder p="lg" radius="md">
          <Stack gap="sm">
            <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
              Offline
            </Text>
            <Text size="md" c="pine.7">
              Somewhere near {location}
            </Text>
          </Stack>
        </Card>
      </Stack>
    </Container>
  )
}

export default Contact
