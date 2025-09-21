import { Container, Title, Text, Stack, Paper, Group, Anchor, Badge, List, Button, SimpleGrid } from '@mantine/core'
import { Link } from 'react-router-dom'
import profileData from '../utils/profileData'

function ProfileBrief() {
  const { name, headline, currentFocus, overview, focusAreas, quickFacts, contacts, experiences, interests } = profileData

  return (
    <Container size="md" py={60}>
      <Stack spacing="xl">
        <Stack spacing="xs">
          <Title order={1}>{name}</Title>
          <Text size="xl" fw={500}>{headline}</Text>
          <Text color="dimmed">{currentFocus}</Text>
        </Stack>

        <Paper withBorder p="lg" radius="md">
          <Stack spacing="sm">
            {overview.map((item) => (
              <Text key={item}>{item}</Text>
            ))}
          </Stack>
        </Paper>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          <Paper withBorder p="lg" radius="md">
            <Title order={3} size="1.2rem">Quick facts</Title>
            <Stack mt="sm" spacing="xs">
              {quickFacts.map((fact) => (
                <Group key={fact.label} justify="space-between">
                  <Text fw={500}>{fact.label}</Text>
                  <Text color="dimmed">{fact.value}</Text>
                </Group>
              ))}
            </Stack>
          </Paper>

          <Paper withBorder p="lg" radius="md">
            <Title order={3} size="1.2rem">Reach out</Title>
            <Stack mt="sm" spacing="xs">
              {contacts.map((contact) => (
                <Anchor key={contact.label} href={contact.href} target="_blank" rel="noreferrer">
                  {contact.label}: {contact.value}
                </Anchor>
              ))}
            </Stack>
          </Paper>
        </SimpleGrid>

        <Paper withBorder p="lg" radius="md">
          <Title order={3} size="1.2rem">Focus areas</Title>
          <Group mt="sm" spacing="sm">
            {focusAreas.map((area) => (
              <Badge key={area} variant="light" size="lg">{area}</Badge>
            ))}
          </Group>
        </Paper>

        <Paper withBorder p="lg" radius="md">
          <Title order={3} size="1.2rem">Recent highlights</Title>
          <Stack mt="md" spacing="lg">
            {experiences.slice(0, 3).map((experience) => (
              <Stack key={experience.company} spacing="xs">
                <Group justify="space-between" align="flex-start">
                  <div>
                    <Text fw={600}>{experience.role}</Text>
                    <Anchor href={experience.companyUrl} target="_blank" rel="noreferrer">
                      {experience.company}
                    </Anchor>
                  </div>
                  <Text color="dimmed">{experience.period}</Text>
                </Group>
                <Text color="dimmed">{experience.location}</Text>
                <Text>{experience.summary}</Text>
              </Stack>
            ))}
          </Stack>
        </Paper>

        <Paper withBorder p="lg" radius="md">
          <Title order={3} size="1.2rem">Interests</Title>
          <List spacing="xs" mt="sm">
            {interests.map((interest) => (
              <List.Item key={interest}>{interest}</List.Item>
            ))}
          </List>
        </Paper>

        <Group justify="space-between">
          <Text color="dimmed">Want the full story?</Text>
          <Button component={Link} to="/profile/detailed" variant="filled">
            View detailed profile
          </Button>
        </Group>
      </Stack>
    </Container>
  )
}

export default ProfileBrief
