import { Container, Title, Text, Stack, Paper, Anchor, Group, Badge, SimpleGrid } from '@mantine/core'
import profileData from '../utils/profileData'

function Contact() {
  const { name, location, contacts, interests } = profileData

  return (
    <Container size="md" py={60}>
      <Stack spacing="xl">
        <Stack spacing="xs">
          <Title order={1}>Connect with {name}</Title>
          <Text color="dimmed">Based in {location}</Text>
          <Text>
            The quickest way to reach me is through the channels below. I am always open to
            discussing collaborations around software, research, or creative tech experiments.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {contacts.map((contact) => (
            <Paper key={contact.label} withBorder p="lg" radius="md">
              <Text fw={600}>{contact.label}</Text>
              <Anchor href={contact.href} target="_blank" rel="noreferrer">
                {contact.value}
              </Anchor>
            </Paper>
          ))}
        </SimpleGrid>

        <Paper withBorder p="lg" radius="md">
          <Title order={3} size="1.2rem">Topics I love to talk about</Title>
          <Group mt="sm" spacing="sm">
            {interests.map((interest) => (
              <Badge key={interest} variant="light" size="lg">
                {interest}
              </Badge>
            ))}
          </Group>
        </Paper>

        <Paper withBorder p="lg" radius="md">
          <Title order={3} size="1.2rem">What to expect</Title>
          <Stack spacing="sm" mt="sm">
            <Text>
              I usually respond within a couple of days. Please include a short overview of the
              problem you are trying to solve so I can prepare meaningful next steps.
            </Text>
            <Text>
              For urgent matters you can flag it in the subject. I am happy to hop on a quick call once we
              sync up over email or LinkedIn.
            </Text>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  )
}

export default Contact
